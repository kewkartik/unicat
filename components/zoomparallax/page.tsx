"use client";

import styles from './styles.module.scss';
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'

export default function Index() {
    
    useEffect( () => {
        const lenis = new Lenis()
      
        function raf(time : any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
  
        requestAnimationFrame(raf)
    },[])
  

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710620121/IIIT%20HYD/09-min_rtdnql.jpg",
            scale: scale4
        },
        {
            src: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710598035/IIT%20HYD/IIT%20HYD%20FEST3.png",
            scale: scale5
        },
        {
            src: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710598107/IIT%20HYD/IIIT%20HYD%20FEST1.png",
            scale: scale6
        },
        {
            src: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710598231/IIT%20HYD/IIIT%20HYD%20FEST.png",
            scale: scale5
        },
        {
            src: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710598000/IIT%20HYD/IIIT%20HYD%20FEST4.png",
            scale: scale6
        },
        {
            src: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710597916/IIT%20HYD/IIIT%20HYD%20FEST%205.png",
            scale: scale8
        },
        {
            src: "https://res.cloudinary.com/dvpxkx0yf/image/upload/v1710597883/IIT%20HYD/IIIT%20HYD%20FEST5.png",
            scale: scale9
        }
    ]

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map( ({src, scale}, index) => {
                        return <motion.div key={index} style={{scale}} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                  
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}