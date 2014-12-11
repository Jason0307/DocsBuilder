package org.zhubao.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.zhubao.annotation.StringSequence;
import org.zhubao.util.JsonResponse;

@Controller
public class GameController {

	@RequestMapping(value = "/game/list", method = RequestMethod.GET)
	public @ResponseBody JsonResponse<Boolean> gameList(String accessToken) {
		return null;
	}
	
	@RequestMapping(value = "/{accessToken}/progress/detail", method = RequestMethod.GET)
	public @ResponseBody JsonResponse<Boolean> progressDetail(String accessToken,int childId,@StringSequence String device) {
		return null;
	}
}
