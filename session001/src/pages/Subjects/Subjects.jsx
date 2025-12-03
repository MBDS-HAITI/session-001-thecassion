import React from "react";
import data from "../../../../data.json"
import {DataTable} from "../../components/ui";


function Subject() {
    // take subject from course and give the number of unique student.id per subject
    // the number of notes per subject, and number of distinct grades per subject (courses)

    const subjects = data.map(item => item.course);
    let uniqueSubjects = [...new Set(subjects)];
    // create an array of objects with subject name, number of students, number of notes, number of distinct grades
    let agregateSubjects = uniqueSubjects.map(subject => {
        const subjectData = data.filter(item => item.course === subject);
        const numberOfStudents = new Set(subjectData.map(item => item.student.id)).size;
        const numberOfNotes = subjectData.length;
        const numberOfDistinctGrades = new Set(subjectData.map(item => item.grade)).size;
        return {
            subject,
            numberOfStudents,
            numberOfNotes,
            numberOfDistinctGrades
        };
    });

    

    return (

        <DataTable data={agregateSubjects} />
    );
}
export default Subject;