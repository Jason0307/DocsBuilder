(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.TrObject = (function(_super) {
    __extends(TrObject, _super);

    function TrObject() {
      _ref = TrObject.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TrObject.prototype.events = {
      'click a.plusObject': 'addObjectClk'
    };

    TrObject.prototype.initialize = function() {
      this.handleModalDialogCb = _.bind(this.handleModalDialog, this);
      TrObject.__super__.initialize.apply(this, arguments);
      return this;
    };

    TrObject.prototype.addObjectClk = function(jqEv) {
      var bFound, param, renderMe, _i, _len, _ref1;
      $('#myModal .modal-body').children().remove();
      _ref1 = this.model.toJSON().parameters;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        param = _ref1[_i];
        bFound = _.any(this.model.toJSON().collection.models, function(model) {
          var _ref2;

          return (_ref2 = model.toJSON().displayName === param) != null ? _ref2 : {
            "true": false
          };
        });
        if (bFound) {
          renderMe = Handlebars.templates["tmplObjectSelectItemDisable.html"]({
            param: param
          });
        } else {
          renderMe = Handlebars.templates["tmplObjectSelectItemEnable.html"]({
            param: param
          });
        }
        $('#myModal .modal-body').append(renderMe);
      }
      $('#myModal button.btn-success').unbind('click');
      $('#myModal button.btn-success').bind('click', this.handleModalDialogCb);
      $('#myModal').modal({
        backdrop: true,
        show: true
      });
      return this;
    };

    TrObject.prototype.handleModalDialog = function() {
      var bFound, inModels, item, myModels, obj, param;

      inModels = (function() {
        var _i, _len, _ref1, _results;

        _ref1 = $('#myModal .modal-body input:checked');
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          item = _ref1[_i];
          param = $(item).attr('name');
          bFound = _.any(this.model.toJSON().collection.models, function(model) {
            var _ref2;

            return (_ref2 = model.toJSON().displayName === param) != null ? _ref2 : {
              "true": false
            };
          });
          if (!bFound) {
            param = $(item).attr('name');
            obj = new Backbone.Model(window.apiTypesJSON[param]);
            if (!obj.has('displayName')) {
              obj.set('displayName', param);
            }
            var rootName = this.model.get('rootName');
            if(rootName === "param"){
            	rootName = "";
            }else{
            	rootName += ".";
            }
            
            obj.set('rootName', "" + (rootName + (this.model.get('displayName'))));
            if (this.model.toJSON().indent != null) {
              _results.push(obj.set('indent', this.model.toJSON().indent + 1));
            } else {
              _results.push(obj.set('indent', 1));
            }
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }).call(this);
      myModels = _.reject(inModels, function(model) {
        return model == null;
      });
      $('#myModal .modal-body').children().remove().end();
      $('#myModal').modal('hide');
      this.model.attributes.collection.add(myModels);
      return this;
    };

    return TrObject;

  })(TrView);

}).call(this);
