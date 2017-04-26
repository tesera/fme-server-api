'use strict';

const https = require('https');
const URL = require('url');

class FMEServerAPI {
    constructor(server, token, options) {
        this.server = server || process.env.SERVER;
        this.token = token || process.env.TOKEN;
        this.url = URL.parse(this.server);
        this.version = options && options.version || 'v3';
        this.baseURL = `/fmerest/${this.version}`;
    }

    request(path, params, method, headers) {
        headers = headers || {};
        var options = {
            hostname: this.url.host,
            method: method || 'GET',
            path: this.baseURL + (path || this.url.path),
            headers: Object.assign({
                Authorization: `fmetoken token=${this.token}`
            }, headers)
        };

        return new Promise((resolve, reject) => {
            var req = https.request(options, (res) => {
                res.on('data', (data) => resolve(data.toString()));
            });

            if(params) req.write(JSON.stringify(params));
            req.on('error', reject);
            req.end();
        });
    }

    submitJob(repository, workspace, params, callback) {
        return this.request(`/transformations/submit/${repository}/${workspace}`, params, 'POST', { "Content-Type": "application/json", "Accept": "application/json" });
    }

    getRepositoryItems(repository, type) {
        repository = encodeURIComponent(repository);
        return this.request(`/repositories/${repository}/items`);
    }

    getRepositories() {
        return this.request('/repositories');
    }

    getWorkspaceParameters(repository, workspace) {
        repository = encodeURIComponent(repository);
        workspace = encodeURIComponent(workspace);
        return this.request(`/repositories/${repository}/items/${workspace}/parameters`);
    }

}

module.exports = FMEServerAPI;
