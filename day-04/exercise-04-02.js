export function getStudentAverage(students) {
  // Tu código aquí 👈

  const studentsAvg = students.map(function (student) {
    let studentAvg = {};
    studentAvg.name = student.name;
    let totalGrade = student.grades?.reduce(function (totalGrade, grade) {
      return totalGrade + grade;
    });

    if (student.grades !== undefined) {
      let average = totalGrade / student.grades?.length;
      studentAvg.average = parseFloat(average.toFixed(2));
    } else {
      studentAvg.average = 0;
    }

    return studentAvg;
  });

  let sumTotal = 0;
  for (const studentAvg of studentsAvg) {
    sumTotal += studentAvg.average;
  }

  let averageTotal = sumTotal / studentsAvg.length;

  const result = {
    classAverage: parseFloat(averageTotal.toFixed(2)),
    students: studentsAvg,
  };

  return result;
}
