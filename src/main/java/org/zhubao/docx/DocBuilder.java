package org.zhubao.docx;

public class DocBuilder {

	public static void  buildDocs(String controllerPackage,String voPackage,String errorCodeConfig,String outputDir) throws Exception{
		VoDocBuilder voDocBuilder = new VoDocBuilder();
		voDocBuilder.setOutputDir(outputDir);
		voDocBuilder.build(voPackage);

		ApiDocBuilder apiDocBuilder = new ApiDocBuilder();
		apiDocBuilder.setOutputDir(outputDir);
		String[] apiContainer = new String[]{"Rest"};
		apiDocBuilder.build(apiContainer,controllerPackage);
		
		ErrorCodeDocBuilder errorCodeDocBuilder = new ErrorCodeDocBuilder();
		errorCodeDocBuilder.setOutputDir(outputDir);
		errorCodeDocBuilder.build(errorCodeConfig);
	}
	public static void main(String[] args) throws Exception {
		DocBuilder.buildDocs("org.zhubao.controller", "org.zhubao.vo", "config/init_gameserver_error_code.properties", "docs/generated");
	}

}
