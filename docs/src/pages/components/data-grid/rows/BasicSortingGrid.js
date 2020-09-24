import * as React from 'react';
import { DataGrid } from '@material-next/data-grid';
import { useDemoData } from '@material-next/x-grid-data-generator';

const sortModel = [
  {
    field: 'commodity',
    sort: 'asc',
  },
];

export default function BasicSortingGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid sortModel={sortModel} {...data} />
    </div>
  );
}
