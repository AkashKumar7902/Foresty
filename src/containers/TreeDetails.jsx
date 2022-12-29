import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client, urlFor } from '../client';
import { getTreeById } from '../utils/data';

const TreeDetails = () => {
    const [tree, setTree] = useState(null);
    const { id } = useParams();
    const queryString = getTreeById(id);
    useEffect(() => {
        client.fetch(queryString)
            .then((res) => {
                setTree(res[0]);
                console.log(res[0].plantedby)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div className="flex flex-col md:flex-row p-4 mt-[80px] flex-col gap-2">
            <div className="flex flex-col items-center gap-3 w-full md:w-1/2">
                <div className="border-2 border-gray-300 mb-[10px]">
                    {tree?.plant_image &&
                        <img src={urlFor(tree?.plant_image).url()} className="h-[50vh]" alt="" />
                    }
                </div>
                <p className='font-bold uppercase'>{tree?.species}</p>
                <hr className='w-full bg-gray-100 h-[1px] w-[380px]' />
                <p className='font-semibold uppercase'>
                    Planted On: {tree?.plantedDate}
                </p>
                <hr className='w-full bg-gray-100 h-[1px] w-[380px]' />
                <p className='flex gap-2 font-semibold uppercase'>
                    <p>Planted By:</p>
                    <a href={`/userprofile/${tree?.plantedby?._id}`} className="hover:underline">
                        {tree?.plantedby.userName}
                    </a>
                </p>
            </div>
        </div >
    )
}

export default TreeDetails