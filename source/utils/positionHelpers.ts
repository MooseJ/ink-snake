import { GRID_SIZE } from '../styles/dimensions'
import { Direction } from './helpers'

export interface Position {
	row: number;
	column: number;
}

export const toPosition = (row: number, column: number): Position => ({
	row,
	column
})

export const doPositionsMatch = (p1: Position, p2: Position) => 
	p1.column === p2.column && p1.row === p2.row

export type PositionShifter = { 
  [key in Direction]: (position: Position) => {
    row: number;
    column: number;
  }
}

export const positionShifter: PositionShifter = {
	'UP': (position: Position) => toPosition(position.row - 1, position.column),
	'DOWN': (position: Position) => toPosition(position.row + 1, position.column),
	'LEFT': (position: Position) => toPosition(position.row, position.column - 1),
	'RIGHT': (position: Position) => toPosition( position.row, position.column + 1)
}

export const getCenter = (size: number): Position => 
	toPosition(
		Math.floor(size/2),
		Math.floor(size/2)
  )
  
  export const getRandomPosition = () => 
	toPosition(
		Math.floor(Math.random() * GRID_SIZE),
		Math.floor(Math.random() * GRID_SIZE)
	)
