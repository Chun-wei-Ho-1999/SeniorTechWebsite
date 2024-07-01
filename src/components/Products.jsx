import React from 'react'
import { products } from '../constants'
import styles from '../style'

const Products = () => {
  return (
    <section id='products' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>Our best inventions</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            These inventions represent our goal and achievements.
          </p>  
        </div>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]'>
        {products.map((card) => (
          <Product key={card.id} {...card}/>        
        ))}
      </div>      
    </section>
  )
}

const Product = ({ description, title, img }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white mb-10'>
        {description}
      </p>
      <div className='flex flex-row'>
        <img
          src={img}
          alt={title}
          className='w-[48px] h-[48px] rounded-full'
        />
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-white'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Products
