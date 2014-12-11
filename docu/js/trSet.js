(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.TrSetView = (function(_super) {
    __extends(TrSetView, _super);

    function TrSetView() {
      _ref = TrSetView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TrSetView.prototype.events = {
      'click a.plusSet': 'onPlusClk',
      'click a.minusSet': 'removeArrayElementClk'
    };

    TrSetView.prototype.onPlusClk = function(jqEv) {
      var inModels, jsModel, obj, param;

      console.log("clicked onPlusClk for SET");
      jsModel = this.model.toJSON();
      inModels = (function() {
        var _i, _len, _ref1, _results;

        _ref1 = jsModel.parameters;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          param = _ref1[_i];
          obj = new Backbone.Model(window.apiTypesJSON[param]);
          if (!obj.has('displayName')) {
            obj.set('displayName', param);
          }
          obj.set('rootName', "" + (this.model.get('rootName')) + "[" + (this.model.get('displayName')) + "]");
          if (jsModel.indent != null) {
            _results.push(obj.set('indent', jsModel.indent + 1));
          } else {
            _results.push(obj.set('indent', 1));
          }
        }
        return _results;
      }).call(this);
      this.model.attributes.collection.add(inModels);
      this.$el.find('a.plusSet, a.minusSet').toggleClass('hidden');
      console.log(inModels);
      return this;
    };

    TrSetView.prototype.removeArrayElementClk = function(jqEv) {
      TrSetView.__super__.removeArrayElementClk.apply(this, arguments);
      this.$el.find('a.plusSet, a.minusSet').toggleClass('hidden');
      return this;
    };

    return TrSetView;

  })(TrView);

}).call(this);
