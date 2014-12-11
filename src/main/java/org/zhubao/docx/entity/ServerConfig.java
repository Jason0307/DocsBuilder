package org.zhubao.docx.entity;

public class ServerConfig {
	private String name;
	private String protocol;
	private String baseURL;
	private String version;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProtocol() {
		return protocol;
	}

	public void setProtocol(String protocol) {
		this.protocol = protocol;
	}

	public String getBaseURL() {
		return baseURL;
	}

	public void setBaseURL(String baseURL) {
		this.baseURL = baseURL;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

}
