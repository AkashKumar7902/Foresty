import React from 'react'
import { Routes, Route } from 'react-router-dom';
import RewardsPageComp1 from '../components/RewardsPageComp1';
import RewardsPageComp2 from '../components/RewardsPageComp2';

const Rewards = () => {
    return (
        <>
            {/* <div className='rewards-bg flex flex-col items-center' >
                <div className='text-5xl mt-[22vh] font-bold text-green-900'>
                    Store
                </div>
                <div className='flex mt-[10vh] justify-center gap-5'>
                    <button className='rounded-xl border-green-900'>Redeem</button>
                    <button>Earn Coins</button>
                </div>
            </div> */}
            <RewardsPageComp1 />
            <RewardsPageComp2 />
        </>
    )
}

export default Rewards