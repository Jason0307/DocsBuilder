package org.zhubao.docx;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;
import java.io.StringWriter;
import java.io.Writer;
import java.lang.annotation.Annotation;
import java.lang.reflect.Array;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FilenameUtils;
import org.codehaus.jackson.map.ObjectMapper;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.markdown4j.Markdown4jProcessor;
import org.springframework.core.LocalVariableTableParameterNameDiscoverer;
import org.springframework.core.ParameterNameDiscoverer;
import org.springframework.web.bind.annotation.RequestMapping;

import sun.reflect.generics.reflectiveObjects.GenericArrayTypeImpl;

public class ApiDocBuilder extends AbstractBaseBuilder {
	ObjectMapper objectMapper = new ObjectMapper();
	ParameterNameDiscoverer nameDiscoverer = new LocalVariableTableParameterNameDiscoverer();
	static int GENERATE_TYPE = Constants.GENERATE_MARKDOWN;

	public static void main(String[] args) throws Exception {
		ApiDocBuilder apiDocBuilder = new ApiDocBuilder();
		apiDocBuilder.build("org.zhubao.controller");
	}

	public void build(String controllerPackages) throws Exception {
		String templateFile = getTemplateFileByType(GENERATE_TYPE);
		initTemplate(templateFile);
		String[] packages = controllerPackages.split(",");
		outputDir = outputDir
				+ ((Constants.GENERATE_MARKDOWN == GENERATE_TYPE) ? "/markdown"
						: "/html/report");
		int i = 1;
		for (String packageName : packages) {
			Map<String, Vector<ApiObject>> apiObjectGroup = new HashMap<String, Vector<ApiObject>>();
			Collection<Class<?>> classes = getControllerClasses(packageName);
			for (Class<?> clazz : classes) {
				parseControllerClass(clazz, apiObjectGroup);
			}
			if (Constants.GENERATE_MARKDOWN == GENERATE_TYPE) {
				String fileName = "/api" + i + ".md";
				outputDoc(fileName, apiObjectGroup);
				renderHtml(fileName);
			} else {
				String fileName = "/api" + i + ".html";
				outputDoc(fileName, apiObjectGroup);
			}
			i++;
		}

	}

	private String getTemplateFileByType(int generationType) {
		String templateFile = "";
		switch (generationType) {
		case Constants.GENERATE_HTML:
			templateFile = "/org/zhubao/docx/template/api_html.ftl";
			break;
		case Constants.GENERATE_MARKDOWN:
			templateFile = "/org/zhubao/docx/template/api_markdown.ftl";
			break;
		default:
			break;
		}
		return templateFile;
	}

	private Collection<Class<?>> getControllerClasses(String packageName)
			throws ClassNotFoundException, IOException {
		List<Class<?>> ctrClasses = new ArrayList<Class<?>>();
		Enumeration<URL> urls = Thread.currentThread().getContextClassLoader()
				.getResources("");
		while (urls.hasMoreElements()) {
			URL url = urls.nextElement();
			System.out.println("Url :" + url.getFile() + " , package : " + packageName);
			File file = new File(url.getFile() + "/"
					+ packageToPath(packageName));
			if (file.exists()) {
				for (String filename : file.list()) {
					String baseName = FilenameUtils.getBaseName(filename);
					String className = packageName + "." + baseName;
					Class<?> ctrClass = toClass(className);

					if (isMeetRequirement(ctrClass)) {
						log("Find controller: " + ctrClass.getSimpleName());
						ctrClasses.add(ctrClass);
					}
				}
			}
		}
		return ctrClasses;
	}

