import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button, Image, Stack, Heading, Text } from '@chakra-ui/react'
import plantTree from '../assets/plantTree.svg'
import { Link } from 'react-router-dom'

const PlantATree = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row mx-12 text-4xl gap-32 items-center h-[80vh]'>
                <img src={plantTree} className="order-1 md:order-1 md:w-[30%] w-full" alt='Planting_tree' />
                <div className='flex flex-col gap-5 order-2 md:order-2'>
                    <p className='bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-red-600'>
                        Help reduce your area's carbon footprint and AQI by planting a tree.
                    </p>
                    <Link to='/plant'>
                        <Button variant='solid' size="lg" colorScheme='green'>
                            Plant Tree
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PlantATree
