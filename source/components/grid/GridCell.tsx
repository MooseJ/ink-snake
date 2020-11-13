import { GridCellRenderer } from '../cells/cellRenderer'

interface Props {
  row: number, 
  column: number,
  gridCellRenderer: GridCellRenderer
}

const GridCell = (props: Props) => {
  const { row, column, gridCellRenderer } = props; 
  return (
    gridCellRenderer(row, column)
  )
}

export default GridCell;