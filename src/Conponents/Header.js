import React from 'react';

const Header = ({studentsList, setStudentsList}) => {
//Isn't working how I think   
    const handleStudentList = () =>{
        setStudentsList(studentsList.length)
    }

    return (
        <div className='header'>
            <header >
            <h1 onClick={handleStudentList}>Student Dashboard</h1>
            </header>
        </div>
    );
};

export default Header;