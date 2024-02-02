import styles from './page.module.css';
import NewItem from '@/components/NewItem/NewItem';



const HomePage: React.FC = () => {




  return (
    <section className={styles.window}>
      <NewItem />
    </section>
  )
}




export default HomePage;