import Image from 'next/image'
import React from 'react'

const Topheader = () => {
  return (
    <div className=" flex justify-center items-center bg-[#F7F7F7]">
        <div>
         <Image src={"/image/Container.svg"} alt="Container" width={1154} height={54}></Image>
        </div>
     
    </div>
  )
}

export default Topheader
