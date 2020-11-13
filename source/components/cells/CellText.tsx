import React from 'react'
import { Text, Box } from 'ink'
import { SNAKE_GREEN, SNACK_RED } from '../../styles/colors'

interface Props {
  backgroundColor?: typeof SNAKE_GREEN | typeof SNACK_RED
}
const CellText = (props: Props) => {
  const backgroundColor = props.backgroundColor
  return ( 
    <Box flexDirection='column'>
      <Text backgroundColor={backgroundColor}>{'     '}</Text> 
      <Text backgroundColor={backgroundColor}>{'     '}</Text> 
    </Box>
  )
}

export default CellText;