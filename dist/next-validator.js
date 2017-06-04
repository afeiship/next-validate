(function () {

  var global = window || this;

  var emailRE =/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/;
  var mobileRE =/^1[34578]\d{9}$/;
  var idCardRE = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i;

  var nx = global.nx || require('next-js-core2');
  var Validator = nx.declare('nx.Validator', {
    statics:{
      isEmpty: function(inValue){
        return !String(inValue).trim();
      },
      isNumber: function(inValue){
        if(!isNaN(inValue)){
          return nx.isNumber( parseFloat(inValue) );
        }
        return false;
      },
      isEmail: function(inValue){
        return emailRE.test(inValue);
      },
      isMobile: function(inValue){
        return mobileRE.test(inValue);
      },
      isInRange: function(inValue,inData){
        var value = String(inValue);
        var len = value.length;
        return len>inData.start && len<inData.end;
      },
      isIdCard: function(inValue){
        return idCardRE.test(inValue);
      },
      isEqual: function(inValue,inData){
        return inValue === inData;
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Validator;
  }

}());
