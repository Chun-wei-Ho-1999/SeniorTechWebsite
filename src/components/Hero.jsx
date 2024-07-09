import styles from '../style'
import { people03, intro } from '../assets'
import GetStarted from './GetStarted'


const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-prompt-gradient rounded-[10px] mb-2'>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-violet-600'> Special Care </span> for {" "}
            <span className='text-violet-600'> Senior People </span> and 
            <span className='text-violet-600'> Disabled </span>
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]'>
            The Next <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>Generation</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-black ss:leading-[100px] leading-[75px] w-full'>
          Senior Technology
        </h1>
        <p className={`${styles.paragraph} max-w-[750px] mt-5`}>
        Our team of experts uses a methodology to identify the technology most likely to care your body. 
        We provide extra comfort and extra conveniences.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={intro}
          alt='billing'
          className='w-[80%] h-[80%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero
