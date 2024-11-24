import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
   <div className='container mx-auto py-16 flex flex-col min-h-screen items-center gap-8'>
    <div className=' w-full p-28 m-28'>
        <h1 className='text-3xl lg:text-5xl font-bold mb-4'>Learn new skills online with ease </h1>
         <p className='text-gray-600 p-2 m-2'>
            Discover a wide range of courses covering a veriety <br/>of subject,
            taught by expert instructor
         </p>
         <div className="flex gap-4 justify-center lg:justify-start p-2 m-2">
            <button className="px-6 py-3 text-white border rounded bg-black hover:bg-amber-200">Start learning now</button>
            <button className="px-6 py-3 border rounded hover:bg-gray-100">Explore Courses</button>
        </div>
        </div>
         <div className=" flex justify-center items-center p-9 -m-24 absolute right-0 w-[640px] h-[900px] ">
          <Image className="shadow-lg w-80 lg:w-[640px]"src={"/image/image.svg"} alt='container' width={640} height={900}></Image>
        
        <div className="mt-0 lg:mt-0 lg:ml-12 flex justify-center items-center w-[640px] h-[900px]">
        </div>
        </div>
        <div className="flex  justify-center items-center p-0 m-5 bg-slate-50 gap- mx-auto py- w-[1280px] h-[228px] bottom-4 left-1">
        <p className="text-black w-[320px] h-[68px] font-bold p-5"> Trusted by 2000+ companies worldwide.</p>
        <Image className="border-r-yellow-700 sm:640px md:768px"src={"/image/logo.svg"} alt="faryal_image" width={880} height={56}></Image>
        </div>
        
        <div className=" container mx-auto  w-[1280px] h-[1049px]">
          <h2 className=" flex justify-center items-center text-2xl font-bold w-[1280px] h-[109px]"> Explore Courses by Category</h2>
          <p className="text-center text-black p-4 ">Discover a wide range of courses covering a variety of subject, taught by expert instructors.</p>
          <div className="flex justify-center items-center ">
          <div className="flex justify-center items-center ">

          <div className="flex justify-center items-center gap-3">
          <Image className="border-r-yellow-700 sm:640px md:768px"src={"/image/Content.svg"} alt="pen_image" width={1280} height={636}></Image>
          </div>
        
        </div>
        </div>
        </div>

         <div className="flex justify-center items-center w-[1280px h-[488px]">
         <div className="flex justify-center items-center gap-3">
         <Image className="border-r-yellow-700 sm:640px md:768px"src={"/image/240.svg"} alt="icon-image" width={1280} height={636}></Image>
            </div>

            </div>
            <div className="flex justify-center items-center w-[1280px h-[488px]">
            <div className="flex justify-center items-center gap-3">
            <Image className="border-r-yellow-700 sm:640px md:768px"src={"/image/icon.svg"} alt="icone-image" width={1280} height={488}></Image>
            </div>
            </div>
            <div> 
               <h1 className="flex justify-center items-center text-2xl font-bold"> Courses</h1>
               <p className="p-9"> Your Ultimate Guide to learning</p>
               <ul className="flex justify-center items-center gap-3">
                  <li>Popular</li>
                  <li> Recommended</li>
                  <li>Best Price</li>
               </ul>
            </div>

            <div>
             <div>
               <ul className="flex justify-center items-center gap-2">
               <li><Image className="border-r-yellow-700 sm:640px md:768px"src={"/image/Row.svg"} alt="card-" width={1280} height={534}></Image></li>
               </ul>
             </div>
             </div>

             <div>
             <div>
               <ul className="flex justify-center items-center gap-2">
               <li><Image className="border-r-yellow-700 sm:640px md:768px"src={"/image/card.svg"} alt="card-" width={1280} height={534}></Image></li>
               </ul>
             </div>
             </div>

             <div className="w-[152px] h-[40px]">
            <Button variant ="outline">Button</Button>
            </div>

            <div>
               <div>
               <Image className="border-r-yellow-700 sm:640px md:768px"src={"/image/5.svg"} alt="5" width={1280} height={895}></Image>
               </div>
            </div>

            <div>
            <Image className="border-r-yellow-700 sm:640px md:768px"src={"/image/20.svg"} alt="20" width={1280} height={830.89}></Image>
            </div>

            <div>
            <Image className="border-r-yellow-700 sm:640px md:768px"src={"/image/footer.svg"} alt="footer" width={1280} height={684}></Image>
            </div>

           </div>
  )
}
          export default Hero