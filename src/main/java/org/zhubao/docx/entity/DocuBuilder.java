package org.zhubao.docx.entity;

import java.io.File;
import java.io.StringWriter;
import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FilenameUtils;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.core.LocalVariableTableParameterNameDiscoverer;
import org.springframework.core.ParameterNameDiscoverer;
import org.springframework.web.bind.annotation.RequestMapping;
import org.zhubao.annotation.IntegerSequence;
import org.zhubao.annotation.IntegerType;
import org.zhubao.annotation.StringSequence;
import org.zhubao.annotation.StringType;
import org.zhubao.docx.AbstractBaseBuilder;
import org.zhubao.util.Constants;
import org.zhubao.util.FormatUtil;

public class DocuBuilder extends AbstractBaseBuilder {
	ParameterNameDiscoverer nameDiscoverer = new LocalVariableTableParameterNameDiscoverer();
	static ObjectMapper objectMapper = new ObjectMapper();

	public static void main(String[] args) throws Exception {
		DocuBuilder builder = new DocuBuilder();
		builder.build();
	}

	public void build() throws Exception {
		initTemplate("/org/zhubao/docx/template/api_docu.ftl");
		DocuModel docuModel = buildModel("org.zhubao.controller");
		Map<String, List<EndpointMethod>> docuGroup = parseGroupFromDocuModel(docuModel);
		ServerConfig config = parseConfigFromDocuGroup(docuModel);
		outputDir = "docu";
		outputTypes(docuModel);
		outputDoc("/api_docu.html", docuGroup, config);
	}

	private ServerConfig parseConfigFromDocuGroup(DocuModel docuModel) {
		ServerConfig config = new ServerConfig();
		if (null != docuModel) {
			Docusign docusign = docuModel.getDocusign();
			if (null != docusign) {
				config.setBaseURL(docusign.getBaseURL());
				config.setName(docusign.getName());
				config.setVersion(docusign.getVersion());
				config.setProtocol(docusign.getProtocol());
			}
		}
		
		return config;
	}

	protected void outputTypes(DocuModel docuModel) throws Exception{
		String result = objectMapper.writeValueAsString(docuModel);
		result = FormatUtil.formatJson(result);
		writeStringToFile(result, outputDir, "/apiTypes");
	}

	protected Map<String, List<EndpointMethod>> parseGroupFromDocuModel(
			DocuModel docuModel) {
		Map<String, List<EndpointMethod>> docuGroup = new HashMap<String, List<EndpointMethod>>();
		if (null != docuModel) {
			Docusign docusign = docuModel.getDocusign();
			if (null != docusign) {
				List<Endpoint> endpoints = docuModel.getDocusign()
						.getEndpoints();
				for (Endpoint endpoint : endpoints) {
					docuGroup.put(endpoint.getName(), endpoint.getMethods());
				}
			}
		}

		return docuGroup;
	}

	protected void outputDoc(String fileName,
			Map<String, List<EndpointMethod>> docuGroup,ServerConfig config) throws Exception {
		Map<String, Object> context = new HashMap<String, Object>();
		System.out.println("docuGroup : " + docuGroup);
		context.put("config", config);
		context.put("docuGroup", docuGroup);
		StringWriter writer = new StringWriter();
		template.process(context, writer);
		String result = writer.toString();
		writeStringToFile(result, outputDir, fileName);

	}

