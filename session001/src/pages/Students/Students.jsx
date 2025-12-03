import React from "react";
import data from "../../../../data.json"
import {DataTable} from "../../components/ui";

function Students() {
    const students = data.map(item => item.student);
    let uniqueStudents = [...new Set(students)];
    // student properties in data
    let studentProperties = Object.keys(data[0].student).filter(key => key !== 'student');
    return (
        <DataTable data={uniqueStudents} />

    );
    
}
export default Students;