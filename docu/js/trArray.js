(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.TrArray = (function(_super) {
    __extends(TrArray, _super);

    function TrArray() {
      _ref = TrArray.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TrArray.prototype.initialize = function() {
      this.model.bind('change:index', this.onChangedIndex, this);
      TrArray.__super__.initialize.apply(this, arguments);
      return this;
    };

    TrArray.prototype.events = {
      'click a.plusArray': 'addArrayClk',
      'click a.header': "toggleHeaderCollapsedClk",
      'click span.header': "toggleHeaderCollapsedClk"
    };

    TrArray.prototype.addArrayClk = function(jvEv) {
      var header, index, item, items, myModel, param;

      if (this.$el.find('td.Param span:first').hasClass('closed')) {
        this.$el.find('td.Param span:first').switchClass('closed', 'open');
      }
      if (this.model.toJSON().parameters == null) {
        header = {
          "displayName": this.model.toJSON().displayName,
          "Type": "headerSingle",
          "indent": this.model.toJSON().indent != null ? this.model.toJSON().indent + 1 : 1
        };
        myModel = new Backbone.Model(header);
      } else {
        header = {
          "displayName": this.model.toJSON().displayName,
          "Type": "header",
          "indent": this.model.toJSON().indent != null ? this.model.toJSON().indent + 1 : 1,
          "filter": this.model.get('filter')
        };
        myModel = new Backbone.Model(header);
        myModel.attributes.collection = new Backbone.Collection;
        items = (function() {
          var _i, _len, _ref1, _results;

          _ref1 = this.model.toJSON().parameters;
          _results = [];
          for (index = _i = 0, _len = _ref1.length; _i < _len; index = ++_i) {
            param = _ref1[index];
            item = _.extend({}, window.apiTypesJSON[param]);
            if (header.indent != null) {
              item.indent = header.indent + 1;
            } else {
              item.indent = 1;
            }
            if (item.displayName == null) {
              item.displayName = param;
            }
            item.arrayIndex = index;
            _results.push(new Backbone.Model(item));
          }
          return _results;
        }).call(this);
        myModel.attributes.collection.add(items);
      }
      this.model.attributes.collection.add(myModel);
      return this;
    };

    TrArray.prototype.onChangedIndex = function() {
      var index, item, _i, _len, _ref1;

      console.log(arguments);
      index = this.model.get('index');
      $(this.el).find('td.Param p.index:first').text(index);
      _ref1 = this.model.toJSON().collection.models;
      for (index = _i = 0, _len = _ref1.length; _i < _len; index = ++_i) {
        item = _ref1[index];
        item.set('index', index);
      }
      return this;
    };

    TrArray.prototype.onCollectionAdd = function(inModel, collection, index) {
      var that, trView, viewType;

      that = this;
      console.log("enter on collection add ", arguments);
      inModel.set(index);
      inModel.set('rootName', "" + (this.model.get('rootName')) + "[" + (this.model.get('displayName')) + "]");
      viewType = viewMap[inModel.get("Type")] || TrView;
      trView = this.options.factory.createView(viewType, {
        model: inModel
      }, that, true);
      $(trView.el).insertAfter($(this.el));
      if (trView.model.attributes.collection.length > 0) {
        trView.showCollection();
      } else {
        $(trView.el).find('a.plusArray').click();
      }
      return console.log("exit on collection add");
    };

    TrArray.prototype.onCollectionRemove = function(inModel, changes) {
      var first, item, last, parentType, _i, _j, _len, _len1, _ref1, _ref2, _ref3, _results, _results1;

      console.log("TrArray: on Collection Remove ", inModel.toJSON().displayName, this.model.toJSON());
      if ('header' === inModel.get("Type")) {
        first = this.model.toJSON().rootName.lastIndexOf("[") + 1;
        last = this.model.toJSON().rootName.lastIndexOf("]");
        parentType = this.model.toJSON().rootName.substr(first, last - first);
        if (this.model.toJSON().collection.length === 0) {
          this.toggleHeaderCollapsedClk();
          if (((_ref1 = window.apiTypesJSON[parentType]) != null ? _ref1.Type : void 0) === 'object') {
            return this.model.destroy();
          }
        } else {
          _ref2 = this.model.toJSON().collection.models;
          _results = [];
          for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
            item = _ref2[_i];
            _results.push(item.set('index', this.model.toJSON().collection.models.indexOf(item)));
          }
          return _results;
        }
      } else if (this.model.toJSON().collection.models.length > 0) {
        _ref3 = this.model.toJSON().collection.models;
        _results1 = [];
        for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
          item = _ref3[_j];
          _results1.push(item.set('index', this.model.toJSON().collection.models.indexOf(item)));
        }
        return _results1;
      }
    };

    return TrArray;

  })(TrView);

}).call(this);
