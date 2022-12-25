import React from 'react'
import logo from '../assets/logo192.png'
import { Button } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaCoins } from 'react-icons/fa'
import { RiArticleFill } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { FiLogIn } from 'react-icons/fi'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'


const Navbar = ({ user }) => {
    return (

        <>
            <div className='fixed flex flex-row justify-between z-50 w-full text-gray-900 bg-gray-300 bg-opacity-70 dark:bg-dark dark:text-gray-100 backdrop-filter backdrop-blur-lg dark:bg-opacity-50'>
                <Link to='/'>
                    <img src={logo} className="w-[50px] ml-[10px]" alt="logo" />
                </Link>
                <div className='hidden gap-5 items-center md:flex'>
                    <Link to='/Articles'>
                        <p className='transition-border duration-100 ease-out text-black font-semibold text-green-900 text-lg nav-links'>
                            Articles
                        </p>
                        {/* <Button colorScheme='green' variant='solid'>
                            Articles
                        </Button> */}
                    </Link>
                    <Link to="/rewards">
                        <p className='text-black font-semibold text-green-900 text-lg nav-links'>
                            Rewards
                        </p>
                    </Link>
                    {user ? (
                        <Button colorScheme="green" className='mr-4'>Login</Button>
                    ) : (
                        <div className='mr-4'>
                            <Menu >
                                <MenuButton as={Button} colorScheme="green" rightIcon={<ChevronDownIcon />}>
                                    Profile
                                </MenuButton>
                                <MenuList colorScheme="green" className="shadow-xl">
                                    <MenuItem>Your Profile</MenuItem>
                                    <MenuItem>Sign Out</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    )}
                </div>
                <div className='md:hidden mr-3'>
                    <Menu >
                        <MenuButton as={Button}>
                            <GiHamburgerMenu className='text-black' />
                        </MenuButton>
                        <MenuList className="shadow-xl">
                            {user ? (
                                <>
                                    <MenuItem>
                                        <Link to={`/profile/${user?.id}`} className="flex gap-2 items-center">
                                            <CgProfile />
                                            <div>Profile</div>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to="/log" className="flex gap-2 items-center">
                                            <FiLogOut />
                                            <div>Logout</div>
                                        </Link>
                                    </MenuItem>
                                </>
                            ) : (
                                <>
                                    <MenuItem>
                                        <Link to="/login" className="flex gap-2 items-center">
                                            <FiLogIn />
                                            <div>Login</div>
                                        </Link>
                                    </MenuItem>
                                </>
                            )}

                            <MenuList>
                                <Link to="/rewards" className="flex gap-2 items-center ml-2">
                                    <FaCoins />
                                    <div>Rewards</div>
                                </Link>
                            </MenuList>
                            <MenuItem>
                                <Link to={`articles`} className="flex gap-2 items-center">
                                    <RiArticleFill />
                                    <div>Articles</div>
                                </Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div >
        </>
    )
}
export default Navbar