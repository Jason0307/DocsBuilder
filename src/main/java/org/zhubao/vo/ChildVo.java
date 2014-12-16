/**
 * 
 */
package org.zhubao.vo;

/**
 * @author Jason.Zhu
 * @date   2013-8-27
 * @email jasonzhu@augmentum.com.cn
 */
public class ChildVo {

	private String name = "Gingu";
	private long userId = 0;
	private int age = 25;
	private int gender = 1;
	private String icon = "default_profile_pic.png";
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getGender() {
		return gender;
	}
	public void setGender(int gender) {
		this.gender = gender;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	@Override
	public String toString() {
		return "ChildVo [name=" + name + ", userId=" + userId + ", age=" + age
				+ ", gender=" + gender + ", icon=" + icon + "]";
	}
	
	
}
