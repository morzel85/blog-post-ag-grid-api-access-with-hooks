import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import { columnDefs } from "./columnDefs";
import { rowData } from "./rowData";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const AgGridWithUseState = () => {
  console.log("AgGridWithUseState Render");

  const [gridApi, setGridApi] = useState();
  const [columnApi, setColumnApi] = useState();

  return (
    <div className="example">
      <h1>API access with useState</h1>
      <div>
        <button
          onClick={() => gridApi && gridApi.selectAll()}>
          Grid API selectAll()
        </button>
        <button 
          onClick={() => columnApi && columnApi.moveColumnByIndex(0, 1)}>
          Column API moveColumnByIndex(0, 1)
        </button>
      </div>
      <div className="ag-theme-balham">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          rowSelection="multiple"
          onGridReady={params => {
            console.log("AgGridWithUseState Grid Ready");
            setGridApi(params.api);
            setColumnApi(params.columnApi);
          }}
        />
      </div>
    </div>
  );
};

export default AgGridWithUseState;
