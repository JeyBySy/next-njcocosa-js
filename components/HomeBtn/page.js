import React from 'react'
import Link from 'next/link'

const HomeBtn = () => {
    return (
        <Link href='/' >
            <div className={'rounded-full w-fit px-3 py-1 m-5 outline  text-center align-middle hover:text-white text-[25px] font-black'}>&#x2190;</div>
        </Link>
    )
}

export default HomeBtn