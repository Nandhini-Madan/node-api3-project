const db = require('../data/dbConfig.js');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
};

function get() {
  return db('posts');
}

function getById(id) {
  return db('posts')
    .where({ id })
    .first();
}

function findUserPostById(userId, id) {
	return db("posts")
		.where({ id, user_id: userId })
		.first()
}

async function insert(userId, post) {
	const data = { user_id: userId, ...post }
	const [id] = await db("posts").insert(data)

	return findUserPostById(userId, id)
}

async function update(id, changes) {
 await db('posts')
    .where({ id })
    .update(changes);
    return getById(id)
}

function remove(id) {
  return db('posts')
    .where('id', id)
    .del();
}
