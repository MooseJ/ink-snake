import React from 'react'
import { Box, Newline, Text } from 'ink'
import { PURPLE_EMPTINESS, SNACK_RED, SNAKE_GREEN } from '../../styles/colors'

interface Props {
  score: number
}
const InstructionAndScore = ({score}: Props) => {
  return (
    <Box alignSelf='center' alignItems='center' flexDirection='column'>
        <Text color={PURPLE_EMPTINESS}>
          Use <Text color={SNAKE_GREEN}> Arrow Keys </Text> to move
        </Text>
        <Text color={PURPLE_EMPTINESS}>
          Press <Text color={SNACK_RED}> Q </Text> to quit
        </Text>
        <Newline/>
        <Text color={PURPLE_EMPTINESS}>Score: {score}</Text>
        <Newline/>
    </Box>
  )
}

export default InstructionAndScore;