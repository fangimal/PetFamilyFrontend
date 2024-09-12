import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Input, Stack, StackDivider, Text } from '@chakra-ui/react'

type Props ={
  counter: number;
}

export default function PetCard({counter}: Props) {
  return (
    <div className="h-screen flex flex-col gap-8   justify-center items-center bg-gray-300">
<Card>
  <CardHeader>
    <Heading size='md'>{counter}</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Summary
        </Heading>
        <Text pt='2' fontSize='sm'>
          View a summary of all your clients over the last month.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Overview
        </Heading>
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
    </Stack>
  </CardBody>
  <CardFooter>
      <Button onClick={() => setCounter((counter) => counter +1)} 
      variant='solid' 
      colorScheme='blue'
      className="mr-5"
      >
        Buy now
      </Button>
<Input onChange={(e) => setText(e.target.value)}/>
  </CardFooter>
</Card>
</div>
);
}


