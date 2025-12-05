import React from "react";
import {DataTable} from "../../components/ui";
import {Chip, CircularProgress, Alert} from "@mui/material";
import {Link} from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Notes() {
    // we use our custom hook to fetch notes data from the API
    const { data: notesData, loading, error } = useFetch(`${import.meta.env.VITE_API_BASE_URL}/grades`);
    // We use React.useMemo to memoize the data transformation
    const data = React.useMemo(() => {
        if (!notesData) return [];
        
        return notesData.map((note) => ({
            studentFirstName: note.student.firstName,
            studentLastName: note.student.lastName,
            courseName: note.course.name,
            courseCode: note.course.code,
            grade: note.grade,
            view: (
                <Chip
                    key={note._id}
                    component={Link}
                    to={`/notes/${note._id}`}
                    label="Voir"
                />
            )
        }));
    }, [notesData]);

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <Alert severity="error" style={{ margin: '2rem' }}>
                Erreur lors du chargement des notes : {error}
            </Alert>
        );
    }

    return <DataTable data={data} />;
}
export default Notes;