import React from 'react';

import styles from './NotFoundBlock.module.scss';


console.log(styles);
function NotFoundBlock() {
    return (
        <div className={styles.root}>
            <img

                width={120} height={120}
                src="../img/smile.png" alt="smile"
            />

            <h1>Нічого не знайденно :(</h1>
            <p>Нажаль такої сторінки немає</p>
        </div>

    )
}

export default NotFoundBlock;