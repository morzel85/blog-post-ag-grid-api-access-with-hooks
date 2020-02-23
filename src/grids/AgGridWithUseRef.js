import React, { useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import { columnDefs } from "./columnDefs";
import { rowData } from "./rowData";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const AgGridWithUseRef = () => {
  console.log("AgGridWithUseRef Render");

  const gridApi = useRef();
  const columnApi = useRef();

  return (
    <div className="example">
      <h1>API access with useRef</h1>
      <div>
        <button
          onClick={() => gridApi.current && gridApi.current.selectAll()}>
          Grid API selectAll()
        </button>
        <button
          onClick={() =>columnApi.current && columnApi.current.moveColumnByIndex(0, 1)}>
          Column API moveColumnByIndex(0, 1)
        </button>
      </div>
      <div className="ag-theme-balham">
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          rowSelection="multiple"
          onGridReady={params => {
            console.log("AgGridWithUseRef Grid Ready");
            gridApi.current = params.api;
            columnApi.current = params.columnApi;
          }}
        />
      </div>
    </div>
  );
};

export default AgGridWithUseRef;
