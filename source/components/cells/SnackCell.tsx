import React from 'react';
import { Text, Box } from 'ink';
import { SNACK_RED } from '../../styles/colors'
import CellText from './CellText'

const SnackCell = () => {
  return ( 
    <CellText backgroundColor={SNACK_RED}/>
  )
}

export default SnackCell;