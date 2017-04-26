const assert = require('assert');
const FMEServerAPI = require('../test_helper');

describe('FMEServerAPI', function() {
    describe('constructor()', function() {
        process.env.TOKEN = process.env.SERVER = 'defaultvalue';

        it('reads the token from process.env', function() {
            var expected = process.env.TOKEN = 'envtoken';

            var client = new FMEServerAPI();
            assert.equal(client.token, expected);
        });

        it('overrides the env token when it is supplied directly', function() {
            process.env.TOKEN = 'envtoken';
            var expected = 'paramtoken';

            var client = new FMEServerAPI('someserver', expected);
            assert.equal(client.token, expected);
        });

        it('reads the server from process.env', function() {
            var expected = process.env.SERVER = 'envserver';

            var client = new FMEServerAPI();
            assert.equal(client.server, expected);
        });

        it('overrides the env server when it is supplied directly', function() {
            process.env.SERVER = 'envserver';
            var expected = 'paramserver';

            var client = new FMEServerAPI(expected);
            assert.equal(client.server, expected);
        });
    });
});
