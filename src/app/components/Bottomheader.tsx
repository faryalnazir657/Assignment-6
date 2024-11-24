
import React from 'react'
import Image from 'next/image'
const Bottomheader = () => {
  return (
    <div className="flex justify-center items-center bg-slate-50">
      <div>
      <Image src={"/image/bottomheader.svg"} alt="bottomheader" width={1152} height={44}></Image>
      </div>
    </div>
  )
}

export default Bottomheader
