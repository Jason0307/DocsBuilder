package org.zhubao.docx;

public class DocBuilder {

	public static void main(String[] args) throws Exception {
		String outputDir1 = "docs/generated";
		String outputDir2 = "docs/generated";

		VoDocBuilder voDocBuilder = new VoDocBuilder();
		voDocBuilder.setOutputDir1(outputDir1);
		voDocBuilder.setOutputDir2(outputDir2);
		voDocBuilder.build();

		ApiDocBuilder apiDocBuilder = new ApiDocBuilder();
		apiDocBuilder.setOutputDir1(outputDir1);
		apiDocBuilder.setOutputDir2(outputDir2);
		apiDocBuilder.build();
		
		ErrorCodeDocBuilder errorCodeDocBuilder = new ErrorCodeDocBuilder();
		errorCodeDocBuilder.setOutputDir1(outputDir1);
		errorCodeDocBuilder.setOutputDir2(outputDir2);
		errorCodeDocBuilder.build();
	}

}
