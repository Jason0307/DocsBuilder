(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.TrDocumentsHeader = (function(_super) {
    __extends(TrDocumentsHeader, _super);

    function TrDocumentsHeader() {
      _ref = TrDocumentsHeader.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TrDocumentsHeader.prototype.initialize = function() {
      this.model.bind('change:index', this.onChangedIndex, this);
      TrDocumentsHeader.__super__.initialize.apply(this, arguments);
      return this;
    };

    TrDocumentsHeader.prototype.removeArrayElementClk = function(jqEv) {
      var fName, item, models, _i, _len;

      this.prototype.traceEnter(this, jqEv);
      console.log("trDocumentsHeader");
      models = this.model.toJSON().collection.models;
      for (_i = 0, _len = models.length; _i < _len; _i++) {
        item = models[_i];
        if (item.get('displayName') === 'name') {
          fName = item.get('setNameValue');
        }
      }
      TrDocumentsHeader.__super__.removeArrayElementClk.apply(this, arguments);
      this.prototype.traceExit(this, jqEv);
      this.options.childrenBus.trigger('removeFile', fName);
      this.model.destroy();
      return this;
    };

    TrDocumentsHeader.prototype.onChangedIndex = function() {
      var index, item, _i, _len, _ref1;

      console.log("TrHeaderView onChangedIndex Called w/ arguments: ", arguments);
      index = this.model.get('index');
      $(this.el).find('td.Param p.index:first').text(index);
      _ref1 = this.model.toJSON().collection.models;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        item = _ref1[_i];
        item.set('rootName', "" + (this.model.get('rootName')) + "[" + index + "]");
      }
      return this;
    };

    return TrDocumentsHeader;

  })(TrArrayHeader);

}).call(this);
