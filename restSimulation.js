module.exports = {
    sendRequest: function(server, method, endpoint, data) {
        console.log(`Sending ${method} request to ${server} on endpoint ${endpoint} with data:`, data);
        if (server === 'Diego' && method === 'POST' && endpoint === '/applyFilter') {
            return require('./diego').applyFilter(data.imageData, data.filterDetails);
        } else if (server === 'Elise' && method === 'POST' && endpoint === '/applyEffect') {
            return require('./elise').applyEffect(data.imageData, data.effectDetails);
        }
    }
};
