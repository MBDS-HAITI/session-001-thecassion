import React from "react";
import {DataTable} from "../../components/ui";
import {Chip, CircularProgress, Alert} from "@mui/material";
import {Link} from "react-router-dom";
import useFetch from "../../hooks/useFetch";


function Subject() {
    // we use our custom hook to fetch subjects data from the API
    const { data: subjectsData, loading, error } = useFetch(`${import.meta.env.VITE_API_BASE_URL}/courses`);
    // We use React.useMemo to memoize the data transformation
    const data = React.useMemo(() => {
        if (!subjectsData) return [];
        
        return subjectsData.map((subject) => ({
            name: subject.name,
            code: subject.code,
            view: (
                <Chip
                    key={subject._id}
                    component={Link}
                    to={`/subjects/${subject._id}`}
                    label="Voir"
                /> 
            )
        }));
    }, [subjectsData]);

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
                Erreur lors du chargement des matières : {error}
            </Alert>
        );
    }

    return <DataTable data={data} />;
}
export default Subject;