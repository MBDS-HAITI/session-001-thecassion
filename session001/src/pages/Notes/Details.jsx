import React from "react";
import { useParams } from "react-router-dom";

function NoteDetails() {
    const params = useParams();
    const noteId = params.id;
    
    return (
        <div>
            <h1>Détails de la note</h1>
            <p>ID de la note : {noteId}</p>
            <p>Informations détaillées sur la note sélectionnée seront affichées ici.</p>
        </div>
    );
}
export default NoteDetails;