import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button, Image, Stack, Heading, Text } from '@chakra-ui/react'

const PlantATree = () => {
  return (
    <div className='flex'>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='../assets/plant_tree.png'
                alt='Planting_tree'
            />

            <Stack>
                <CardBody>
                <Heading size='md'>Plant a Tree</Heading>

                <Text py='2'>
                    Help reduce your area's carbon footprint and AQI by planting a tree.
                </Text>
                </CardBody>

                <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                    Plant Tree
                </Button>
                </CardFooter>
            </Stack>
            </Card>
      
    </div>
  )
}

export default PlantATree
