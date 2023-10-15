import React from 'react'
import { Logo_1, Logo_2, Logo_3, Logo_4, Logo_5, } from '../Asset'
import styles from '../style'

const Brand = () => {

    const brands = [
        {
            id:"1",
            img: Logo_1
        },
        {
            id:"2",
            img: Logo_2
        },
        {
            id:"3",
            img: Logo_3
        },
        {
            id:"4",
            img: Logo_4
        },
        {
            id:"5",
            img: Logo_5
        }

    ]

  return (
    <div className={` w-[100%] lg:w-[79%] ${styles.paddingX} `}>
        <ul className={`${styles.paragraph} ${styles.flexCenter} md:gap-10 gap-1 list-none md:px-2 px-4 `}>
            {
                brands.map((elem,index)=>(
                    <li 
                    key={elem.id}
                    >
                        <img
                         src={elem.img} 
                         alt='brands'
                         className='aspect-[3/2] object-contain '
                         />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Brand
