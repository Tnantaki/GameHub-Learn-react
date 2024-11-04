import { Button, Text } from '@chakra-ui/react'
import { useState } from 'react'

interface Props {
  children: string
  limit?: number
}

const ShowMoreText = ({children, limit = 300}: Props) => {
  const [expanded, setExpand] = useState(false)

  if (!children) return null

  if (children.length <= limit) return <Text>{children}</Text>

  const displayText = expanded ? children : children.substring(0, limit) + '...'

  return (
    <>
      <Text>
        {displayText}
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          marginLeft={1}
          onClick={() => setExpand(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
}

export default ShowMoreText