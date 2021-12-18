import Image from "next/image"
import styles from "../styles/Footer.module.css"

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>We are making the most delicious Pizza. Don't believe ? Just try!</h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Find Our Branches</h1>
                    <p className={styles.text}>
                        1533 Tahrir #222
                        <br /> Cairo, 56234
                        <br /> (+2) 624-6582 
                    </p>
                    <p className={styles.text}>
                        1533 Tahrir #222
                        <br /> Cairo, 56234
                        <br /> (+2) 624-6582 
                    </p>
                    <p className={styles.text}>
                        1533 Tahrir #222
                        <br /> Cairo, 56234
                        <br /> (+2) 624-6582 
                    </p>
                    <p className={styles.text}>
                        1533 Tahrir #222
                        <br /> Cairo, 56234
                        <br /> (+2) 624-6582 
                    </p>

                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Working Hours</h1>
                    <p className={styles.text}>
                        Saturday Until Thursday
                        <br /> 9:00 - 23:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
