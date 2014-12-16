(function() {
	var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates
			|| {};
	templates['tmplArrayHeader.html'] = template(function(Handlebars, depth0,
			helpers, partials, data) {
		helpers = helpers || Handlebars.helpers;
		var buffer = "", stack1, foundHelper, functionType = "function", escapeExpression = this.escapeExpression, self = this;

		function program1(depth0, data) {

			var buffer = "", stack1;
			buffer += "<select>";
			stack1 = depth0.filter;
			stack1 = helpers.each.call(depth0, stack1, {
				hash : {},
				inverse : self.noop,
				fn : self.program(2, program2, data)
			});
			if (stack1 || stack1 === 0) {
				buffer += stack1;
			}
			buffer += "</select>";
			return buffer;
		}
		function program2(depth0, data) {

			var buffer = "";
			buffer += "<option name=\"";
			depth0 = typeof depth0 === functionType ? depth0() : depth0;
			buffer += escapeExpression(depth0) + "\" value=\"";
			depth0 = typeof depth0 === functionType ? depth0() : depth0;
			buffer += escapeExpression(depth0) + "\">";
			depth0 = typeof depth0 === functionType ? depth0() : depth0;
			buffer += escapeExpression(depth0) + "</option>";
			return buffer;
		}

		buffer += "<td class=\"Param\"><span class=\"header open indentLevel";
		foundHelper = helpers.indent;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.indent;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1)
				+ " header\"></span><span><a class=\"header\"><p class=\"inline\">";
		foundHelper = helpers.displayName;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.displayName;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + " [</p><p class=\"inline index\">";
		foundHelper = helpers.index;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.index;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1)
				+ "</p><p class=\"inline\">]</p></a></span></td><td> </td><td>";
		stack1 = depth0.filter;
		stack1 = helpers['if'].call(depth0, stack1, {
			hash : {},
			inverse : self.noop,
			fn : self.program(1, program1, data)
		});
		if (stack1 || stack1 === 0) {
			buffer += stack1;
		}
		buffer += "</td><td> <a class=\"minusArray\"><i class=\"icon-minus\"></i></a></td>";
		return buffer;
	});
	templates['tmplArrayHeaderNoParam.html'] = template(function(Handlebars,
			depth0, helpers, partials, data) {
		helpers = helpers || Handlebars.helpers;
		var buffer = "", stack1, foundHelper, functionType = "function", escapeExpression = this.escapeExpression;

		buffer += "<td class=\"Param\"><span class=\"header simpleType indentLevel";
		foundHelper = helpers.indent;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.indent;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1)
				+ " header\"></span><span><p class=\"inline\">";
		foundHelper = helpers.displayName;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.displayName;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + " [</p><p class=\"inline index\">";
		foundHelper = helpers.index;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.index;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1)
				+ "</p><p class=\"inline\">]</p></span></td><td class=\"Value\"><input name=\"";
		foundHelper = helpers.rootName;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.rootName;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "[";
		foundHelper = helpers.index;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.index;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1)
				+ "]\"/></td><td> </td><td> <a class=\"minusArray\"><i class=\"icon-minus\"></i></a></td>";
		return buffer;
	});
	templates['tmplArrayType.html'] = template(function(Handlebars, depth0,
			helpers, partials, data) {
		helpers = helpers || Handlebars.helpers;
		var buffer = "", stack1, foundHelper, functionType = "function", escapeExpression = this.escapeExpression, self = this;

		function program1(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<span class=\"header open indentLevel";
			foundHelper = helpers.indent;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.indent;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1)
					+ "\"></span><span><a class=\"header\"><p class=\"inline\">";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</p></a></span>";
			return buffer;
		}

		function program3(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<span class=\"indentLevel";
			foundHelper = helpers.indent;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.indent;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "\">";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</span>";
			return buffer;
		}

		buffer += "<td class=\"Param\">";
		stack1 = depth0.indent;
		stack1 = helpers['if'].call(depth0, stack1, {
			hash : {},
			inverse : self.program(3, program3, data),
			fn : self.program(1, program1, data)
		});
		if (stack1 || stack1 === 0) {
			buffer += stack1;
		}
		buffer += "</td><td class=\"Value\"></td><td>";
		foundHelper = helpers.Type;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.type;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1)
				+ "<a class=\"plusArray\"><i class=\"icon-plus\"></i></a></td><td>";
		foundHelper = helpers.description;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.description;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "</td>";
		return buffer;
	});
	templates['tmplCallResults.html'] = template(function(Handlebars, depth0,
			helpers, partials, data) {
		helpers = helpers || Handlebars.helpers;
		var buffer = "", stack1, foundHelper, functionType = "function", escapeExpression = this.escapeExpression, self = this;

		function program1(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<li><a href=\"#";
			foundHelper = helpers.parentId;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.parentId;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1)
					+ "requestBody\" data-toggle=\"tab\">Request Body</a></li>";
			return buffer;
		}

		function program3(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<li class=\"active\"><a href=\"#";
			foundHelper = helpers.parentId;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.parentId;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1)
					+ "responseBody\" data-toggle=\"tab\">Response Body</a></li>";
			return buffer;
		}

		function program5(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<div id=\"";
			foundHelper = helpers.parentId;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.parentId;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1)
					+ "requestBody\" class=\"tab-pane\"><pre class=\"prettyprint\">";
			foundHelper = helpers.requestBody;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</pre></div>";
			return buffer;
		}

		function program7(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<div id=\"";
			foundHelper = helpers.parentId;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.parentId;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1)
					+ "responseBody\" class=\"active tab-pane\"><pre class=\"prettyprint\">";
			foundHelper = helpers;
			stack1 = JSON.stringify(depth0);
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
			buffer += escapeExpression(stack1) + "</pre></div>";
			return buffer;
		}

		buffer += "<ul class=\"nav nav-tabs\">";
		foundHelper = helpers.parentId;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.parentId;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		stack1 = JSON.stringify(depth0);
		stack1 = helpers['if'].call(depth0, stack1, {
			hash : {},
			inverse : self.noop,
			fn : self.program(3, program3, data)
		});
		if (stack1 || stack1 === 0) {
			buffer += stack1;
		}
		buffer += "</ul><div class=\"tab-content\">";
		stack1 = JSON.stringify(depth0);
		stack1 = helpers['if'].call(depth0, stack1, {
			hash : {},
			inverse : self.noop,
			fn : self.program(7, program7, data)
		});
		if (stack1 || stack1 === 0) {
			buffer += stack1;
		}
		buffer += "</div>";
		return buffer;
	});
	templates['tmplDateTimeType.html'] = template(function(Handlebars, depth0,
			helpers, partials, data) {
		helpers = helpers || Handlebars.helpers;
		var buffer = "", stack1, foundHelper, functionType = "function", escapeExpression = this.escapeExpression, self = this;

		function program1(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<span class=\"simpleType indentLevel";
			foundHelper = helpers.indent;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.indent;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "\"> </span><span>";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</span>";
			return buffer;
		}

		function program3(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<span class=\"indentLevel";
			foundHelper = helpers.indent;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.indent;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "\"> </span><span>";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</span>";
			return buffer;
		}

		function program5(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<input name=\"";
			foundHelper = helpers.rootName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.rootName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "[";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "]\" value=\"";
			foundHelper = helpers.setNameValue;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.setNameValue;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "\" class=\"datetime\"/>";
			return buffer;
		}

		function program7(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<input name=\"";
			foundHelper = helpers.rootName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.rootName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "[";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "]\" class=\"datetime\"/>";
			return buffer;
		}

		buffer += "<td> \n";
		stack1 = depth0.indent;
		stack1 = helpers['if'].call(depth0, stack1, {
			hash : {},
			inverse : self.program(3, program3, data),
			fn : self.program(1, program1, data)
		});
		if (stack1 || stack1 === 0) {
			buffer += stack1;
		}
		buffer += "</td><td class=\"Value\">";
		stack1 = depth0.setNameValue;
		stack1 = helpers['if'].call(depth0, stack1, {
			hash : {},
			inverse : self.program(7, program7, data),
			fn : self.program(5, program5, data)
		});
		if (stack1 || stack1 === 0) {
			buffer += stack1;
		}
		buffer += "</td><td>";
		foundHelper = helpers.Type;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.type;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "</td><td>";
		foundHelper = helpers.Description;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.description;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "</td>";
		return buffer;
	});
	templates['tmplDocuments.html'] = template(function(Handlebars, depth0,
			helpers, partials, data) {
		helpers = helpers || Handlebars.helpers;
		var buffer = "", stack1, foundHelper, functionType = "function", escapeExpression = this.escapeExpression, self = this;

		function program1(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<span class=\"header simpleType indentLevel";
			foundHelper = helpers.indent;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.indent;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1)
					+ "\"></span><span><a class=\"header\"><p class=\"inline\">";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</p></a></span>";
			return buffer;
		}

		function program3(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<span class=\"indentLevel\">";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</span>";
			return buffer;
		}

		buffer += "<td class=\"Parma\">";
		stack1 = depth0.indent;
		stack1 = helpers['if'].call(depth0, stack1, {
			hash : {},
			inverse : self.program(3, program3, data),
			fn : self.program(1, program1, data)
		});
		if (stack1 || stack1 === 0) {
			buffer += stack1;
		}
		buffer += "</td><td class=\"Value\"></td><td class=\"Type\"><a class=\"plusDocument\"><i class=\"icon-plus\"></i></a><input type=\"file\" name=\"file\" class=\"file\"/></td><td>";
		foundHelper = helpers.Description;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.description;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1)
				+ "<a class=\"minusSingleItem hidden\"><i class=\"icon-minus\"></i></a></td>";
		return buffer;
	});
	templates['tmplEnumeratedType.html'] = template(function(Handlebars,
			depth0, helpers, partials, data) {
		helpers = helpers || Handlebars.helpers;
		var buffer = "", stack1, foundHelper, functionType = "function", escapeExpression = this.escapeExpression, self = this;

		function program1(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<span class=\"simpleType indentLevel";
			foundHelper = helpers.indent;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.indent;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "\"> </span><span>";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</span>";
			return buffer;
		}

		function program3(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<span class=\"indentLevel\"> \n";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</span>";
			return buffer;
		}

		function program5(depth0, data) {

			var buffer = "";
			buffer += "<option value=\"";
			depth0 = typeof depth0 === functionType ? depth0() : depth0;
			buffer += escapeExpression(depth0) + "\">";
			depth0 = typeof depth0 === functionType ? depth0() : depth0;
			buffer += escapeExpression(depth0) + "</option>";
			return buffer;
		}

		buffer += "<td> \n";
		stack1 = depth0.indent;
		stack1 = helpers['if'].call(depth0, stack1, {
			hash : {},
			inverse : self.program(3, program3, data),
			fn : self.program(1, program1, data)
		});
		if (stack1 || stack1 === 0) {
			buffer += stack1;
		}
		buffer += "</td><td class=\"Value\"><select name=\"";
		foundHelper = helpers.rootName;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.rootName;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		/* buffer += escapeExpression(stack1) + "["; */
		foundHelper = helpers.displayName;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.displayName;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		/* buffer += escapeExpression(stack1) + "]\">"; */
		buffer += escapeExpression(stack1) + "\">";
		stack1 = depth0.enumeratedList;
		stack1 = helpers.each.call(depth0, stack1, {
			hash : {},
			inverse : self.noop,
			fn : self.program(5, program5, data)
		});
		if (stack1 || stack1 === 0) {
			buffer += stack1;
		}
		buffer += "</select></td><td>";
		foundHelper = helpers.Type;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.type;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "</td><td>";
		foundHelper = helpers.Description;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.description;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "</td>";
		return buffer;
	});
	templates['tmplObjectSelect.html'] = template(function(Handlebars, depth0,
			helpers, partials, data) {
		helpers = helpers || Handlebars.helpers;

		return "<fieldset></fieldset>";
	});
	templates['tmplObjectSelectItemDisable.html'] = template(function(
			Handlebars, depth0, helpers, partials, data) {
		helpers = helpers || Handlebars.helpers;
		var buffer = "", stack1, foundHelper, functionType = "function", escapeExpression = this.escapeExpression;

		buffer += "<p><input type=\"checkbox\" disabled=\"disabled\" checked=\"checked\" name=\"";
		foundHelper = helpers.param;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.param;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "\"/><label for=\"";
		foundHelper = helpers.param;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.param;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "\">";
		foundHelper = helpers.param;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.param;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "</label></p>";
		return buffer;
	});
	templates['tmplObjectSelectItemEnable.html'] = template(function(
			Handlebars, depth0, helpers, partials, data) {
		helpers = helpers || Handlebars.helpers;
		var buffer = "", stack1, foundHelper, functionType = "function", escapeExpression = this.escapeExpression;

		buffer += "<p><input type=\"checkbox\" name=\"";
		foundHelper = helpers.param;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.param;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "\"/><label for=\"";
		foundHelper = helpers.param;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.param;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "\">";
		foundHelper = helpers.param;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.param;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "</label></p>";
		return buffer;
	});
	templates['tmplObjectType.html'] = template(function(Handlebars, depth0,
			helpers, partials, data) {
		helpers = helpers || Handlebars.helpers;
		var buffer = "", stack1, foundHelper, functionType = "function", escapeExpression = this.escapeExpression, self = this;

		function program1(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<span class=\"header simpleType indentLevel";
			foundHelper = helpers.indent;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.indent;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1)
					+ "\"></span><span><a class=\"header\"><p class=\"inline\">";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</p></a></span>";
			return buffer;
		}

		function program3(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<span class=\"indentLevel\">";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</span>";
			return buffer;
		}

		buffer += "<td class=\"Param\">";
		stack1 = depth0.indent;
		stack1 = helpers['if'].call(depth0, stack1, {
			hash : {},
			inverse : self.program(3, program3, data),
			fn : self.program(1, program1, data)
		});
		if (stack1 || stack1 === 0) {
			buffer += stack1;
		}
		buffer += "</td><td class=\"Value\"> </td><td>";
		foundHelper = helpers.Type;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.type;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1)
				+ "<a class=\"plusObject\"><i class=\"icon-plus\"></i></a></td><td>";
		foundHelper = helpers.Description;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.description;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "</td>";
		return buffer;
	});
	templates['tmplSetType.html'] = template(function(Handlebars, depth0,
			helpers, partials, data) {
		helpers = helpers || Handlebars.helpers;
		var buffer = "", stack1, foundHelper, functionType = "function", escapeExpression = this.escapeExpression, self = this;

		function program1(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<span class=\"header simpleType indentLevel";
			foundHelper = helpers.indent;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.indent;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1)
					+ "\"></span><span><a class=\"header\"><p class=\"inline\">";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</p></a></span>";
			return buffer;
		}

		function program3(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<span class=\"indentLevel\">";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</span>";
			return buffer;
		}

		buffer += "<td class=\"Param\">";
		stack1 = depth0.indent;
		stack1 = helpers['if'].call(depth0, stack1, {
			hash : {},
			inverse : self.program(3, program3, data),
			fn : self.program(1, program1, data)
		});
		if (stack1 || stack1 === 0) {
			buffer += stack1;
		}
		buffer += "</td><td class=\"Value\"> </td><td>";
		foundHelper = helpers.Type;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.type;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1)
				+ "<a class=\"plusSet\"><i class=\"icon-plus\"></i></a></td><td>";
		foundHelper = helpers.Description;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.description;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1)
				+ "<a class=\"minusSet hidden\"><i class=\"icon-minus\"></i></a></td>";
		return buffer;
	});
	templates['tmplSingleFileUpload.html'] = template(function(Handlebars,
			depth0, helpers, partials, data) {
		helpers = helpers || Handlebars.helpers;
		var buffer = "", stack1, foundHelper, functionType = "function", escapeExpression = this.escapeExpression;

		buffer += "<td class=\"Parma\"><span class=\"indentLevel\">";
		foundHelper = helpers.displayName;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.displayName;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1)
				+ "</span></td><td> </td><td> <input type=\"file\"/></td><td>";
		foundHelper = helpers.Description;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.description;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "</td>";
		return buffer;
	});
	templates['tmplStringType.html'] = template(function(Handlebars, depth0,
			helpers, partials, data) {
		helpers = helpers || Handlebars.helpers;
		var buffer = "", stack1, foundHelper, functionType = "function", escapeExpression = this.escapeExpression, self = this;

		function program1(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<span class=\"simpleType indentLevel";
			foundHelper = helpers.indent;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.indent;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "\"> </span><span>";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</span>";
			return buffer;
		}

		function program3(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<span class=\"indentLevel";
			foundHelper = helpers.indent;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.indent;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "\"> \n";
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "</span>";
			return buffer;
		}

		function program5(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<input name=\"";
			foundHelper = helpers.rootName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.rootName;
				stack1 = typeof stack1 === functionType ? stack1() : (stack1 === ":" ? "" : stack1 + ".") ;
			}
			buffer += escapeExpression(stack1);
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "\" value=\"";
			foundHelper = helpers.setNameValue;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.setNameValue;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "\"/>";
			return buffer;
		}

		function program7(depth0, data) {

			var buffer = "", stack1, foundHelper;
			buffer += "<input name=\"";
			foundHelper = helpers.rootName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.rootName;
				stack1 = typeof stack1 === functionType ? stack1() : (stack1 === "param" ? "" : stack1 + ".");
			}
			buffer += escapeExpression(stack1);
			foundHelper = helpers.displayName;
			if (foundHelper) {
				stack1 = foundHelper.call(depth0, {
					hash : {}
				});
			} else {
				stack1 = depth0.displayName;
				stack1 = typeof stack1 === functionType ? stack1() : stack1;
			}
			buffer += escapeExpression(stack1) + "\"/>";
			return buffer;
		}

		buffer += "<td> \n";
		stack1 = depth0.indent;
		stack1 = helpers['if'].call(depth0, stack1, {
			hash : {},
			inverse : self.program(3, program3, data),
			fn : self.program(1, program1, data)
		});
		if (stack1 || stack1 === 0) {
			buffer += stack1;
		}
		buffer += "</td><td class=\"Value\">";
		stack1 = depth0.setNameValue;
		stack1 = helpers['if'].call(depth0, stack1, {
			hash : {},
			inverse : self.program(7, program7, data),
			fn : self.program(5, program5, data)
		});
		if (stack1 || stack1 === 0) {
			buffer += stack1;
		}
		buffer += "</td><td>";
		foundHelper = helpers.Type;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.type;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "</td><td>";
		foundHelper = helpers.Description;
		if (foundHelper) {
			stack1 = foundHelper.call(depth0, {
				hash : {}
			});
		} else {
			stack1 = depth0.description;
			stack1 = typeof stack1 === functionType ? stack1() : stack1;
		}
		buffer += escapeExpression(stack1) + "</td>";
		return buffer;
	});
})();