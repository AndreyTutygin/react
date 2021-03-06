import { useState } from "react";
import styles from './Paginator.module.css';

const Paginator = ({totalItemCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    const pagesCount = Math.ceil(totalItemCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize + 1;

    return (
        <div className={styles.pages}>
            { portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}} >prev</button> }
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={`${styles.page} ${currentPage === p && styles.page_selected}`} key={p} onClick={(e) => {onPageChanged(p);}}>{p}</span>})}
            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}} >next</button>}
        </div>
    )
}

export default Paginator;