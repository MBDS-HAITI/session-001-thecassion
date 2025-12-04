import React from "react";
import {DataTable} from "../../components/ui";

function Students() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        // fetch data from http://localhost:8010/api/students
        fetch(`${import.meta.env.VITE_API_BASE_URL}/students`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);
    // student properties in data
    return (
        <DataTable data={data} />

    );
    
}
export default Students;