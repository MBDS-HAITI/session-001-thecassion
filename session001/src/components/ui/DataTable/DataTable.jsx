import React from "react";
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './DataTable.module.css';

//flatten data function with recursive flattening
function flattenData(data) {
    let keys = new Set();
    let flatData = data.map(item => {
        let flatItem = {};
        function recurse(curr, prop) {
            if (Object(curr) !== curr) {
                flatItem[prop] = curr;
            } else if (Array.isArray(curr)) {
                for (let i = 0; i < curr.length; i++) {
                    recurse(curr[i], prop + "[" + i + "]");
                }
            } else {
                let isEmpty = true;
                for (let p in curr) {
                    isEmpty = false;
                    recurse(curr[p], prop ? prop + "." + p : p);
                }
                if (isEmpty && prop) {
                    flatItem[prop] = {};
                }
            }
        }
        recurse(item, "");
        Object.keys(flatItem).forEach(key => keys.add(key));
        return flatItem;
    });
    return {flatData, keys: Array.from(keys)};
}

function DataTable({data, entityKey}) {

    let {flatData, keys} = flattenData(data);
    if(entityKey){
        keys = entityKey;
    }


    // flatten data with a 
    return (
        <div className={styles.container}>
            <TableContainer component={Paper} className={styles.tableContainer}>
                <Table className={styles.table}>
                    <TableHead className={styles.tableHead}>
                        <TableRow>
                            {
                                keys.map((property) => (
                                    <TableCell key={property} className={styles.headerCell}>{property}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {flatData.length > 0 ? (
                            flatData.map((note) => (
                                <TableRow key={note.id} className={styles.tableRow}>
                                    {keys.map((property) => (
                                        <TableCell key={note.id + property} className={styles.tableCell}>{note[property]}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={keys.length} className={styles.emptyState}>
                                    Aucune donnée disponible
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}



DataTable.propTypes = {
    data: PropTypes.array.isRequired,
    entityKey: PropTypes.array,
};
export default DataTable;