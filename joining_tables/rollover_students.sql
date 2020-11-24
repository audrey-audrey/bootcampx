SELECT students.name,
  cohorts.name,
  cohort.start_date AS cohort_start_date, 
  student.start_date AS student_start_date
FROM students 
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.start_date != students.start_date
ORDER BY cohort_start_date;