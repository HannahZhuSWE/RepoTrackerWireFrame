import React from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';
const table = (props) =>{

    const columns: ColDef[] = [
        {field: 'repo', headerName:'Repo', width:150 },
        {field: 'owner', headerName:'Owner', width:200 },
        {field: 'githubLink', headerName:'Github Link', width:350 },
        {field: 'articles', headerName:'articles', textAlignment:"center", width:150 }
    ]

    const rows = require("../../assets/data/data.json");

    return (
        <div style={{ width: "100%", height: 400 , marginTop: "auto"}}>
            <DataGrid 
                rows={rows} 
                columns={columns} 
                disableExtendRowFullWidth={false}/>
        </div>
      );

}


export default table;