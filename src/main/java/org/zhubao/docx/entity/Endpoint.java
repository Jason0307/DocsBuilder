package org.zhubao.docx.entity;

import java.util.List;

public class Endpoint {
	private String name;
	private List<EndpointMethod> methods;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<EndpointMethod> getMethods() {
		return methods;
	}
	public void setMethods(List<EndpointMethod> methods) {
		this.methods = methods;
	}
	
	
}
