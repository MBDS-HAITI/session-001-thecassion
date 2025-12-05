import React from "react";
import { useParams, Link } from "react-router-dom";
import { CircularProgress, Alert, Card, CardContent, Typography, Grid, Chip } from "@mui/material";
import useFetch from "../../hooks/useFetch";

function NoteDetails() {
    const { id } = useParams();
    const { data: grade, loading, error } = useFetch(`${import.meta.env.VITE_API_BASE_URL}/grades/${id}`);
    
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
                Erreur lors du chargement de la note : {error}
            </Alert>
        );
    }

    if (!grade) {
        return (
            <Alert severity="warning" style={{ margin: '2rem' }}>
                Note non trouvée
            </Alert>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            <Typography variant="h4" gutterBottom>
                Détails de la note
            </Typography>
            
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Étudiant
                            </Typography>
                            <Typography variant="body1">
                                {grade.student?.firstName} {grade.student?.lastName}
                            </Typography>
                            {grade.student?._id && (
                                <Chip
                                    component={Link}
                                    to={`/students/${grade.student._id}`}
                                    label="Voir le profil"
                                    style={{ marginTop: '1rem' }}
                                />
                            )}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Matière
                            </Typography>
                            <Typography variant="body1">
                                {grade.course?.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Code: {grade.course?.code}
                            </Typography>
                            {grade.course?._id && (
                                <Chip
                                    component={Link}
                                    to={`/subjects/${grade.course._id}`}
                                    label="Voir la matière"
                                    style={{ marginTop: '1rem' }}
                                />
                            )}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Note
                            </Typography>
                            <Typography variant="h3" color="primary">
                                {grade.grade}/100
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Date
                            </Typography>
                            <Typography variant="body1">
                                {new Date(grade.date).toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
export default NoteDetails;