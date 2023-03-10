const { Users } = require('../modules/users');
const users = new Users();
const user_id = 2;
let response;

test('create new user', async () => {
    response = await users.createUser("Marnie", "Developer");
    expect(response.statusCode).toBe(201);
});

test('update user detail', async () => {
    response = await users.updateUser(user_id, "Marie", "QA");
    expect(response.statusCode).toBe(200);
});

test('get list users', async () => {
    response = await users.getUsers(2);
    expect(response.statusCode).toBe(200);
});

test('delete user', async () => {
    response = await users.deleteUser(user_id);
    expect(response.statusCode).toBe(204);
});
