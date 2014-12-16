package org.zhubao.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.zhubao.annotation.StringSequence;
import org.zhubao.util.JsonResponse;
import org.zhubao.vo.ItemVo;
import org.zhubao.vo.ParentVo;
import org.zhubao.vo.UserVo;

@Controller
public class GameController {

	@RequestMapping(value = "/game/list", method = RequestMethod.GET)
	public @ResponseBody JsonResponse<Boolean> gameList(String accessToken,UserVo userVo,ItemVo itemVo) {
		return null;
	}
	
	@RequestMapping(value = "/{accessToken}/progress/detail", method = RequestMethod.GET)
	public @ResponseBody JsonResponse<Boolean> progressDetail(String accessToken,int childId,@StringSequence String device) {
		return null;
	}
	
	@RequestMapping(value = "/account/test", method = RequestMethod.POST)
	public @ResponseBody
	JsonResponse<Boolean> test(@RequestParam String accessToken,ParentVo vo) {
		System.out.println(vo);
		return null;
	}
}
