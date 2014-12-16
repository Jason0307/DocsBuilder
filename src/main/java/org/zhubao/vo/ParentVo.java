/**
 * 
 */
package org.zhubao.vo;



/**
 * @author jason.zhu
 * @date   2014-11-10
 * @email jasonzhu@augmentum.com.cn
 */

public class ParentVo {

	
	private String email = "jzhu@gamecloudstudios.com";
	private String name = "jason";
	private String password = "123456";
	private ChildVo childVo;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public ChildVo getChildVo() {
		return childVo;
	}
	public void setChildVo(ChildVo childVo) {
		this.childVo = childVo;
	}
	@Override
	public String toString() {
		return "ParentVo [email=" + email + ", name=" + name + ", password="
				+ password + ", childVo=" + childVo + "]";
	}
	
}
