import React from "react";
import data from "../../../../data.json"
import {DataTable} from "../../components/ui";

function Notes() {
    return (
        <DataTable data={data} />
    );
    
}
export default Notes;