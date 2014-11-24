/**
 * 
 */
package org.zhubao.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.zhubao.docx.IStatusCode;
import org.zhubao.util.JsonResponse;
import org.zhubao.vo.UserVo;

/**
 * @author jason.zhu
 * @date   2014-11-24
 * @email jasonzhu@augmentum.com.cn
 */
@Controller
public class LoginController {

	@RequestMapping(value = "/login",method = RequestMethod.POST)
	
	public JsonResponse<UserVo> login(String emailAddress,String password){
		return new JsonResponse<UserVo>(IStatusCode.SUCCESS,new UserVo());
	}
}
