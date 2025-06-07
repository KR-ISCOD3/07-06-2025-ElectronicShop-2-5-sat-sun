import React from 'react'

function Getdiscount() {
  return (
  
    <div className='container mx-auto pt-16 p-4'>
        <h1 className='text-2xl font-bold'>Get Up to 70% off</h1>
        <div className='flex flex-wrap justify-between mt-5'>
            <div className='my-3 w-full sm:w-[48%] lg:w-[24%] bg-yellow-50 rounded-lg overflow-hidden'>
                <div className='p-10'>
                    <p className='text-3xl font-bold pb-3'>Save</p>
                    <p className='text-6xl font-bold mb-4 text-yellow-500'><sup>$</sup>100</p>
                    <p className='text-xl font-medium'>Explore Our Furniture & Home Furnishing Range</p>
                </div>
                <div className='w-full h-[220px] overflow-hidden'>
                    <img src="https://t4.ftcdn.net/jpg/13/42/28/05/360_F_1342280548_HekkpzCOfCVnWuwByVVIDKZo0yBp1fkI.jpg"
                     alt=""  className='w-full h-full object-cover hover:scale-105 duration-400'/>
                </div>
            </div>

            <div className='my-3 w-full sm:w-[48%] lg:w-[24%] bg-red-100 rounded-lg overflow-hidden'>
                <div className='p-10'>
                    <p className='text-3xl font-bold pb-3'>Save</p>
                    <p className='text-6xl font-bold mb-4 text-red-500'><sup>$</sup>29</p>
                    <p className='text-xl font-medium'>Explore Our Furniture & Home Furnishing Range</p>
                </div>
                <div className='w-full h-[220px] overflow-hidden'>
                    <img src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/Nintendo%20Direct/2023/HTZmFLsf7ynX/HEGS_001_heroRARR_04_1_ST_R_ad-0"
                     alt=""  className='w-full h-full object-cover hover:scale-105 duration-400'/>
                </div>
            </div>

            <div className='my-3 w-full sm:w-[48%] lg:w-[24%] bg-orange-100 rounded-lg overflow-hidden'>
                <div className='p-10'>
                    <p className='text-3xl font-bold pb-3'>Save</p>
                    <p className='text-6xl font-bold mb-4 text-orange-500'><sup>$</sup>69</p>
                    <p className='text-xl font-medium'>Explore Our Furniture & Home Furnishing Range</p>
                </div>
                <div className='w-full h-[220px] overflow-hidden'>
                    <img src="https://t3.ftcdn.net/jpg/11/53/25/12/360_F_1153251238_sf9lTJcqAhCiQb8uSq7iTULREfYjJvt0.jpg"
                     alt=""  className='w-full h-full object-cover hover:scale-105 duration-400'/>
                </div>
            </div>

            <div className='my-3 w-full sm:w-[48%] lg:w-[24%] bg-green-100 rounded-lg overflow-hidden'>
                <div className='p-10'>
                    <p className='text-3xl font-bold pb-3'>Save</p>
                    <p className='text-6xl font-bold mb-4 text-green-500'><sup>$</sup>59</p>
                    <p className='text-xl font-medium'>Explore Our Furniture & Home Furnishing Range</p>
                </div>
                <div className='w-full h-[220px] overflow-hidden'>
                    <img src="https://wombatkeyboards.com/cdn/shop/files/WM108_GREENs_4.png?v=1739182291&width=1946"
                     alt=""  className='w-full h-full object-cover hover:scale-105 duration-400'/>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Getdiscount