	private void parseControllerClass(Class<?> clazz,
			Map<String, Vector<ApiObject>> apiObjectGroup) throws Exception {

		Vector<ApiObject> apiObjects = new Vector<ApiObject>();

		String baseReqMapping = "";
		for (Annotation annotation : clazz.getDeclaredAnnotations()) {
			if (annotation instanceof RequestMapping) {
				RequestMapping reqMapping = (RequestMapping) annotation;
				baseReqMapping += reqMapping.value()[0];
				break;
			}
		}

		for (Method method : clazz.getDeclaredMethods()) {
			ApiObject apiObject = new ApiObject();
			System.out.println("Controller method :" + method.getName());
			boolean hasRequestMapping = false;
			for (Annotation annotation : method.getDeclaredAnnotations()) {
				if (annotation instanceof RequestMapping) {
					hasRequestMapping = true;
					RequestMapping reqMapping = (RequestMapping) annotation;
					apiObject.setMethod(reqMapping.method()[0].name());
					apiObject.setRequestUrl(baseReqMapping
							+ reqMapping.value()[0]);
					break;
				}
			}
			if (!hasRequestMapping) {
				continue;
			}

			apiObject.setName(method.getName());

			List<ApiParameter> parameters = new ArrayList<ApiParameter>();
			Class<?>[] pmClasses = method.getParameterTypes();
			String[] pmNames = nameDiscoverer.getParameterNames(method);
			for (int i = 0; i < pmClasses.length; i++) {
				Class<?> pmClass = pmClasses[i];
				String pmName = pmNames[i];
				if (pmClass != HttpServletRequest.class) {
					ApiParameter apiParameter = new ApiParameter(pmClass,
							pmName);
					String clazzName = pmClass.getName();
					if (clazzName.contains("Vo")) {
						apiParameter.setMockData(objectMapper
								.writeValueAsString(getReturnMockData(pmClass,
										pmClass.newInstance())));
					}
					parameters.add(apiParameter);
				}
			}

			Class<?>[] typeClassArray = parseGenericType(method
					.getGenericReturnType());
			Class<?> genericTypeClass = typeClassArray[1];
			Class<?> genericTypeClass2 = typeClassArray[2];

			apiObject.setParameters(parameters);
			apiObject.setReturnObjectClass(genericTypeClass);
			if (null != genericTypeClass) {
				if (genericTypeClass.getName().equals("java.lang.Boolean")) {
					Response response = new Response(IStatusCode.SUCCESS, true);
					apiObject.setMockData(FormatUtil.formatJson(objectMapper
							.writeValueAsString(response)));

				} else {
					Object returnObject = getReturnMockData(genericTypeClass,
							genericTypeClass.newInstance());
					Response response = new Response(IStatusCode.SUCCESS,
							returnObject);
					String mockData = objectMapper.writeValueAsString(response);
					apiObject.setMockData(FormatUtil.formatJson(mockData));
				}
			}
			if (genericTypeClass2 != null) {
				apiObject.setReturnObjectClass2(genericTypeClass2);
			}
			if (null != genericTypeClass
					&& !genericTypeClass.getName().equals("String")) {
				apiObjects.add(apiObject);
			}

		}

		String className = clazz.getSimpleName();
		String groupName = "";
		if (className.contains("Rest")) {
			groupName = className.substring(4, className.indexOf("Controller"));
		} else {
			groupName = className.substring(0, className.indexOf("Controller"));
		}
		apiObjectGroup.put(groupName, apiObjects);

	}

	private void outputDoc(String fileName,
			Map<String, Vector<ApiObject>> apiObjectGroup) throws Exception {
		Map<String, Object> context = new HashMap<String, Object>();

		System.out.println("apiObjectGroup : " + apiObjectGroup);
		context.put("builderUtil", new BuilderUtil());
		context.put("formatUtil", new FormatUtil());
		context.put("apiObjectGroup", apiObjectGroup);

		StringWriter writer = new StringWriter();
		template.process(context, writer);
		String result = writer.toString();
		writeStringToFile(result, outputDir, fileName);
	}

	/**
	 * @param outputDir1
	 * @param fileName
	 */
	private void renderHtml(String fileName) throws Exception {
		Markdown4jProcessor processor = new Markdown4jProcessor();
		Reader in = new FileReader(outputDir + "/" + fileName);
		String htmlName = fileName.substring(0, fileName.lastIndexOf("."));
		File reportDir = new File(outputDir + "/report");
		if(!reportDir.exists()){
			reportDir.mkdirs();
		}
		Writer out = new FileWriter(outputDir + "/report/" + htmlName + ".html");
		String s = processor.process(in);
		Document doc = Jsoup.parse(new File(outputDir
				+ "/template/template.html"), "UTF-8");
		doc.getElementById("content").append(s);
		out.write(doc.html());
		out.close();

	}

	/**
	 * The method is used to get the object fields value by refelction,example
	 * ParentVo ,pass ParentVo.class,then you will get an object new
	 * Parent(),which will contains field value by default
	 * 
	 * @param clazz
	 *            means the object class you want to get the value by reflect
	 * @param returnObject
	 *            the clazz object,clazz.newInstance()
	 * @return
	 * @throws Exception
	 */

