const pgp = requise('pg-promise')
const db = pgp('postgres://root:root@host:8000/MYSQL_DB')

db.one('SELECT $1 AS value', 123)
    .then((data) => {
        console.log('DATA:', data.value)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })

module.exports = {

}