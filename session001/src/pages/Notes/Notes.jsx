import React from "react";
import {DataTable} from "../../components/ui";

function Notes() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        // fetch data from http://localhost:8010/api/grades
        fetch(`${import.meta.env.VITE_API_BASE_URL}/grades`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);
    return (
        <DataTable data={data} />
    );
}
export default Notes;