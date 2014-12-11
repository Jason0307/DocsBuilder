(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.ResponseView = (function(_super) {
    __extends(ResponseView, _super);

    function ResponseView() {
      _ref = ResponseView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ResponseView.prototype.tagName = 'div';

    ResponseView.prototype.initialize = function() {
      this.$el.addClass("tabbable");
      return this.render();
    };

    ResponseView.prototype.render = function() {
      var data, renderMe;

      data = this.model.toJSON();
      console.log('ResponseView render', data);
      renderMe = Handlebars.templates["tmplCallResults.html"](data);
      console.log("renderMe", renderMe);
      $(this.el).append(renderMe);
      return this;
    };

    ResponseView.prototype.Update = function(inModel) {
      var renderMe;

      $(this.el).children().remove();
      renderMe = Handlebars.templates["tmplCallResults.html"](inModel);
      console.log("renderMe", renderMe);
      $(this.el).append(renderMe);
      return this;
    };

    return ResponseView;

  })(Backbone.View);

}).call(this);
