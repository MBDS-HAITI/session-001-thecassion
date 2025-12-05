import React from "react";
import data from "../../../../data.json";

function Home() {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const sendDataToServer = (data) => {
        // post data to grades server http://localhost:8010/api/grades
        // post data to server http://localhost:8010/api/students
        // post data to server http://localhost:8010/api/courses

        fetch(`${baseUrl}/data`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (
        <div>
            <button onClick={() => sendDataToServer(data)}>Importer les données</button>
            <h1>Bienvenue sur l'application de gestion des notes</h1>
            <p>Cette application vous permet de gérer les notes, les étudiants et les matières de manière efficace.</p>
            <p>Utilisez le menu pour naviguer entre les différentes sections de l'application.</p>
        </div>
    );
}
export default Home;