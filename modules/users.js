const supertest = require('supertest')('https://reqres.in/api');
let payload;

class Users {
    async createUser(name, job) {
        payload = {
            name: name,
            job: job
        };

        return await supertest
            .post('/users')
            .send(payload)
            .then(response => {
                return response;
            });
    }

    async updateUser(user_id, new_name, new_job) {
        payload = {
            name: new_name,
            job: new_job
        };

        return await supertest
            .put('/users/' + user_id)
            .send(payload)
            .then(response => {
                return response;
            });
    }

    async getUsers(page) {
        return await supertest
            .get('/users?page' + page)
            .then(response => {
                return response;
            });
    }

    async deleteUser(user_id) {
        return await supertest
            .delete('/users/' + user_id)
            .then(response => {
                return response;
            });
    }
}

module.exports = { Users };