import React from "react";
import {DataTable} from "../../components/ui";
import {Chip, CircularProgress, Alert} from "@mui/material";
import {Link} from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Students() {
    // we use our custom hook to fetch students data from the API
    const { data: studentsData, loading, error } = useFetch(`${import.meta.env.VITE_API_BASE_URL}/students`);
    // We use React.useMemo to memoize the data transformation
    const data = React.useMemo(() => {
        if (!studentsData) return [];
        
        return studentsData.map((student) => ({
            firstName: student.firstName,
            lastName: student.lastName,
            view: (
                <Chip
                    key={student._id}
                    component={Link}
                    to={`/students/${student._id}`}
                    label="Voir"
                />
            )
        }));
    }, [studentsData]);

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
                Erreur lors du chargement des étudiants : {error}
            </Alert>
        );
    }

    return <DataTable data={data} />;
}
export default Students;