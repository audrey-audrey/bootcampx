SELECT COUNT(id) AS num_students
FROM students
WHERE cohort_id IN (1,2,3);