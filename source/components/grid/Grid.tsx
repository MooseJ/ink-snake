import React from 'react'
import { Box} from 'ink'
import { range } from '../../utils/helpers'
import GridRow from './GridRow'
import { PURPLE_EMPTINESS } from '../../styles/colors'
import { GridCellRenderer } from '../cells/cellRenderer'

interface Props {
  numberOfRows: number,
  numberOfColumns: number,
  gridCellRenderer: GridCellRenderer
}

const Grid = (props: Props) => {
  const { numberOfColumns, numberOfRows, gridCellRenderer} = props;

  return ( 
    <Box 
      flexDirection='column'
      alignSelf='center'  
      borderStyle='round' 
      borderColor={PURPLE_EMPTINESS} 
    > 
      { range(numberOfRows).map((row) =>
          <GridRow 
            key={row} 
            numberOfColumns={numberOfColumns} 
            row={row} 
            gridCellRenderer={gridCellRenderer}
          />
      )}
    </Box>
  )
}

export default Grid;