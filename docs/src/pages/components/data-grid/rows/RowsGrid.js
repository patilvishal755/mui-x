import * as React from 'react';
import { DataGrid } from '@material-next/data-grid';

export default function RowsGrid() {
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[{ field: 'name' }]}
        rows={[
          { id: 1, name: 'React' },
          { id: 2, name: 'Material-UI' },
        ]}
      />
    </div>
  );
}
