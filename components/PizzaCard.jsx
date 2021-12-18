import Image from "next/image"
import styles from "../styles/PizzaCard.module.css"

function PizzaCard() {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="500" height="500" />
            <h1 className={styles.title}>Margherita Pizza</h1>
            <span className={styles.price}>$20.00</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quo.
            </p>
        </div>
    )
}

export default PizzaCard
