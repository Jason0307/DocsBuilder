package org.zhubao.docx;

public class ApiParameter {

	Class<?> typeClass;
	String type;
	String name;
	String mockData;
	String reference;

	public ApiParameter(Class<?> typeClass, String name) {
		super();
		this.typeClass = typeClass;
		this.type = typeClass.getSimpleName();
		this.name = name;
	}

	public Class<?> getTypeClass() {
		return typeClass;
	}

	public void setTypeClass(Class<?> typeClass) {
		this.typeClass = typeClass;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMockData() {
		return mockData;
	}

	public void setMockData(String mockData) {
		this.mockData = mockData;
	}

	public String getReference() {
		return reference;
	}

	public void setReference(String reference) {
		this.reference = reference;
	}

	@Override
	public String toString() {
		return "ApiParameter [typeClass=" + typeClass + ", type=" + type
				+ ", name=" + name + ", mockData=" + mockData + ", reference="
				+ reference + "]";
	}

}
