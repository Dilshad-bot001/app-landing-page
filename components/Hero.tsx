import React from 'react'
import Image from 'next/image'

import ArrowLeft from '@/public/arrowLeft.svg'
import PlayButton from '@/public/playButton.svg'
import Strip from '@/public/strip.svg'
import Gradient1 from '@/public/gradient1.svg'
import MobileMockup from '@/public/mobileMockup.svg'
import ThreeElipse from '@/public/threeElipse.svg'
import Star from '@/public/star.svg'

type Props = {
  data: {
    headline: string;
    subheadline: string;
    ctaButtons: {
      text: string;
      link: string;
    }[];
  }
};

const Hero: React.FC<Props> = ({ data }) => {
  return (
    <section className='relative mt-6 flex flex-col items-center xl:flex-row xl:ml-56'>
      <div className=''>
        <Image src={Star} alt='star' className='w-8 h-8 absolute -left-[30px] -top-[60px] -rotate-45 xl:-left-[130px] xl:-top-[10px]' />
        <Image src={Gradient1} alt='gradient' className='w-64 h-64 absolute -z-10 -top-[110px] left-[100px] xl:w-[317px] xl:h-[230px] xl:-top-[20px] xl:left-[200px]' />
        <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-[64px]'>{data.headline}</h1>
        <p className='text-lg font-medium mb-5 mt-2 md:text-xl lg:text-2xl xl:text-[28px] xl:my-6'>{data.subheadline}</p>
        <div>
          <div className='flex mb-4'>
            <button className='w-[120px] h-[40px] bg-black rounded-[4px] text-sm text-white font-medium flex justify-center items-center gap-1 lg:w-40 lg:h-12'>
              Download
              <Image src={ArrowLeft} alt='arrow-left' />
            </button>
            <button className='w-[120px] h-[40px] bg-transparent rounded-[4px] text-sm text-black font-medium flex justify-center items-center gap-2 ml-4 lg:w-40 lg:h-12'>
              <Image src={PlayButton} alt='play-button' />
              Watch Video
            </button>
          </div>
          <div className='relative'>
            <Image src={Star} alt='star' className='w-8 h-8 absolute left-[70px] top-[20px] -rotate-45' />
            <Image src={Strip} alt='strip' />
          </div>
        </div>
      </div>
      <div className='relative'>
        <Image src={MobileMockup} alt='mobile-mockup' />
        <Image src={ThreeElipse} alt='three-elipse' className='absolute -z-10 -top-[10px] left-[10px]' />
        <Image src={Gradient1} alt='gradient' className='absolute -z-20 top-[120px] left-[10px] rotate-180 xl:top-[280px] xl:left-[20px]' />
        <Image src={Star} alt='star' className='w-8 h-8 absolute top-[290px] left-[60px] xl:top-[590px] xl:left-[150px]' />
      </div>
    </section>
  )
}

export default Hero