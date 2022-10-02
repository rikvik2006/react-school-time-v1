import React, { FC } from 'react'
import style from "./index.module.scss";

const DayContainer: FC = () => {
    return (
        // <div className={style.daysContainer}>
        <>
            <div className={style.dayContainer}>
                <div className={style.subDayContainer}>
                    <div className={style.nameDay}>Lun</div>
                    <div className={style.day}>1</div>
                </div>
            </div>
            <div className={style.dayContainer}>
                <div className={style.subDayContainer}>
                    <div className={style.nameDay}>Mar</div>
                    <div className={style.day}>2</div>
                </div>
            </div>
            <div className={style.dayContainer}>
                <div className={style.subDayContainer}>
                    <div className={style.nameDay}>Mer</div>
                    <div className={style.day}>3</div>
                </div>
            </div>
            <div className={style.dayContainer}>
                <div className={style.subDayContainer}>
                    <div className={style.nameDay}>Gio</div>
                    <div className={style.day}>4</div>
                </div>
            </div>
            <div className={style.dayContainer}>
                <div className={style.subDayContainer}>
                    <div className={style.nameDay}>Ven</div>
                    <div className={style.day}>5</div>
                </div>
            </div>
            <div className={style.dayContainer}>
                <div className={style.subDayContainer}>
                    <div className={style.nameDay}>Sab</div>
                    <div className={style.day}>6</div>
                </div>
            </div>
        </>
        // </div>
    )
}

export default DayContainer