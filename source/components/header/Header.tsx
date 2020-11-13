import React from 'react';
import { Box } from 'ink'
import Title from './Title'
import InstructionAndScore from './IntructionAndScore'

interface Props {
  score: number
}
const Header = ({score}: Props) => {
  return (
    <Box alignSelf='center' alignItems='center' flexDirection='column'>
      <Title/>
      <InstructionAndScore score={score}/>
    </Box>
  )
}

export default Header;