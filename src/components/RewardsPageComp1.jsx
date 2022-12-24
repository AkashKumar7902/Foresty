import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Image, Stack, Heading, Text, Divider, ButtonGroup } from '@chakra-ui/react'


const RewardsPageComp1 = () => {
    return (
        <div>
            <div className='pt-20'>
                <Text className='text-center'
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'
                >
                    Welcome to the Rewards Store
                </Text>
            </div>
            <div className='text-center pt-10 pb-10 font-bold text-3xl bg-clip-text '>
                Redeem your points for awesome goodies.
            </div>
            <div>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='badge'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Master Tree Planter Badge</Heading>
                            <Text>
                                Congratulations! You have planted 10 trees. You are now a Master Tree Planter. Use your
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                100 points
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Redeem now
                            </Button>
                            {/* <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                            </Button> */}
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default RewardsPageComp1