	public DocuModel buildModel(String packageName) throws Exception {
		DocuModel docuModel = new DocuModel();
		Docusign docusign = new Docusign();
		docusign.setVersion(Constants.VERSION);
		docusign.setProtocol(Constants.PROTOCOL_HTTP);
		docusign.setName(Constants.DOCU_API_NAME);
		docusign.setBaseURL(Constants.BASE_URL);
		List<Endpoint> endpoints = new ArrayList<Endpoint>();
		Map<String, ParamType> paramTypes = new HashMap<String, ParamType>();
		Collection<Class<?>> controllerClasses = getControllerClasses(packageName);
		for (Class<?> clazz : controllerClasses) {
			Endpoint endpoint = new Endpoint();
			String clazzName = clazz.getSimpleName();
			String name = parseEndPointName(clazzName);
			endpoint.setName(name);
			List<EndpointMethod> endpointMethods = new ArrayList<EndpointMethod>();
			String baseReqMapping = "";
			for (Annotation annotation : clazz.getDeclaredAnnotations()) {
				if (annotation instanceof RequestMapping) {
					RequestMapping reqMapping = (RequestMapping) annotation;
					baseReqMapping += reqMapping.value()[0];
					break;
				}
			}

			for (Method method : clazz.getDeclaredMethods()) {
				EndpointMethod endpointMethod = new EndpointMethod();
				boolean hasRequestMapping = false;
				for (Annotation annotation : method.getDeclaredAnnotations()) {
					if (annotation instanceof RequestMapping) {
						hasRequestMapping = true;
						RequestMapping reqMapping = (RequestMapping) annotation;
						endpointMethod.setHttpMethod(reqMapping.method()[0]
								.name());
						endpointMethod.setUri(baseReqMapping
								+ reqMapping.value()[0].replaceAll("[{]", ":").replaceAll("[}]", ""));
						endpointMethod.setProtocol(Constants.PROTOCOL_HTTP);
						break;
					}
				}
				if (!hasRequestMapping) {
					continue;
				}
				endpointMethod.setMethodName(method.getName());
				Class<?>[] pmClasses = method.getParameterTypes();
				String[] pmNames = nameDiscoverer.getParameterNames(method);
				List<String> parameters = new ArrayList<String>();
				Annotation[][] pAnnotations = method.getParameterAnnotations();
				for (int i = 0; i < pmClasses.length; i++) {
					Class<?> pmClass = pmClasses[i];
					String pmName = pmNames[i];
					if (pmClass != HttpServletRequest.class) {
						String paramSimpleClass = pmClass.getSimpleName();
						ParamType paramType = new ParamType();
						paramType.setDisplayName(pmName);
						paramType.setType(paramSimpleClass);
						paramType
								.setRequired(Constants.PARAM_VALUE_REQUIRED_NO);
						// get the param annotation
						Annotation[] annotations = pAnnotations[i];
						for (Annotation annotation : annotations) {
							if (annotation instanceof IntegerSequence) {
								paramType
										.setType(Constants.PARAM_TYPE_ENUMERATED);
								List<String> enumeratedList = new ArrayList<String>();
								IntegerSequence integerSequence = (IntegerSequence) annotation;
								IntegerType[] types = integerSequence.value();
								for (IntegerType type : types) {
									enumeratedList.add(type.name());
								}
								paramType.setEnumeratedList(enumeratedList);
							}
							if (annotation instanceof StringSequence) {
								paramType
										.setType(Constants.PARAM_TYPE_ENUMERATED);
								List<String> enumeratedList = new ArrayList<String>();
								StringSequence stringSequence = (StringSequence) annotation;
								StringType[] types = stringSequence.value();
								for (StringType stringType : types) {
									enumeratedList.add(stringType.name());
								}
								paramType.setEnumeratedList(enumeratedList);
							}
						}

						paramTypes.put(pmName, paramType);
						parameters.add(pmName);
						endpointMethod.setParameters(parameters);
					}
				}
				endpointMethods.add(endpointMethod);
			}
			endpoints.add(endpoint);
			endpoint.setMethods(endpointMethods);
			docusign.setEndpoints(endpoints);
			docusign.setTypes(paramTypes);
			docuModel.setDocusign(docusign);
		}
		return docuModel;
	}

	protected String parseEndPointName(String clazzName) {
		int index = clazzName.lastIndexOf("Controller");
		String name = clazzName.substring(0, index);
		return name;
	}

	public Collection<Class<?>> getControllerClasses(String packageName)
			throws Exception {
		List<Class<?>> ctrClasses = new ArrayList<Class<?>>();
		Enumeration<URL> urls = Thread.currentThread().getContextClassLoader()
				.getResources("");
		while (urls.hasMoreElements()) {
			URL url = urls.nextElement();
			File file = new File(url.getFile() + "/"
					+ packageToPath(packageName));
			if (file.exists()) {
				for (String filename : file.list()) {
					String baseName = FilenameUtils.getBaseName(filename);
					String className = packageName + "." + baseName;
					Class<?> ctrClass = toClass(className);
					if (isMeetRequirement(ctrClass)) {
						ctrClasses.add(ctrClass);
					}
				}
			}
		}
		return ctrClasses;
	}

	protected boolean isMeetRequirement(Class<?> clazz) {
		if (Modifier.isAbstract(clazz.getModifiers())) {
			return false;
		}
		if (Modifier.isInterface(clazz.getModifiers())) {
			return false;
		}
		return true;
	}

	protected Class<?> toClass(String className) throws ClassNotFoundException {
		if ("int".equals(className)) {
			return int.class;
		} else if ("long".equals(className)) {
			return long.class;
		} else if ("boolean".equals(className)) {
			return boolean.class;
		} else {
			return Class.forName(className);
		}
	}

	protected String packageToPath(String packageName) {
		return packageName.replaceAll("\\.", "/");
	}
}
