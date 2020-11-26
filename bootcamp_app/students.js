const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// Command line input
const input = process.argv.slice(2);
const cohortName = input[0];
const limit = input[1] || 5;
const values = [`%${cohortName}%`, limit];

const query = {
  text: `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE $1
  LIMIT $2; 
  `, 
  values, 
  rowMode: 'array'
}

pool.query(query)
.then(res => console.log(res.rows))
.catch(err => console.error('query error', err.stack));