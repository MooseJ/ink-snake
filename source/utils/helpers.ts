import { GRID_SIZE } from '../styles/dimensions'
import { doPositionsMatch, getCenter, getRandomPosition, Position } from './positionHelpers'

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

export const range = (range: number) => [...Array(range).keys()]

export const canEat = (snake: Position[], snack: Position) => {
  const snakeHead = snake[0]
  return doPositionsMatch(snakeHead, snack)
}

export const isEatingSelf = (snake: Position[]) => {
  const snakeHead = snake[0];
  return snake.slice(1)
    .find((snakePart) => doPositionsMatch(snakeHead, snakePart)) !== undefined
}

export const isOutOfBound = (snake: Position[]) => {
  const snakeHead = snake[0];
  return snakeHead.row < 0 
    || snakeHead.column < 0 
    || snakeHead.row >= GRID_SIZE 
    || snakeHead.column >= GRID_SIZE
}

export const getNextSnackPosition = (snake: Position[]) => {
  let nextSnack = getRandomPosition();
  while(snake.find(s => doPositionsMatch(s, nextSnack)) !== undefined) {
    nextSnack = getRandomPosition()
  }
  return nextSnack;
}

export const initSnake = () => [getCenter(GRID_SIZE)];
export const initSnack = () => getRandomPosition()