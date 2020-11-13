import React, { useEffect, useState } from 'react'
import Grid  from './grid/Grid'
import { Box, useInput, useApp } from 'ink'
import { 
	Direction, 
	initSnake, 
	initSnack, 
	isOutOfBound, 
	isEatingSelf, 
	canEat, 
	getNextSnackPosition 
} from '../utils/helpers'
import { GAME_HEIGHT, GAME_WIDTH, GRID_SIZE } from '../styles/dimensions'
import { cellRenderer } from './cells/cellRenderer'
import { positionShifter } from '../utils/positionHelpers'
import Header from './header/Header'

const Game = () => {
	const [cycle, setCycle] = useState(1)
	const [score, setScore] = useState(0)
	const [direction, setDirection] = useState<Direction>('UP')

	const [snake, setSnake] = useState(initSnake())
	const [snack, setSnack] = useState(initSnack())

	const { exit } = useApp();
	useInput((input, key) => {
		if (key.upArrow && direction !== 'DOWN') {
			setDirection('UP')
		}

		if (key.downArrow  && direction !== 'UP') { 
			setDirection('DOWN')
		}

		if (key.leftArrow && direction !== 'RIGHT') {
			setDirection('LEFT')
		}
		if (key.rightArrow && direction !== 'LEFT') {
			setDirection('RIGHT')
		}
 
		if (input === 'q' || input === 'Q' || key.escape) {
			exit()
		}
	})

  /***
   * Run a cycle of the game loop every 200 ms
   * 
   * Game Loop: 
   * 1. First we update the snakes positions
   * 2. If the snake is in a bad state,
   * we restart the game
   * 3. Otherwise, if the snake is eating a snack,
   * increase the score and extend the snake
   */
	useEffect(() => {
		updateSnakePosition();
		if (isOutOfBound(snake) || isEatingSelf(snake)) {
			resetGame()
		} else if (canEat(snake, snack)) {
			eat()
		}
		const timer = setTimeout(() => { 
			setCycle(cycle => cycle + 1)
		}, 150)
		return () => clearTimeout(timer)
  }, [cycle])

	const resetGame = () => {
		setSnake(initSnake())
		setSnack(initSnack())
		setDirection('UP')
		setScore(0)
	}

	const eat = () => {
		extendSnake()
		setSnack(getNextSnackPosition(snake))
		setScore(score => score + 1)
	}

	const updateSnakePosition = () => {
		const snakeHead = snake[0];
		const newSnakeHead = positionShifter[direction](snakeHead)
		setSnake([newSnakeHead, ...snake.slice(0, snake.length - 1)])
	}

	const extendSnake = () => {
		const snakeHead = snake[0];
		const newSnakeHead = positionShifter[direction](snakeHead)
		setSnake([newSnakeHead, ...snake])
	}

	return <>
		<Box flexDirection='column' width={GAME_WIDTH} height={GAME_HEIGHT}>
			<Header score={score}/>
			<Grid 
				numberOfColumns={GRID_SIZE} 
				numberOfRows={GRID_SIZE} 
				gridCellRenderer={cellRenderer(snake, snack)}
			/>
		</Box>
	</>
};

export default Game