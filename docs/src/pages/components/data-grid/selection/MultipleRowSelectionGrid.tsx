import * as React from 'react';
import { XGrid } from '@material-next/x-grid';
import { useDemoData } from '@material-next/x-grid-data-generator';

export default function MultipleRowSelectionGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <XGrid {...data} />
    </div>
  );
}
