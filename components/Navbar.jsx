import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from "next/image"
function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width="30" height="30"/>
                </div>

                <div className={styles.texts}>
                    <div className={styles.text}>
                        Order Now!
                    </div> 
                    <div className={styles.text}>
                        010-10203040
                    </div> 
                </div>
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>
                    <Image src="/img/logo.png" width="160" height="70" alt=""/>
                    </li>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/img/cart.png" alt="" width="25" height="25"/>
                    <div className={styles.counter}>2</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