	@SuppressWarnings({ "rawtypes", "unchecked" })
	private Object getReturnMockData(Class<?> clazz, Object returnObject)
			throws Exception {
		Field[] fields = clazz.getDeclaredFields();
		for (Field field : fields) {
			String name = field.getName();
			Class<?> fClz = field.getType();
			field.setAccessible(true);
			Object value = field.get(returnObject);
			if (null == value) {
				if (fClz.isAssignableFrom(List.class)) {
					Type gt = field.getGenericType();
					ParameterizedType pt = (ParameterizedType) gt;
					Class<?> gClazz = (Class<?>) pt.getActualTypeArguments()[0];
					List data = new ArrayList();
					int listSize = getListSize(field);
					for (int i = 0; i < listSize; i++) {
						data.add(getParameterizedTypeData(gClazz, clazz, i));
					}
					value = data;
					Method method = getMethod(clazz, name, fClz);
					method.invoke(returnObject, value);
				} else if (fClz.isArray()) {
					Class<?> elementClass = fClz.getComponentType();
					Object array = Array.newInstance(elementClass, 5);
					Method method = getMethod(clazz, name, fClz);
					method.invoke(returnObject, array);
				} else if (fClz.isAssignableFrom(Date.class)) {
					value = fClz.newInstance();
					Method method = getMethod(clazz, name, fClz);
					method.invoke(returnObject, value);
				} else {
					value = fClz.newInstance();
					Method method = getMethod(clazz, name, fClz);
					method.invoke(returnObject, value);
					getReturnMockData(fClz, value);
				}
			} else if (value.getClass().isAssignableFrom(HashMap.class)) {
				Type mapMainType = field.getGenericType();
				if (mapMainType instanceof ParameterizedType) {
					ParameterizedType parameterizedType = (ParameterizedType) mapMainType;
					Type[] types = parameterizedType.getActualTypeArguments();
					Class<?> keyType = (Class<?>) types[0];
					Type valueType = types[1];
					Object valueData = null;
					if (valueType.getClass().isAssignableFrom(
							GenericArrayTypeImpl.class)) {
						GenericArrayTypeImpl vType = (GenericArrayTypeImpl) valueType;
						Object o = Array.newInstance(
								(Class<?>) vType.getGenericComponentType(), 5);
						valueData = o;
					} else {
						valueData = getParameterizedTypeData(
								(Class<?>) valueType, value.getClass(), 1);
					}
					Map map = new HashMap();
					Object keyData = getParameterizedTypeData(keyType,
							value.getClass(), 1);
					map.put(keyData, valueData);
					value = map;
					Method method = getMethod(clazz, name, fClz);
					method.invoke(returnObject, value);
				}
			}
		}
		return returnObject;
	}

	/**
	 * this method is uesd to get the value for the primary type
	 * (Integer,Long,Array...)
	 * 
	 * @param gClazz
	 *            generic class
	 * @param clazz
	 *            parent class
	 * @return
	 */
	private Object getParameterizedTypeData(Class<?> gClazz, Class<?> clazz,
			int i) throws Exception {
		Object value = null;
		if (gClazz.isAssignableFrom(Double.class)) {
			value = new Double(i);
		} else if (gClazz.isAssignableFrom(String.class)) {
			value = new String("test" + i);
		} else if (gClazz.isAssignableFrom(Integer.class)) {
			value = new Integer(i);
		} else if (gClazz.isArray()) {
			Class<?> elementClass = gClazz.getComponentType();
			value = Array.newInstance(elementClass, 5);
		} else if (gClazz.isAssignableFrom(Date.class)) {
			value = gClazz.newInstance();
		} else {
			if (!gClazz.isAssignableFrom(clazz)) {
				value = getReturnMockData(gClazz, gClazz.newInstance());
			}
		}
		return value;
	}

	/**
	 * get the setMethod for the field
	 * 
	 * @param clazz
	 * @param name
	 * @param fClz
	 * @return
	 * @throws NoSuchMethodException
	 */
	private Method getMethod(Class<?> clazz, String name, Class<?> fClz)
			throws NoSuchMethodException {
		String methodName = "set" + name.substring(0, 1).toUpperCase()
				+ name.substring(1, name.length());
		Method method = clazz.getDeclaredMethod(methodName, fClz);
		return method;
	}

	/**
	 * get the list field size value
	 * 
	 * @param field
	 * @return
	 */
	private int getListSize(Field field) {
		int size = 1;
		if (field.isAnnotationPresent(ListSize.class)) {
			ListSize listSize = field.getAnnotation(ListSize.class);
			size = listSize.size();
		}
		return size;
	}
}
