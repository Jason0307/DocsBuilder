/**
 * 
 */
package org.zhubao.docx;

/**
 * @author jason.zhu
 * @date   2014-11-20
 * @email jasonzhu@augmentum.com.cn
 */
public class ErrorCodeObject {

	private int code;
	private String msg;
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	@Override
	public String toString() {
		return "ErrorCodeObject [code=" + code + ", msg=" + msg + "]";
	}
	
}
