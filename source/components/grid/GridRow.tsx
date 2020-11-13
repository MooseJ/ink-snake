
import React from 'react';
import { Box} from 'ink';
import { range } from '../../utils/helpers';
import GridCell from './GridCell';
import { GridCellRenderer } from '../cells/cellRenderer';

interface Props {
  numberOfColumns: number,
  row: number, 
  gridCellRenderer: GridCellRenderer
}

const GridRow = (props: Props) => {
  const { numberOfColumns, row, gridCellRenderer } = props;
  return (
    <Box flexDirection="row">
      { range(numberOfColumns).map((column) =>
        <GridCell 
          key={`${row}-${column}`} 
          row={row} 
          column={column} 
          gridCellRenderer={gridCellRenderer}
        />
      )}
    </Box>
  )
}

export default GridRow