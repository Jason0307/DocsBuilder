/**
 * 
 */
package org.zhubao.vo;

/**
 * @author jason.zhu
 * @date   2014-11-24
 * @email jasonzhu@augmentum.com.cn
 */
public class UserVo {

	private int userId;
	private String username;
	private String email;
	private WalletVo walletVo;
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public WalletVo getWalletVo() {
		return walletVo;
	}
	public void setWalletVo(WalletVo walletVo) {
		this.walletVo = walletVo;
	}
	
	
}
