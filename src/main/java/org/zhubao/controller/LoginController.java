/**
 * 
 */
package org.zhubao.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.zhubao.annotation.StringSequence;
import org.zhubao.util.IStatusCode;
import org.zhubao.util.JsonResponse;
import org.zhubao.vo.UserVo;

/**
 * @author jason.zhu
 * @date 2014-11-24
 * @email jasonzhu@augmentum.com.cn
 */
@Controller
public class LoginController {

	@RequestMapping(value = "/user/login", method = RequestMethod.POST)
	public JsonResponse<UserVo> login(String emailAddress, String password,
			@StringSequence String device) {
		return new JsonResponse<UserVo>(IStatusCode.SUCCESS, new UserVo());
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public JsonResponse<UserVo> register(String username, String email,String icon) {
		return new JsonResponse<UserVo>(IStatusCode.SUCCESS, new UserVo());
	}
}
