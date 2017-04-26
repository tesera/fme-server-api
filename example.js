
const FMEServerAPI = require('./lib/fme_server_api');

// Connect to API
var client = new FMEServerAPI('https://my-server.fmecloud.com', 'my-server-token');

// Submitjob
var params = {
    "publishedParameters": [
        {
            "name": "MY_FIRST_PARAM",
            "value": "paramonevalue"
        },
        {
            "name": "MY_SECOND_PARAM",
            "value": "paramtwovalue"
        }
    ]
};
client.submitJob('MyRepository', 'my-workspace.fmw', params).then(console.log).catch(console.error);


// List Repository Items
client.getRepositoryItems('MyRepository').then(console.log);

// List Repositories
client.getRepositories().then(console.log);
