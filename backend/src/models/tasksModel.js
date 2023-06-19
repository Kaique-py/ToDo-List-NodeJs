const conection = require('./conection')
const data = require('.')

const getAll = async () => {
    const tasks = await conection.execute('SELECT * FROM tasks')
    return tasks
}

module.exports = {
    getAll
}