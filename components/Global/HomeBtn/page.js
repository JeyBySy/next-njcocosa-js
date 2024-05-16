import React from 'react'
import Link from 'next/link'
import LoadTitle from '../LoadTitle/page'

const HomeBtn = ({ pageName }) => {
    return (
        <div className='flex'>
            <Link href='/' >
                <div className={' w-fit p-1 m-4 text-center align-middle paging font-black'}>&#x2190; </div>
            </Link>
            <LoadTitle title={pageName} />
        </div>
    )
}

export default HomeBtn