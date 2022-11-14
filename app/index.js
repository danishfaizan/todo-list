const express = require('express');
const bodyParser = require('body-parser');
const { migrateDB, knex } = require('./db');

const app = express();

app.use(bodyParser.json());
app.get('/users', async (_req, res) => {
  res.json(await knex('users').select());
});

async function insertSampleData() {
  if (!(await knex('users').select().first())) {
    return knex('users').insert({ name: 'test', email: 'test@test.com' });
  }
}

async function start() {
  await migrateDB();
  await insertSampleData();

  app.listen(process.env.HTTP_SERVER_PORT, () => {
    console.log('Server is listening on port', process.env.HTTP_SERVER_PORT);
  });
}

module.exports = start;
