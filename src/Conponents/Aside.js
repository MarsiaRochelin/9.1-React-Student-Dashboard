import React from "react";

const Aside = ({ studentsList, cohortCodes, setSelectedCohort, studentsByCode, setSelectedStudentsList }) => {
 
  const handleCohort = (e) => {
    if(studentsByCode.hasOwnProperty(e)){
      setSelectedCohort(e);
      setSelectedStudentsList(studentsByCode[e])
    } else {
      setSelectedStudentsList(studentsList)
    }
  };

  let arr = [];

  const handleSpace = () => {
    for (let i = 0; i < cohortCodes.length; i++) {
      let season = cohortCodes[i].split("");
      let year = season.splice(season.length - 4);
      arr.push(`${season.join("")} ${year.join("")}`);
    }
    return arr;
  }

  handleSpace();

  return (
    <div className="aside">
      <h2 className='aside-h2'>Choose a Class by Start Date</h2>
      <ul>
        <li key={studentsList.id}>
          <button className='all-stu-button' onClick={()=>{handleCohort()}}>All Students</button>
        </li>
        {arr.map((cohort) => {
          return (
            <li>
              <button className="filtered-button"
                onClick={() => {
                  handleCohort(cohort.split(" ").join(""));
                }}
              >
                {cohort}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Aside;
