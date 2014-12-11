(function() {
  var APITypes, AppRouter, EndpointListItemView, EndpointListView, EndpointTabView, EventBus, HeaderView, HelperFunctions, MethodView, TableView, mainModel, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Handlebars.registerHelper('elementCount', function(item) {
    return item.elementCount;
  });

  Handlebars.registerHelper('listObjectItems', function(items) {
    return _.map(items, function(item) {
      var renderMe;

      renderMe = '';
      if (item.bFound) {
        renderMe = Handlebars.templates["tmplObjectSelectItemEnable.html"](item);
      } else {
        renderMe = Handlebars.templates["tmplObjectSelectItemDisable.html"](item);
      }
      return renderMe;
    });
  });

  Handlebars.registerHelper('ifIndentZero', function(item) {
    if (item.indent === 0) {
      return item(this);
    } else {
      return item.inverse(this);
    }
  });

  HelperFunctions = (function() {
    function HelperFunctions() {}

    HelperFunctions.prototype.traceEnter = function(that, e) {
      return console.log('enter ', that.el, " ", "name: ", e.currentTarget, " ", e.handleObj.type, " ", e.handleObj.selector);
    };

    HelperFunctions.prototype.traceExit = function(that, e) {
      return console.log('exit', that.el, " ", "name: ", e.currentTarget, " ", e.handleObj.type, " ", e.handleObj.selector);
    };

    return HelperFunctions;

  })();

  EventBus = (function() {
    function EventBus() {
      this.eventBus = _.extend({}, Backbone.Events);
      this.registry = {
        factory: this
      };
    }

    EventBus.prototype.createView = function(inView, inOptions, that, enableChildrenEvents) {
      var klass, options;

      if (that == null) {
        that = null;
      }
      if (enableChildrenEvents == null) {
        enableChildrenEvents = false;
      }
      inOptions = inOptions || {};
      if (enableChildrenEvents) {
        if (!that.options.childrenBus) {
          that.options.childrenBus = _.extend({}, Backbone.Events);
        }
        options = _.extend(inOptions, {
          eventBus: this.eventBus
        }, this.registry, {
          childrenBus: that.options.childrenBus
        });
      } else {
        options = _.extend(inOptions, {
          eventBus: this.eventBus
        }, this.registry);
      }
      klass = inView;
      klass.prototype.eventBus = this.eventBus.eventBus;
      klass.prototype.factory = this.registry.factory;
      __extends(klass.prototype, HelperFunctions);
      return new klass(options);
    };

    return EventBus;

  })();

  HeaderView = (function(_super) {
    __extends(HeaderView, _super);

    function HeaderView() {
      _ref = HeaderView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    HeaderView.prototype.initialize = function() {
      this.template = _.template($(this.el).html());
      this.jqSectionWrapper = $(this.el).parent().find('div.wrapper');
      this.bIconChevronUp = true;
      return this.render;
    };

    HeaderView.prototype.events = {
      "click a": "onToggle"
    };

    HeaderView.prototype.render = function() {
      $(this.el).html(this.template);
      return this;
    };

    HeaderView.prototype.onToggle = function() {
      var self;

      self = this;
      $(this.jqSectionWrapper).slideToggle('slow').toggleClass('collapsed');
      $('#content').toggleClass('contentExpanded');
      return $(self.el).find('i').toggleClass('icon-chevron-up').toggleClass('icon-chevron-down');
    };

    return HeaderView;

  })(Backbone.View);

  EndpointTabView = (function(_super) {
    __extends(EndpointTabView, _super);

    function EndpointTabView() {
      _ref1 = EndpointTabView.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    EndpointTabView.prototype.initialize = function() {
      this.eventBus = new EventBus;
      this.template = _.template($(this.el).html());
      return this.render();
    };

    EndpointTabView.prototype.render = function() {
      var index, item, _i, _len, _ref2, _results;

      _ref2 = this.model.collection.models;
      _results = [];
      for (index = _i = 0, _len = _ref2.length; _i < _len; index = ++_i) {
        item = _ref2[index];
        _results.push(this.renderItem(item, index));
      }
      return _results;
    };

    EndpointTabView.prototype.renderItem = function(inModel, index) {
      var postFix;

      postFix = ($(this.el).attr('id')) + 'Endpoint' + index;
      inModel.set('name', postFix);
      return this.eventBus.createView(EndpointListItemView, {
        'model': inModel,
        'el': '#' + postFix
      });
    };

    return EndpointTabView;

  })(Backbone.View);

  EndpointListView = (function(_super) {
    __extends(EndpointListView, _super);

    function EndpointListView() {
      _ref2 = EndpointListView.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    EndpointListView.prototype.events = {
      "click li.list-methods": "listMethods",
      "click li.expand-methods": "expandMethods"
    };

    EndpointListView.prototype.initialize = function() {
      var self;

      self = this;
      this.eventBus = new EventBus;
      this.template = _.template($(this.el).html());
      return this.render();
    };

    EndpointListView.prototype.render = function() {
      var index, item, _i, _len, _ref3, _results;

      _ref3 = this.model.collection.models;
      _results = [];
      for (index = _i = 0, _len = _ref3.length; _i < _len; index = ++_i) {
        item = _ref3[index];
        _results.push(this.renderItem(item, index));
      }
      return _results;
    };

    EndpointListView.prototype.renderItem = function(inModel, index) {
      var postFix;

      postFix = ($(this.el).attr('id')) + 'Endpoint' + index;
      inModel.set('name', postFix);
      return this.eventBus.createView(EndpointListItemView, {
        'model': inModel,
        'el': '#' + postFix
      });
    };

    EndpointListView.prototype.toggleEndpoint = function(e) {
      return this.trigger("toggle");
    };

    EndpointListView.prototype.listMethods = function(e) {
      e.stopImmediatePropagation();
      return this.eventBus.eventBus.trigger('display:methodCollapsed');
    };

    EndpointListView.prototype.expandMethods = function(e) {
      e.stopImmediatePropagation();
      return this.eventBus.eventBus.trigger('display:methodExpand');
    };

    return EndpointListView;

  })(Backbone.View);

  EndpointListItemView = (function(_super) {
    __extends(EndpointListItemView, _super);

    function EndpointListItemView() {
      _ref3 = EndpointListItemView.__super__.constructor.apply(this, arguments);
      return _ref3;
    }

    EndpointListItemView.prototype.events = {
      "click li.list-methods": "methodCollapsed",
      "click li.expand-methods": "methodExpand",
      "click h4": "slideToggle",
      'click': "defaultClickHandler"
    };

    EndpointListItemView.prototype.initialize = function() {
      this.__ulMethods = $(this.el).find("ul.methods");
      this.__type = "EndpointListItemView";
      this.template = _.template($(this.el).html());
      if (!this.model.has('initCollection')) {
        this.model.collection = new Backbone.Collection(this.model.toJSON().methods);
        this.model.set('initCollection', true);
      }
      return this.render();
    };

    EndpointListItemView.prototype.render = function() {
      var index, item, _i, _len, _ref4, _results;

      $(this.el).html(this.template);
      _ref4 = this.model.collection.models;
      _results = [];
      for (index = _i = 0, _len = _ref4.length; _i < _len; index = ++_i) {
        item = _ref4[index];
        _results.push(this.renderItem(item, index));
      }
      return _results;
    };

    EndpointListItemView.prototype.renderItem = function(inModel, index) {
      var postFix, that;

      that = this;
      postFix = ($(this.el).attr('id')) + 'Method' + index;
      inModel.set('name', postFix);
      console.log(inModel, index);
      return this.options.factory.createView(MethodView, {
        model: inModel,
        el: '#' + postFix
      }, that, true);
    };

    EndpointListItemView.prototype.methodCollapsed = function(e) {
      this.prototype.traceEnter(this, e);
      e.stopImmediatePropagation();
      this.options.childrenBus.trigger('display:methodCollapsed');
      return this.prototype.traceExit(this, e);
    };

    EndpointListItemView.prototype.methodExpand = function(e) {
      this.prototype.traceEnter(this, e);
      e.stopImmediatePropagation();
      this.options.childrenBus.trigger('display:methodExpand');
      return this.prototype.traceExit(this, e);
    };

    EndpointListItemView.prototype.slideToggle = function(e) {
      this.prototype.traceEnter(this, e);
      e.stopImmediatePropagation();
      this._ulMethods.slideToggle();
      return this.prototype.traceExit(this, e);
    };

    EndpointListItemView.prototype.defaultClickHandler = function(e) {
      return e.stopImmediatePropagation;
    };

    EndpointListItemView.prototype.everything = function() {
      return console.log("everything");
    };

    return EndpointListItemView;

  })(Backbone.View);

  MethodView = (function(_super) {
    __extends(MethodView, _super);

    function MethodView() {
      _ref4 = MethodView.__super__.constructor.apply(this, arguments);
      return _ref4;
    }

    MethodView.prototype.events = {
      "click input.btn": "tryIt",
      'click span.http-method': "spanToggle"
    };

    MethodView.prototype.initialize = function() {
      var items, jsModel, obj, tableId;

      this.template = _.template($(this.el).html());
      this._type = "MethodView";
      this._jqForm = $(this.el).find('form');
      jsModel = this.model.toJSON();
      this.model.set('expand', true);
      this.options.childrenBus.bind("display:methodExpand", this.methodExpand, this);
      this.options.childrenBus.bind("display:methodCollapsed", this.methodCollapsed, this);
      this.options.eventBus.bind("display:methodExpand", this.methodExpand, this);
      this.options.eventBus.bind("display:methodCollapsed", this.methodCollapsed, this);
      this.tryItResponseCallback = _.bind(this.tryItResponse, this);
      this.model.bind("change:expand", this.changeExpand, this);
      this.model.bind("change:tryItResponse", this.handleResponse, this);
      obj = _.map(jsModel.parameters, function(param) {
        if (window.apiTypesJSON[param] === void 0) {
          debugger;
        }
        obj = {};
        if (!window.apiTypesJSON[param].displayName) {
          obj.displayName = param;
        }
        return _.extend(obj, window.apiTypesJSON[param]);
      });
      items = new Backbone.Collection(obj);
      tableId = "#" + ($(this.el).attr('id')) + "Table";
      this.options.factory.createView(TableView, {
        collection: items,
        el: tableId
      });
      return this.render;
    };

    MethodView.prototype.render = function() {
      return $(this.el).html(this.template);
    };

    MethodView.prototype.methodExpand = function() {
      console.log("set Expand true");
      if (false === this.model.get("expand")) {
        return this.model.set("expand", true);
      }
    };

    MethodView.prototype.methodCollapsed = function() {
      console.log("set Expand false");
      if (true === this.model.get("expand")) {
        return this.model.set("expand", false);
      }
    };

    MethodView.prototype.spanToggle = function() {
      if (true === this.model.get("expand")) {
        return this.model.set("expand", false);
      } else {
        return this.model.set("expand", true);
      }
    };

    MethodView.prototype.changeExpand = function(model, changeValue, eventSummary) {
      console.log("model change Expand triggered", this.el);
      if (changeValue === true) {
        return $(this.el).find('form, .results').slideDown();
      } else {
        return $(this.el).find('form, .results').slideUp();
      }
    };

    MethodView.prototype.tryIt = function(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      if ($(this.el).find('input[name=Username]').is(':empty')) {
        $(this.el).find('input[name=Username]').val($('#Username').val());
      }
      if ($(this.el).find('input[name=Password]').is(':empty')) {
        $(this.el).find('input[name=Password]').val($('#Password').val());
      }
      if ($(this.el).find('input[name=IntegratorKey]').is(':empty')) {
        $(this.el).find('input[name=IntegratorKey]').val($('#IntegratorKey').val());
      }
      
      var tk = ':accessToken',
      rstr = new RegExp(tk, "g"),
      url =  this._jqForm[0].action;
      url = url.replace(rstr, $(this.el).find('input[name=accessToken]').val());
      var options = {url : url};
      return $(this._jqForm).ajaxSubmit(options,this.tryItResponseCallback);
    };

    MethodView.prototype.tryItResponse = function(inReturnObj) {
      var data;

      console.log('tryItResponse ', this.options);
      if (this.responseView == null) {
        data = new Backbone.Model(inReturnObj);
        data.set("parentId", this.$el.selector.substr(1));
        this.responseView = this.options.factory.createView(ResponseView, {
          model: data,
          el: this.options.el + "ResultsCall"
        });
      } else {
        inReturnObj.parentId = this.$el.selector.substr(1);
        this.responseView.Update(inReturnObj);
      }
      console.log(this.responseView);
      $(this.el).append(this.responseView.el);
      return prettyPrint();
    };

    return MethodView;

  })(Backbone.View);

  TableView = (function(_super) {
    __extends(TableView, _super);

    function TableView() {
      _ref5 = TableView.__super__.constructor.apply(this, arguments);
      return _ref5;
    }

    TableView.prototype.initialize = function() {
      return this.render();
    };

    TableView.prototype.afterRender = function() {
      if (this.options.childrenBus) {
        this.options.childrenBus.bind('addFile', this.onAddFile, this);
      }
      return this;
    };

    TableView.prototype.render = function() {
      var index, item, _i, _len, _ref6;

      if (this.collection) {
        _ref6 = this.collection.models;
        for (index = _i = 0, _len = _ref6.length; _i < _len; index = ++_i) {
          item = _ref6[index];
          this.renderItem(item, index);
        }
      }
      this.afterRender();
      return this;
    };

    TableView.prototype.renderItem = function(inModel, index) {
      var that, trView, viewType;

      that = this;
      viewType = null;
      viewType = viewMap[inModel.get("Type")] || TrView;
      inModel.set("rootName", "param");
      trView = this.options.factory.createView(viewType, {
        model: inModel
      });
      return $(this.el).append(trView.el);
    };

    TableView.prototype.onAddFile = function(inModel, fileName) {
      return console.log(inModel, fileName);
    };

    return TableView;

  })(Backbone.View);

  mainModel = (function(_super) {
    __extends(mainModel, _super);

    function mainModel() {
      _ref6 = mainModel.__super__.constructor.apply(this, arguments);
      return _ref6;
    }

    mainModel.prototype.collapsed = 'true';

    return mainModel;

  })(Backbone.Model);

  AppRouter = Backbone.Router.extend({
    routes: {
      "": "mapEndpointsView"
    },
    mapEndpointsView: function() {
      this.headerView = new HeaderView({
        "el": "#header"
      });
      this.mainModel = new mainModel;
      this.mainModel.collection = window.endpointCollection;
      return this.tabView = new EndpointTabView({
        "el": "#tab",
        model: this.mainModel
      });
    }
  });

  APITypes = (function(_super) {
    __extends(APITypes, _super);

    function APITypes() {
      _ref7 = APITypes.__super__.constructor.apply(this, arguments);
      return _ref7;
    }

    APITypes.prototype.urlRoot = "apiTypes";

    return APITypes;

  })(Backbone.Model);

  window.viewMap = {
    "set": TrSetView,
    "object": TrObject,
    "array": TrArray,
    'header': TrArrayHeader,
    "headerSingle": TrArrayHeader,
    "documents": TrDocuments,
    "documentsHeader": TrDocumentsHeader,
    "singleFile": TrSingleDocumentSimple,
    "file": TrSingleDocumentSimple
  };

  window.apiTypes = new APITypes;

  apiTypes.fetch({
    success: function() {
      var app;

      window.apiTypesJSON = apiTypes.toJSON().docusign.types;
      window.endpointCollection = new Backbone.Collection(apiTypes.toJSON().docusign.endpoints);
      $('form').ajaxForm();
      window.app = app = new AppRouter();
      Backbone.history.start();
      return $('.datetime').datetimepicker();
    }
  });

  $('a.moveUp').live('click', function() {
    return $('#header a:last').click();
  });

}).call(this);
