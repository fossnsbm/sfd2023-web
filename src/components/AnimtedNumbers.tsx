"use client"

import React, { useEffect, useRef } from 'react'
import { useMotionValue, useSpring, useInView } from 'framer-motion'

const AnimatedNumbers = ({ value }: any) => {
    const ref = useRef<HTMLDivElement>(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 4000 })
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <h3 ref={ref} className='sm:text-6xl text-5xl font-medium text-white font-mono'></h3>
}

export default AnimatedNumbers