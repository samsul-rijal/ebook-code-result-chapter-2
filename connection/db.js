const { Pool } = require('pg');

const pgUser = 'ctukurnlfjbcbe'
const pgPassword = '9ee6611f11cdd4c2721313d5c479fc4d88ca7aadaa448edf4e40dcea29c16eb9'
const pgHost = 'ec2-35-175-68-90.compute-1.amazonaws.com'
const pgPort = 5432
const pgDatabase = ctukurnlfjbcbe


const connectionString = `postgres://${pgUser}:${pgPassword}@${pgHost}:${pgPort}/${pgDatabase}`;

const pool = new Pool({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = pool;