(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.TrSingleDocumentSimple = (function(_super) {
    __extends(TrSingleDocumentSimple, _super);

    function TrSingleDocumentSimple() {
      _ref = TrSingleDocumentSimple.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    TrSingleDocumentSimple.prototype.handleFileUpload = function(jqEv) {
      var fName;

      fName = $(jqEv.target).val();
      if (fName.indexOf('fakepath') >= 0) {
        fName = $(jqEv.target).val().match(/\\([^\\]+)$/)[1];
      }
      $(this.el).find('td.Value').append('<input type="text" value="' + fName + '" readonly="readonly"></input>').end().find('a').toggleClass('hidden').end();
      return this;
    };

    TrSingleDocumentSimple.prototype.removeSingleItem = function() {
      return $(this.el).find('td.Type input, td.Value input').remove().end().find('a').toggleClass('hidden').end().find('td.Type').append('<input type="file" name="file" class="file" ></input>').end();
    };

    return TrSingleDocumentSimple;

  })(TrDocuments);

}).call(this);
