/**
 * 
 */
package org.zhubao.docx;

/**
 * @author jason.zhu
 * @date 2014-12-2
 * @email jasonzhu@augmentum.com.cn
 */
public enum ValidateType {

	Name(1), Email(2), Password(3), Age(4), Gender(5),Web(1),Phone(2);

	private int type;

	private ValidateType(int type) {
		this.type = type;
	}

	public String toString() {
		return "\"" + this.name() + "\":" + type;
	}
}
