(function () {

  var global = window || this;

  var emailRE=/\s+/;
  var mobileRE=/^1[34578]\d{9}$/;

  var nx = global.nx || require('next-js-core2');
  var Validator = nx.declare('nx.Validator', {
    statics:{
      isEmpty:function(inValue){
        return !String(inValue).trim();
      },
      isNumber:function(inValue){
        return nx.isNumber( parseFloat(inValue) );
      },
      isEmail:function(inValue){
        return emailRE.test(inValue);
      },
      isMobile:function(inValue){
        return mobileRE.test(inValue);
      },
      isInRange:function(inValue,inStart,inEnd){
        var value = String(inValue);
        var len = value.length;
        return len>inStart && len<inEnd;
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Validator;
  }

}());
