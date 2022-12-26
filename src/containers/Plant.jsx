import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button, ListItem, OrderedList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiPlantFill } from 'react-icons/ri'
import formPlant from '../assets/formPlant.svg'

const Plant = ({ user }) => {
    const [name, setName] = useState(null);

    return (
        <div className='flex flex-col justify-center gap-32 pt-20 w-full px-3 sm:px-10 md:px-20'>
            <div>
                {/* mapbox here */}

            </div>
            <div className='flex flex-col items-center gap-10'>
                <p className='text-3xl md:text-4xl text-center font-bold border-b-gray-300 w-full border-b-2 pb-6'>Steps for planting a tree</p>
                <div className='text-md sm:text-lg md:text-2xl font-semibold flex flex-col items-center'>
                    <div className='list'><RiPlantFill className='hidden sm:block' /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> </div>
                    <div className='list'><RiPlantFill className='hidden sm:block' /><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, debitis.</p></div>
                    <div className='list'><RiPlantFill className='hidden sm:block' /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, accusantium.</p></div>
                    <div className='list'><RiPlantFill className='hidden sm:block' /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, nisi.</p></div>
                    <div className='list'><RiPlantFill className='hidden sm:block' /><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt libero </p></div>
                </div>
            </div>
            <div className='flex flex-col items-center '>
                <p className='text-3xl md:text-4xl text-center font-bold border-b-gray-300 w-full border-b-2 pb-6'>
                    Please enter the details of your plant
                </p>
                {user ? (
                    <>
                        <div className='flex flex-col justify-center md:flex-row gap-10 w-full p-8 md:p-16'>
                            <div className='order-2 md:order-1 flex flex-col justify-center gap-2 w-full md:w-1/2'>
                                <img
                                    src={user.image}
                                    alt="user-profile"
                                    className="w-10 h-10 rounded-full"
                                />
                                <p className='font-bold'>
                                    {user.userName}
                                </p>
                            </div>
                            <div className='flex justify-center md:block'>
                                <img src={formPlant} className="order-1 md:order-2 w-1/2" alt="" />
                            </div>
                        </div>
                        <div>

                        </div>
                    </>
                ) : (
                    <div className="mt-10 flex flex-col gap-4 justify-center items-center h-[50vh] w-full border-dashed border-2 shadow-xl rounded-xl border-gray-400 bg-gray-200">
                        <p className='text-lg text-gray-500'>Login is required to fill the form </p>
                        <a href="/login">
                            <Button colorScheme='blue'>Login</Button>
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

// name, address, 

export default Plant