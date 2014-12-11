package org.zhubao.docx.entity;

import java.util.List;

public class EndpointMethod {

	private String methodName;
	private String synopsis;
	private String httpMethod;
	private String protocol;
	private String uri;
	private List<String> parameters;
	public String getMethodName() {
		return methodName;
	}
	public void setMethodName(String methodName) {
		this.methodName = methodName;
	}
	public String getSynopsis() {
		return synopsis;
	}
	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}
	public String getHttpMethod() {
		return httpMethod;
	}
	public void setHttpMethod(String httpMethod) {
		this.httpMethod = httpMethod;
	}
	public String getProtocol() {
		return protocol;
	}
	public void setProtocol(String protocol) {
		this.protocol = protocol;
	}
	public String getUri() {
		return uri;
	}
	public void setUri(String uri) {
		this.uri = uri;
	}
	public List<String> getParameters() {
		return parameters;
	}
	public void setParameters(List<String> parameters) {
		this.parameters = parameters;
	}
	@Override
	public String toString() {
		return "EndpointMethod [methodName=" + methodName + ", synopsis="
				+ synopsis + ", httpMethod=" + httpMethod + ", protocol="
				+ protocol + ", uri=" + uri + ", parameters=" + parameters
				+ "]";
	}
	
	
	
}
