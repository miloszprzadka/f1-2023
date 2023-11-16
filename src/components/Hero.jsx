import React from 'react'
import {Carousel} from 'flowbite'

const Hero = () => {
  return (
    <div className='flex overscroll-auto'>
        {/* <div className="w-[45%] absolute left-20 h-[85%] bg-senna rounded-xl opacity-70"/> */}
        
        {/* <div id="default-carousel" class="relative w-[45%]" data-carousel="slide">
            <div class="w-[45%] relative left-20 h-[85%] rounded-xl opacity-70">
                <div class="hidden duration-500 ease-in-out" data-carousel-item>
                    <img src="src/assets/testsenna.jpg" class="" alt="..."/>
                </div>

                <div class="hidden duration-500 ease-in-out" data-carousel-item>
                    <img src="src/assets/testsenna.jpg" class="" alt="..."/>
                </div>
            </div>
        </div> */}


        
        <div id="default-carousel" class="relative w-[45%]" data-carousel="slide">
            <div class="relative 3xl:h-[1000px] 2xl:h-[700px] overflow-hidden rounded-lg">
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="src/assets/brazil.webp" class="absolute block w-[1000px] 2xl:w-[70%] xl:hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-70 rounded-xl" alt="..."/>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="src/assets/hamilton2008.jpg" class="absolute block w-[1000px] 2xl:w-[70%] xl:hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-70 rounded-xl" alt="..."/>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="src/assets/massa2008.jpg" class="absolute block w-[1000px] 2xl:w-[70%] xl:hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-70 rounded-xl" alt="..."/>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="src/assets/alonso2012.webp" class="absolute block w-[1000px] 2xl:w-[70%] xl:hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-70 rounded-xl" alt="..."/>
                </div>
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src="src/assets/testsenna.jpg" class="absolute block w-[1000px] 2xl:w-[70%] h-[900px] 2xl:h-[500px] xl:hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-70 rounded-xl" alt="..."/>
                </div>
            </div>

            {/* <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>

            <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button> */}
        </div>

        
        <div className='w-[55%] absolute right-0 h-[85%] mt-10 text-center flex flex-col align-middle xl:w-[100%] sm:m-0'>
            <h1 className='3xl:text-9xl 2xl:text-7xl sm:text-6xl'>Sao Paulo Grand Prix</h1>
            <h2 className='3xl:text-7xl 2xl:text-5xl sm:text-4xl'>03-05 November</h2>
            <div className='3xl:text-6xl 2xl:text-4xl sm:text-3xl pt-10 leading-loose'>
                <div className='leading-none mb-10'>
                   <p>Race</p>
                    <span className='3xl:text-2xl 2xl:text-xl sm:text-lg'>SUN 19:30 CET</span> 
                </div>
                <div className='leading-none mb-10'>
                   <p>Sprint</p>
                    <span className='3xl:text-2xl 2xl:text-xl sm:text-lg'>SAT 19:30 CET</span> 
                </div>
                <div className='leading-none mb-10'>
                   <p>Sprint Shootout</p>
                    <span className='3xl:text-2xl 2xl:text-xl sm:text-lg'>SAT 15:00 CET</span> 
                </div>
                <div className='leading-none mb-10'>
                   <p>Qualifying</p>
                    <span className='3xl:text-2xl 2xl:text-xl sm:text-lg'>19:00 CET</span> 
                </div>
                <div className='leading-none'>
                   <p>Practice 1</p>
                    <span className='3xl:text-2xl 2xl:text-xl sm:text-lg'>15:30 CET</span> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero