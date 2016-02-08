phraming.Class = function () {
  return phraming.oo.create.apply(this, arguments);
}

phraming.oo = {
  
  create: function () {
    var methods = null,
        parent = undefined,
        _class = function () { 
          this.super = function (method, args) { return phraming.oo.super(this.$parent, this, method, args); };
          this.initialize.apply(this, arguments); 
        };
        
    if (typeof arguments[0] === 'function') {
      parent = arguments[0];
      methods = arguments[1];
    } else {
      methods = arguments[0];
    }
    
    if (typeof parent !== 'undefined') {
      phraming.oo.extend(_class.prototype, parent.prototype);
      _class.prototype.$parent = parent.prototype;
    }
    
    phraming.oo.mixin(_class, methods);
    phraming.oo.extend(_class.prototype, methods);
    _class.prototype.constructor = _class;
    
    if (!_class.prototype.initialize) {
      _class.prototype.initialize = function () {};
    }
    
    return _class;
    
  },
  
  mixin: function (_class, methods) {
    if (typeof methods.include !== 'undefined') {
      if (typeof methods.include === 'function') {
        phraming.oo.extend(_class.prototype, methods.include.prototype);
      } else {
        for (var i = 0; i < methods.include.length; i++) {
          phraming.oo.extend(_class.prototype, methods.include[i].prototype);
        }
      }
    }
  },
  
  extend: function (destination, source) {
    for (var property in source) {
      destination[property] = source[property];
    }
    return destination;
  },
  
  super: function(parentClass, instance, method, args) {
    return parentClass[method].apply(instance, args);
  }
};