import React from 'react'
import { Box} from 'ink'
import BigText from 'ink-big-text'
import Gradient from 'ink-gradient'

const Title = () => {
  return (
      <Box>
        <Gradient name='pastel'>
          <BigText text='Snake'/>
        </Gradient>
      </Box>
  )
}

export default Title;