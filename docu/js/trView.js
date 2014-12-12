(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.TrView = (function(_super) {
    __extends(TrView, _super);

    function TrView() {
      _ref = TrView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TrView.prototype.tagName = 'tr';

    TrView.prototype.events = {
      'click a.header': "toggleHeaderCollapsedClk"
    };

    TrView.prototype.initialize = function() {
      var jsModel;

      this.model.set('collapsed', false);
      this.model.bind('destroy', this.onModelDestroy, this);
      this.model.bind('change:collapsed', this.onToggleCollapsed, this);
      this.model.bind('change:rootName', this.onRootNameChange, this);
      jsModel = this.model.attributes;
      if (!jsModel.collection) {
        jsModel.collection = new Backbone.Collection;
      }
      if (jsModel.collection != null) {
        jsModel.collection.bind('add', this.onCollectionAdd, this);
      }
      if (jsModel.collection != null) {
        jsModel.collection.bind('remove', this.onCollectionRemove, this);
      }
      this.template = {
        "set": "tmplSetType.html",
        "object": "tmplObjectType.html",
        "array": "tmplArrayType.html",
        "string": "tmplStringType.html",
        "int": "tmplStringType.html",
        "enumerated": "tmplEnumeratedType.html",
        "singlefile": "tmplDocuments.html",
        "image": "tmplDocuments.html",
        "file": "tmplDocuments.html",
        "documents": "tmplDocuments.html",
        "header": "tmplArrayHeader.html",
        "documentsheader": "tmplArrayHeader.html",
        "headersingle": "tmplArrayHeaderNoParam.html",
        "datetime": "tmplDateTimeType.html"
      };
      return this.render();
    };

    TrView.prototype.render = function() {
      var data, index, renderMe;

      data = this.model.toJSON();
      if (!data.type) {
        debugger;
      }
      index = this.template[data.type.toLowerCase()];
      if (index == null) {
        debugger;
      }
      if (typeof Handlebars.templates[index] === !"function") {
        debugger;
      }
      renderMe = Handlebars.templates[index](data);
      $(this.el).append(renderMe);
      return this;
    };

    TrView.prototype.onModelChange = function(model, changes) {
      return console.log("TrView: on change index ", this.model.toJSON());
    };

    TrView.prototype.onRootNameChange = function(model) {
      var name;
      name = "" + (this.model.toJSON().rootName) + "[" + (this.model.toJSON().displayName) + "]";
      return $(this.el).find('td.Value input').attr("name", name);
    };

    TrView.prototype.onModelDestroy = function(model, changes) {
      this.undelegateEvents();
      this.remove();
      return console.log("destroy exit");
    };

    TrView.prototype.onCollectionAdd = function(inModel, collection, index) {
      var trView, viewType;

      viewType = viewMap[inModel.get("type")] || TrView;
      if (!inModel.has('rootName')) {
        inModel.set('rootName', this.model.get('rootName'));
      }
      trView = this.options.factory.createView(viewType, {
        model: inModel
      });
      $(trView.el).insertAfter($(this.el));
      $(trView.el).find('a.plusArray').click();
      return console.log("exit on collection add");
    };

    TrView.prototype.onCollectionRemove = function(inModel, changes) {
      var item, parentType, _i, _j, _len, _len1, _ref1, _ref2, _results, _results1;

      console.log("TrArray: on Collection Remove ", inModel.toJSON().displayName, this.model.toJSON());
      if ('header' === inModel.get("Type")) {
        parentType = this.model.toJSON().rootName.match(/\[(.*)\]/).pop();
        if (this.model.toJSON().collection.length === 0 && window.apiTypesJSON[parentType] === 'object') {
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

    TrView.prototype.toggleHeaderCollapsedClk = function() {
      var item, type, _i, _len, _ref1;

      type = '';
      if (this.$el.find('td.Param span:first').hasClass('open')) {
        this.$el.find('td.Param span:first').switchClass('open', 'closed');
        type = 'closed';
      } else {
        this.$el.find('td.Param span:first').switchClass('closed', 'open');
        type = 'open';
      }
      _ref1 = this.model.toJSON().collection.models;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        item = _ref1[_i];
        item.set('collapsed', type);
      }
      return this;
    };

    TrView.prototype.onToggleCollapsed = function(inModel, type) {
      var model, _i, _len, _ref1;

      console.log(arguments);
      if (type === 'closed') {
        if (this.$el.find('td.Param span:first').hasClass('open')) {
          this.$el.find('td.Param span:first').switchClass('open', 'closed');
        }
        $(this.el).slideUp();
      } else {
        if (this.$el.find('td.Param span:first').hasClass('closed')) {
          this.$el.find('td.Param span:first').switchClass('closed', 'open');
        }
        $(this.el).slideDown();
      }
      _ref1 = inModel.toJSON().collection.models;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        model = _ref1[_i];
        model.set('collapsed', type);
      }
      return this;
    };

    TrView.prototype.removeArrayElementClk = function(jqEv) {
      var child, innerItem, item;

      this.prototype.traceEnter(this, jqEv);
      while (this.model.toJSON().collection.length > 0) {
        item = this.model.toJSON().collection.shift();
        while (item.toJSON().collection.length > 0) {
          child = item.toJSON().collection.shift();
          while (child.toJSON().collection.length > 0) {
            innerItem = child.toJSON().collection.shift();
            innerItem.destroy();
          }
          child.destroy();
        }
        item.destroy();
      }
      this.prototype.traceExit(this, jqEv);
      return this;
    };

    return TrView;

  })(Backbone.View);

}).call(this);
