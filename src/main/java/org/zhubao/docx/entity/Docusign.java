package org.zhubao.docx.entity;

import java.util.List;
import java.util.Map;

public class Docusign {

	private String name;
	private String protocol;
	private String baseURL;
	private String version;
	private List<Endpoint> endpoints;
	private Map<String,ParamType> types;
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
	public List<Endpoint> getEndpoints() {
		return endpoints;
	}
	public void setEndpoints(List<Endpoint> endpoints) {
		this.endpoints = endpoints;
	}
	public Map<String,ParamType> getTypes() {
		return types;
	}
	public void setTypes(Map<String,ParamType> types) {
		this.types = types;
	}
	
	
}
