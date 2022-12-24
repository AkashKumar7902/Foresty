import React from 'react'
import logo from '../assets/logo192.png'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaCoins } from 'react-icons/fa'
import { RiArticleFill } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { FiLogIn } from 'react-icons/fi'

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
import { ChevronDownIcon } from '@chakra-ui/icons'

const Navbar = ({ user }) => {
    return (
        <div className='flex justify-between px-20 absolute top-0 left-0 h-20 w-full'>
            <div className='!'>
                Project
            </div>
        </div>
        // <div className='flex d-fixed shadow-2xl bg-green-900 justify-between items-center h-14 w-full'>
        //     <div className='w-16 text-green-800 m-3' >
        //         <img src={logo} alt="logo" />
        //     </div>
        //     <div className='hidden gap-5 items-center md:flex'>
        //         <Link to='/articles'>
        //             <Button colorScheme='gray' variant='outline'>
        //                 Articles
        //             </Button>
        //         </Link>
        //         <Link to="/rewards">
        //             <Button colorScheme='gray' variant='outline'>
        //                 Rewards
        //             </Button>
        //         </Link>
        //         {user ? (
        //             <Button colorScheme="gray" className='mr-4'>Login</Button>
        //         ) : (
        //             // <Link to={`user-profile/${user?._id}`} className="hidden md:block">
        //             //     <img src={user.image} alt="user" className="w-14 h-12 rounded-lg" />
        //             // </Link>
        //             <div className='mr-4'>
        //                 <Menu >
        //                     <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        //                         Profile
        //                     </MenuButton>
        //                     <MenuList className="shadow-xl">
        //                         <MenuItem>Your Profile</MenuItem>
        //                         <MenuItem>Sign Out</MenuItem>
        //                     </MenuList>
        //                 </Menu>
        //             </div>
        //         )}
        //     </div>
        //     <div className='md:hidden mr-3'>
        //         <Menu >
        //             <MenuButton as={Button}>
        //                 <GiHamburgerMenu />
        //             </MenuButton>
        //             <MenuList className="shadow-xl">
        //                 {user ? (
        //                     <>
        //                         <MenuItem>
        //                             <Link to={`/profile/${user?.id}`} className="flex gap-2 items-center">
        //                                 <CgProfile />
        //                                 <div>Profile</div>
        //                             </Link>
        //                         </MenuItem>
        //                         <MenuItem>
        //                             <Link to="/log" className="flex gap-2 items-center">
        //                                 <FiLogOut />
        //                                 <div>Logout</div>
        //                             </Link>
        //                         </MenuItem>
        //                     </>
        //                 ) : (
        //                     <>
        //                         <MenuItem>
        //                             <Link to="/login" className="flex gap-2 items-center">
        //                                 <FiLogIn />
        //                                 <div>Login</div>
        //                             </Link>
        //                         </MenuItem>
        //                     </>
        //                 )}

        //                 <MenuList>
        //                     <Link to="/rewards" className="flex gap-2 items-center ml-2">
        //                         <RiArticleFill />
        //                         <div>Articles</div>
        //                     </Link>
        //                 </MenuList>
        //                 <MenuItem>
        //                     <Link to="/articles" className="flex gap-2 items-center">
        //                         <FaCoins />
        //                         <div>Rewards</div>
        //                     </Link>
        //                 </MenuItem>
        //             </MenuList>
        //         </Menu>
        //     </div>
        // </div >
    )
}
export default Navbar