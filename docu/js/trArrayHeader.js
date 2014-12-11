(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.TrArrayHeader = (function(_super) {
    __extends(TrArrayHeader, _super);

    function TrArrayHeader() {
      _ref = TrArrayHeader.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TrArrayHeader.prototype.initialize = function() {
      this.model.bind('change:index', this.onChangedIndex, this);
      TrArrayHeader.__super__.initialize.apply(this, arguments);
      return this;
    };

    TrArrayHeader.prototype.events = {
      'click a.minusArray': 'removeArrayElementClk',
      'click a.header': "toggleHeaderCollapsedClk",
      'click span.header': "toggleHeaderCollapsedClk",
      'change select': "executeFilter"
    };

    TrArrayHeader.prototype.executeFilter = function() {
      var attributes, filterVal, item, model, models, param, removeItems, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref1, _ref2;

      filterVal = this.$el.find('select :selected').val();
      models = this.model.toJSON().collection.models;
      if (filterVal === "anchor") {
        removeItems = (function() {
          var _i, _len, _ref1, _results;

          _results = [];
          for (_i = 0, _len = models.length; _i < _len; _i++) {
            item = models[_i];
            if ((_ref1 = item.get('displayName')) === "documentId" || _ref1 === "xPosition" || _ref1 === "yPosition" || _ref1 === "pageNumber") {
              _results.push(item);
            }
          }
          return _results;
        })();
        for (_i = 0, _len = removeItems.length; _i < _len; _i++) {
          item = removeItems[_i];
          item.destroy();
        }
        _ref1 = ["anchorString", "anchorXOffset", "anchorYOffset"];
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          param = _ref1[_j];
          attributes = {
            indent: this.model.get('indent') + 1,
            displayName: param,
            rootName: "" + (this.model.get('rootName')) + "[" + (this.model.get('index')) + "]"
          };
          model = _.extend(attributes, window.apiTypesJSON[param]);
          this.model.toJSON().collection.add(new Backbone.Model(model));
        }
      } else if (filterVal === "default") {
        removeItems = (function() {
          var _k, _len2, _ref2, _results;

          _results = [];
          for (_k = 0, _len2 = models.length; _k < _len2; _k++) {
            item = models[_k];
            if ((_ref2 = item.get('displayName')) === "anchorString" || _ref2 === "anchorXOffset" || _ref2 === "anchorYOffset") {
              _results.push(item);
            }
          }
          return _results;
        })();
        for (_k = 0, _len2 = removeItems.length; _k < _len2; _k++) {
          item = removeItems[_k];
          item.destroy();
        }
        _ref2 = ["documentId", "xPosition", "yPosition", "pageNumber"];
        for (_l = 0, _len3 = _ref2.length; _l < _len3; _l++) {
          param = _ref2[_l];
          attributes = {
            indent: this.model.get('indent') + 1,
            displayName: param,
            rootName: "" + (this.model.get('rootName')) + "[" + (this.model.get('index')) + "]"
          };
          model = _.extend(attributes, window.apiTypesJSON[param]);
          this.model.toJSON().collection.add(new Backbone.Model(model));
        }
      }
      return this;
    };

    TrArrayHeader.toggleHeaderCollapsedClk = function() {
      console.log("clicked toggle");
      return TrArrayHeader.__super__.constructor.toggleHeaderCollapsedClk.apply(this, arguments);
    };

    TrArrayHeader.prototype.onChangedIndex = function() {
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

    TrArrayHeader.prototype.onCollectionRemove = function(inModel, changes) {
      var item, _i, _j, _len, _len1, _ref1, _ref2, _results, _results1;

      console.log("TrArrayHeader: on Collection Remove ", inModel.toJSON().displayName, this.model.toJSON());
      if ('header' === inModel.get("Type")) {
        if (this.model.toJSON().collection.length === 0 && this.model.toJSON().indent > 0) {
          return this.model.destroy();
        } else {
          _ref1 = this.model.toJSON().collection.models;
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            item = _ref1[_i];
            _results.push(item.set('index', this.model.toJSON().collection.models.indexOf(item)));
          }
          return _results;
        }
      } else if ('headerSingle' === inModel.get("Type")) {
        _ref2 = this.model.toJSON().collection.models;
        _results1 = [];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          item = _ref2[_j];
          _results1.push(item.set('index', this.model.toJSON().collection.models.indexOf(item)));
        }
        return _results1;
      }
    };

    TrArrayHeader.prototype.removeArrayElementClk = function(jqEv) {
      this.prototype.traceEnter(this, jqEv);
      TrArrayHeader.__super__.removeArrayElementClk.apply(this, arguments);
      this.prototype.traceExit(this, jqEv);
      this.model.destroy();
      return this;
    };

    TrArrayHeader.prototype.showCollection = function() {
      var index, item, trView, viewType, _i, _len, _ref1, _results;

      if (this.model.toJSON().collection != null) {
        _ref1 = this.model.toJSON().collection.models;
        _results = [];
        for (index = _i = 0, _len = _ref1.length; _i < _len; index = ++_i) {
          item = _ref1[index];
          viewType = viewMap[item.get("Type")] || TrView;
          item.set('rootName', "" + (this.model.get('rootName')) + "[" + (this.model.get('index')) + "]");
          trView = this.options.factory.createView(viewType, {
            model: item
          });
          $(trView.el).insertAfter($(this.el));
          _results.push($(trView.el).find('a.plusArray').click());
        }
        return _results;
      }
    };

    return TrArrayHeader;

  })(TrView);

}).call(this);
