import React from 'react'
import appStore from '../../assets/appStore.png';
import playStore from '../../assets/playStore.png';


const AppStore = () => {
  return (
    <>
      <div className='container py-10 sm:min-h-[400px] sm:grid
      sm:place-items-center text-white'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 data-aos="fade-up"
            className='text-2xl text-center sm:text-4xl
            font-semibold'>Get Started with our app</h1>
            <p data-aos="fade-up"
                data-aos-delay="300"
            className='text-center sm:px-20'>Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been the
                 industry's standard dummy text ever.</p>
                 <div className='flex flex-wrap justify-center gap-4 items-center'>
                    <a href="#" data-aos="fade-up"
                data-aos-delay="500">
                        <img src={appStore} alt="" className='max-w-[150px]
                        sm:max-w-[120px] md:max-w-[200px]'/>
                    </a>
                    <a href="#" data-aos="fade-up"
                data-aos-delay="700">
                        <img src={playStore} alt="" className='max-w-[150px]
                        sm:max-w-[120px] md:max-w-[200px]'/>
                    </a>
           </div>
        </div>
      </div>
    </>
  )
}

export default AppStore
