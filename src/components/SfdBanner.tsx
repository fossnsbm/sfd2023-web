'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

const SfdBanner = (props: Props) => {
    return (
        <div className='relative h-[200px] md:h-[350px] overflow-hidden rounded-2xl'>
            <motion.div
                className='relative h-[200px] md:h-[350px]'                 
                initial={{scale: 1.1}} 
                whileInView={{scale: 1}}
                whileHover={{scale: 1.1}}    
                transition={{duration: 0.5, delay: 0.1, ease: 'easeInOut'}}
            >
                <Image
                    src='/images/sfd-3d.png'
                    layout='fill'
                    style={{ objectFit: 'cover' }}
                    className='rounded-2xl'
                    alt='sfd banner'
                />
            </motion.div>
        </div>
    )
}

export default SfdBanner