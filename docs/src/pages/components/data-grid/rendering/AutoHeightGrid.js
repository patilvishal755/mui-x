import * as React from 'react';
import { DataGrid } from '@material-next/data-grid';
import { useDemoData } from '@material-next/x-grid-data-generator';

export default function AutoHeightGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid autoHeight {...data} />
    </div>
  );
}
