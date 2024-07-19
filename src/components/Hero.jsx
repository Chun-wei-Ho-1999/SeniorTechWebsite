import styles from '../style'
import { people03, intro } from '../assets'
import OurStoryButtonCircle from './OurStoryButtonCircle'
import MainPageSlides from './MainPageSlides'


const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-green-faded rounded-[10px] mb-2'>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-black'> Special Care </span> for {" "}
            <span className='text-black'> Senior People </span> and 
            <span className='text-black'> Disabled </span>
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]'>
            The Next <br className='sm:block hidden'/> {" "}
            <span className='text-black'>Generation</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <OurStoryButtonCircle/>
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full'>
          Senior Technology
        </h1>
        <p className={`${styles.paragraph} max-w-[750px] mt-5`}>
        Our team of experts employs a specialized methodology to identify the most effective technology for caring for your body, delivering superior comfort and added convenience
        </p>
      </div>
      <MainPageSlides/>
    </section>
  )
}

export default Hero
