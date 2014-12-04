/**
 * 
 */
package org.zhubao.util;

import java.io.Serializable;

public class Response implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3924696025080231743L;

	private int statusCode = IStatusCode.SUCCESS;

	private String additionalInfo = null;

	private Object response;

	public Response() {
		super();
	}

	public Response(int statusCode, Object response) {
		this.statusCode = statusCode;
		this.response = response;
	}

	public Response(int statusCode, Object response, String additionalInfo) {
		this.statusCode = statusCode;
		this.response = response;
		this.additionalInfo = additionalInfo;
	}

	public int getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	public Object getResponse() {
		return response;
	}

	public void setResponse(Object response) {
		this.response = response;
	}

	public String getAdditionalInfo() {
		return additionalInfo;
	}

	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}

}
