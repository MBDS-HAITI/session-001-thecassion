import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams, Link } from "react-router-dom";
import { CircularProgress, Alert, Card, CardContent, Typography, Chip } from "@mui/material";
import { DataTable } from "../../components/ui";

function SubjectDetails() {
    const { id } = useParams();
    const { data: course, loading, error } = useFetch(`${import.meta.env.VITE_API_BASE_URL}/courses/${id}`);

    const gradesData = React.useMemo(() => {
        if (!course?.grades) return [];
        
        return course.grades.map((grade) => ({
            studentFirstName: grade.student.firstName,
            studentLastName: grade.student.lastName,
            grade: grade.grade,
            date: new Date(grade.date).toLocaleDateString('fr-FR'),
            view: (
                <Chip
                    key={grade._id}
                    component={Link}
                    to={`/notes/${grade._id}`}
                    label="Voir"
                />
            )
        }));
    }, [course]);

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
                Erreur lors du chargement de la matière : {error}
            </Alert>
        );
    }

    if (!course) {
        return (
            <Alert severity="warning" style={{ margin: '2rem' }}>
                Matière non trouvée
            </Alert>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            <Card style={{ marginBottom: '2rem' }}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {course.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Code: {course.code}
                    </Typography>
                </CardContent>
            </Card>

            <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
                Notes des étudiants
            </Typography>
            {gradesData.length > 0 ? (
                <DataTable data={gradesData} />
            ) : (
                <Alert severity="info">
                    Aucune note disponible pour cette matière
                </Alert>
            )}
        </div>
    );
}

export default SubjectDetails;