import StudentCard from './StudentCard';
import React from "react";

const FilteredStudents = ({
  selectedCohort,
  selectedStudentsList,
  studentsList,
}) => {

  return (
    <div>
      {!selectedCohort ? studentsList.map((student) => <StudentCard student={student}/> ) : selectedStudentsList.map((student) => <StudentCard student={student}/>)}
    </div>
  );
}

export default FilteredStudents;
