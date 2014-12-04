package org.zhubao.docx;

import java.io.File;
import java.io.FileInputStream;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;
import java.util.Set;

public class ErrorCodeDocBuilder extends AbstractBaseBuilder {

	String templateFile = "/org/zhubao/docx/template/error_code.ftl";
	List<ErrorCodeObject> errorCodes = new ArrayList<ErrorCodeObject>();

	public static void main(String[] args) throws Exception {
		ErrorCodeDocBuilder errorCodeDocBuilder = new ErrorCodeDocBuilder();
		errorCodeDocBuilder.build("config/init_gameserver_error_code.properties");
	}

	public void build(String errorCodeConfig) throws Exception {
		initTemplate(templateFile);
		File codeFile = new File(errorCodeConfig);
		if (codeFile.exists()) {
			Properties prop = new Properties();
			prop.load(new FileInputStream(codeFile));
			Set<Entry<Object, Object>> set = prop.entrySet();
			Iterator<Map.Entry<Object, Object>> it = set.iterator();
			while (it.hasNext()) {
				Entry<Object, Object> entry = it.next();
				ErrorCodeObject codeObject = new ErrorCodeObject();
				Integer key = Integer.parseInt(entry.getKey().toString());
				String value = entry.getValue().toString();
				codeObject.setCode(key);
				codeObject.setMsg(value);
				errorCodes.add(codeObject);
			}
		}

		Collections.sort(errorCodes, new Comparator<ErrorCodeObject>() {

			public int compare(ErrorCodeObject o1, ErrorCodeObject o2) {
				return o2.getCode() - o1.getCode();
			}

		});
		outputDoc();

	}

	private void outputDoc() throws Exception {
		Map<String, Object> context = new HashMap<String, Object>();
		context.put("errorCodes", errorCodes);
		StringWriter writer = new StringWriter();
		template.process(context, writer);

		String result = writer.toString();

		writeStringToFile(result, outputDir, "/error_code.html");
	}

}
