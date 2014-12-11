package org.zhubao.docx.entity;

import java.util.List;

public class ParamType {

	private String required;
	private String type;
	private String description;
	private String displayName;
	private List<String> parameters;
	private List<String> enumeratedList;
	public String getRequired() {
		return required;
	}
	public void setRequired(String required) {
		this.required = required;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDisplayName() {
		return displayName;
	}
	public void setDisplayName(String displayName) {
		this.displayName = displayName;
	}
	public List<String> getParameters() {
		return parameters;
	}
	public void setParameters(List<String> parameters) {
		this.parameters = parameters;
	}
	public List<String> getEnumeratedList() {
		return enumeratedList;
	}
	public void setEnumeratedList(List<String> enumeratedList) {
		this.enumeratedList = enumeratedList;
	}
	@Override
	public String toString() {
		return "{required=" + required + ", type=" + type
				+ ", description=" + description + ", displayName="
				+ displayName + ", parameters=" + parameters
				+ ", enumeratedList=" + enumeratedList + "}";
	}
	
	
	
}
