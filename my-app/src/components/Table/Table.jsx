import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
const table = (props) =>{

    const columns = [
        {field: 'repo', headerName:'Repo' },
        {field: 'owner', headerName:'Owner'},
        {field: 'githubLink', headerName:'Github Link'},
        {field: 'articles', headerName:'articles', type: 'number'}
    ]

    const rows = require("../../assets/data/data.json");

    return (
        <div style={{ width: "auto", height: 400 , marginTop: "auto"}}>
            <DataGrid rows={rows} columns={columns} />
        </div>
      );

}


export default table;