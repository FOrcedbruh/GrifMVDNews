import styles from './NewItem.module.css';



const NewItem: React.FC = () => {



    return (
        <article className={`${styles.article} el`}>
            <p>Новостей нет</p>
        </article>
    )
}



export default NewItem;