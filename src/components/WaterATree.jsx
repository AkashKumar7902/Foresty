import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button, Image, Stack, Heading, Text } from '@chakra-ui/react'

const WaterATree = () => {
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
                src=''
                alt='Water_tree'
            />

            <Stack>
                <CardBody>
                <Heading size='md'>Water a Tree</Heading>

                <Text py='2'>
                    Water a nearby planted tree to help it grow.
                </Text>
                </CardBody>

                <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                    Water Tree
                </Button>
                </CardFooter>
            </Stack>
            </Card>
      
    </div>
  )
}

export default WaterATree
