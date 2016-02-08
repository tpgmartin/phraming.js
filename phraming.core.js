(function (global) {
  var phraming = {
    version: '0.0.2',
    lesson: 'Part 2: Object Orientated Programming'
  };
  
  if (global.phraming) {
    throw new Error ('phraming has already been defined');
  } else {
    global.phraming = phraming;
  }
})(typeof window === 'undefined' ? this : window);