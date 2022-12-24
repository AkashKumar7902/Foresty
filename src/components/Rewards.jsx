import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button, Image, Stack, Heading, Text, Divider, ButtonGroup } from '@chakra-ui/react'

const Rewards = () => {
  return (
    <div className=''>
        <div className='text-center pt-40 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-green-600'>
            We give rewards to those who care about the environment.
        </div>
        <div>
        <Card maxW='sm'>
            <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Badges'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>Badges and T-shirts</Heading>
                <Text>
                    Get awesome badges and T-shirts that represent you care for the Earth.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    From 100 points
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
        </div>
        <div>
        <Card maxW='sm'>
            <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>Amazon vouchers</Heading>
                <Text>
                    Get Amazon vouchers for your contributions. Isn't that a win-win?
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    From 1000 points
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
        </div>
        
        
        <div className='text-center'>
        <Button
            size='md'
            height='48px'
            width='200px'
            border='2px'
            borderColor='green.500'
            >
                Explore more Rewards
            </Button>
             {/* //Wrap the button in a link to the rewards page */}
        </div>
    </div>
  )
}

export default Rewards
