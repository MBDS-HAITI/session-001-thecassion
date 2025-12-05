import React from "react";
import { useParams } from "react-router-dom";

function StudentDetails() {
    const params = useParams();
    const studentId = params.id;

    return (
        <div>
            <h1>Détails de l'étudiant</h1>
            <p>ID de l'étudiant : {studentId}</p>
            <p>Informations détaillées sur l'étudiant sélectionné seront affichées ici.</p>
        </div>
    );
}
export default StudentDetails;