import React from 'react'
import { SNAKE_GREEN } from '../../styles/colors'
import CellText from './CellText'

const SnakeCell = () => {
  return ( 
    <CellText backgroundColor={SNAKE_GREEN}/>
  )
}

export default SnakeCell;