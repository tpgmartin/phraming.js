var NoInitializer = phraming.Class({
  doSomething: function() { return 'something'; }
});

var User = phraming.Class({
  initialize: function(name, age) {
    this.name = name;
    this.age  = age;
  },

  display: function() {
    return this.name + ': ' + this.age;
  },

  login: function() {
    return true;
  },
  
  toString: function () {
    return 'name' + this.name + ', age: ' + this.age;
  }
});

var Admin = phraming.Class(User, {
  dangerousMethod: function() {
    return 'danger!';
  }
});

var Guest = phraming.Class(User, {
  initialize: function(state) {
    this.name  = 'User_' + this.randomId();
    this.age   = 0;
    this.state = state;
  },

  randomId: function() {
    return Math.floor(Math.random() * 100);
  }
});

var MixinUser = phraming.Class({
  include: User,

  initialize: function(log) {
    this.log = log;
  }
});

var DoubleMixinUser = phraming.Class({
  include: [NoInitializer, User],

  initialize: function(log) {
    this.log = log;
  }
});

var SuperUser = phraming.Class(User, {
  initialize: function () {
    this.super('initialize', arguments);
  },
  
  toString: function () {
    return 'SuperUser: ' + this.super('toString');
  }
})
