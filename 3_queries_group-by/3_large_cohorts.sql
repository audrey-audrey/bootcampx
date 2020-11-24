SELECT cohorts.name as cohort_name, COUNT(students.name) AS student_count
FROM cohorts
JOIN students ON cohort_id = cohorts.id
GROUP BY cohorts.id
HAVING COUNT(students.name) >= 18
ORDER BY student_count;