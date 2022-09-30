import React from 'react'
import style from "./index.module.scss";
import DayContainer from "../../components/dashbaordLezioni/dayContainer";
import OreLateterali from '../../components/dashbaordLezioni/Oreattuali';

function Home() {
    return (
        <>
            <div className={style.container}>
                <OreLateterali />
                <div className={style.bigGrid}>
                    <DayContainer />
                    <div className={style.oreContainer}></div>
                    <div className={style.classContainer}></div>
                </div>
            </div>
        </>
    )
}

export default Home