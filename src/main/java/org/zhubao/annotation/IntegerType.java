/**
 * 
 */
package org.zhubao.annotation;

/**
 * @author jason.zhu
 * @date 2014-12-2
 * @email jasonzhu@augmentum.com.cn
 */
public enum IntegerType {

	Name(1), Email(2), Password(3), Age(4), Gender(5);

	private int type;

	private IntegerType(int type) {
		this.type = type;
	}

	public String toString() {
		return "\"" + this.name() + "\":" + type;
	}
}
