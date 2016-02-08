load('riot.js');

Riot.require('../phraming.core.js');

Riot.context ('phraming.core.js', function () {
  given('the phraming object', function () {
    should('be global and accessible', phraming).isNotNull();
    should('return a VERSION', phraming.version).isNotNull();
    should('be turing complete', true).isTrue();
  });
});

Riot.run();