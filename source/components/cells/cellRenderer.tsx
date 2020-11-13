import React from 'react'
import EmptyCell from './EmptyCell'
import SnackCell from './SnackCell'
import SnakeCell from './SnakeCell'
import { toPosition, doPositionsMatch, Position } from '../../utils/positionHelpers'

export type GridCellRenderer = (row: number, column: number) => JSX.Element

export const cellRenderer = (snake: Position[], snack: Position): GridCellRenderer => {
	return (row: number, column: number) => {
		const currentPosition = toPosition(row, column)
		const isSnake = snake.find((snakePart) => doPositionsMatch(snakePart, currentPosition))
		const isSnack = doPositionsMatch(snack, currentPosition)
		const isEmpty = !isSnack && !isSnake
		
		return (
			<> 
				{ isSnake && <SnakeCell/> }
				{ isSnack && !isSnake && <SnackCell/> }
				{ isEmpty && <EmptyCell/> }      
			</>
		)
	}
}