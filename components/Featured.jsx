import styles from "../styles/Featured.module.css"
import Image from "next/image"
import { useState } from "react"

function Featured() {
    const [index, setIndex] = useState(0)

    const images = [
        "/img/header2.jpg",
        "/img/header3.jpg",
        "/img/header1.jpg",
    ]

    const handleArrow = (direction) => {
        if(direction === "l") {
            setIndex(index !== 0 ? index - 1 : 0 )
        }
        if(direction === "r") {
            setIndex(index !== 2 ? index + 1 : 2 )
        }
    }
  
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleArrow("l")}>
                <div className={styles.arrowWrapper}>
                    <Image src="/img/arrowl.png" layout="fill" objectFit="contain" className={styles.arrow} />
                </div>
            </div>
            <div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)`}}>
                    { images.map((image, i) => (
                        <div className={styles.imgContainer} key={i} >
                                <Image src={image} alt="featured image" layout="fill" objectFit="cover" />
                        </div>
                    ))
                }
            </div>
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrow("r")}>
                <div className={styles.arrowWrapper}>
                    <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" className={styles.arrow}/>
                </div>
            </div>
        </div>
    )
}

export default Featured
