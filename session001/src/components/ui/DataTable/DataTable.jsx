import React from "react";
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import styles from './DataTable.module.css';
import InputAdornment from "@mui/material/InputAdornment";
import TablePagination from "@mui/material/TablePagination";

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

const sortKeys = (data, sortConfig) => {
    if (!sortConfig) return data;
    const { key, direction } = sortConfig;
    return [...data].sort((a, b) => {
        if (a[key] < b[key]) {
            return direction === 'asc' ? -1 : 1;
        }
        if (a[key] > b[key]) {
            return direction === 'asc' ? 1 : -1;
        }
        return 0;
    });
};

const filterData = (data, searchItem) => {
    if (!searchItem) return data;
    const lowercasedSearchItem = searchItem.toLowerCase();
    return data.filter(item =>
        Object.values(item).some(
            value =>
                value &&
                value.toString().toLowerCase().includes(lowercasedSearchItem)
        )
    );
};


function DataTable({data, entityKey}) {
    const [sortConfig, setSortConfig] = React.useState({key: null, direction: 'asc'});
    const [searchItem, setSearchItem] = React.useState('');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handlleSort = (key) => {
        let direction = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({key, direction});
    }

    let {flatData, keys} = flattenData(data);
    if(entityKey){
        keys = entityKey;
    }
    const getSortIcon = (key) => {
        if (!sortConfig || sortConfig.key !== key) return null;
        return sortConfig.direction === 'asc' ?
         ' ▲' : ' ▼';
    }

    // Filter data
    const filteredData = filterData(flatData, searchItem);

    // Sort data
    const sortedData = sortKeys(filteredData, sortConfig);

    // paginate data
    const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    // flatten data with a 
    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <TextField
                    label="Rechercher dans le tableau"
                    variant="outlined"
                    placeholder="Tapez pour rechercher..."
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    className={styles.searchField}
                    slotProps={
                        {
                            input: {
                                startAdornment: (<InputAdornment position="start">🔍</InputAdornment>)
                            }
                        }
                    }
                />
                <div className={styles.resultCount}>
                    {sortedData.length} résultat{sortedData.length > 1 ? 's' : ''}
                </div>
            </div>
        
            <TableContainer component={Paper} className={styles.tableContainer}>
                <Table className={styles.table}>
                    <TableHead className={styles.tableHead}>
                        <TableRow>
                            {
                                keys.map((property) => (
                                    <TableCell 
                                    key={property}
                                    className={`${styles.headerCell} ${styles.sortableHeader}`}
                                    onClick={() => handlleSort(property)}
                                    >
                                        {property}
                                        <span className={styles.sortIndicator}>
                                            {getSortIcon(property)}
                                        </span>
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(paginatedData.length > 0 || paginatedData===null) ? (
                            paginatedData.map((note) => (
                                <TableRow key={note[keys[0]]} className={styles.tableRow}>
                                    {keys.map((property) => (
                                        <TableCell
                                        key={note[keys[0]]+ property} 
                                        className={styles.tableCell}
                                        >
                                            {note[property]}
                                        </TableCell>
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
                <TablePagination
                    component="div"
                    count={sortedData.length}
                    page={page}
                    onPageChange={(event, newPage) => setPage(newPage)}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={(event) => setRowsPerPage(parseInt(event.target.value, 10))}
                    rowsPerPageOptions={[5, 10, 25]}
                    className={styles.pagination}
                />
            </TableContainer>
        </div>
    );
}



DataTable.propTypes = {
    data: PropTypes.array.isRequired,
    entityKey: PropTypes.array,
};
export default DataTable;