(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.TrDocuments = (function(_super) {
    __extends(TrDocuments, _super);

    function TrDocuments() {
      _ref = TrDocuments.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TrDocuments.prototype.events = {
      'change input[type=file]': "handleFileUploadCb",
      'click a.minusSingleItem': "removeSingleItem"
    };

    TrDocuments.prototype.initialize = function() {
      this.handleFileUploadCb = _.bind(this.handleFileUpload, this);
      TrDocuments.__super__.initialize.apply(this, arguments);
      return this;
    };

    TrDocuments.prototype.removeSingleItem = function() {
      return this;
    };

    TrDocuments.prototype.handleFileUpload = function(jqEv) {
      var fName, file, fileInput, header, index, item, items, myModel, param, _i, _j, _len, _len1, _ref1;

      fName = $(jqEv.target).val();
      if (fName.indexOf('fakepath') >= 0) {
        fName = $(jqEv.target).val().match(/\\([^\\]+)$/)[1];
      }
      items = [];
      header = {
        "displayName": this.model.toJSON().displayName,
        "Type": "documentsHeader",
        "indent": this.model.toJSON().indent != null ? this.model.toJSON().indent + 1 : 1
      };
      myModel = new Backbone.Model(header);
      _ref1 = this.model.toJSON().parameters;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        param = _ref1[_i];
        item = _.extend({}, window.apiTypesJSON[param]);
        item.indent = header.indent + 1;
        if (item.displayName == null) {
          item.displayName = param;
        }
        if (item.displayName === "name") {
          item.setNameValue = fName;
        }
        items.push(item);
      }
      myModel.set('collection', new Backbone.Collection(items));
      fileInput = this.$el.find('td.Type input[type=file]');
      for (index = _j = 0, _len1 = fileInput.length; _j < _len1; index = ++_j) {
        file = fileInput[index];
        if ($(file).val().indexOf(fName) >= 0) {
          $(file).css('display', 'none').attr("name", fName);
        }
      }
      this.$el.find('td.Type').append('<input type="file" class="file"></input>');
      this.model.toJSON().collection.add(myModel);
      return this;
    };

    TrDocuments.prototype.onCollectionRemove = function(inModel, changes) {
      var item, _i, _len, _ref1, _results;

      console.log("TrArray: on Collection Remove ", inModel.toJSON().displayName, this.model.toJSON());
      _ref1 = this.model.toJSON().collection.models;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        item = _ref1[_i];
        _results.push(item.set('index', this.model.toJSON().collection.models.indexOf(item)));
      }
      return _results;
    };

    TrDocuments.prototype.removeFile = function(fName) {
      this.$el.find("input[name='" + fName + "']").remove();
      return this;
    };

    TrDocuments.prototype.onCollectionAdd = function(inModel, index, collection) {
      TrDocuments.__super__.onCollectionAdd.apply(this, arguments);
      return this.options.childrenBus.bind('removeFile', this.removeFile, this);
    };

    return TrDocuments;

  })(TrArray);

}).call(this);
