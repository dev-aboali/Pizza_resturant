import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"
function PizzaList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>The best Pizza on the planet</h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam iure cumque non sint maiores corrupti laudantium enim aspernatur et!
            </p>
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    )
}

export default PizzaList
