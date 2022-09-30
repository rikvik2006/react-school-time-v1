import React, { useState, useEffect } from 'react'
import CursoreOra from './cursoreOra';
import style from "./index.module.scss";

function OreLateterali() {

    const date = new Date;

    const [hours, minute] = [date.getHours(), date.getMinutes()];

    console.log(`${hours}:${minute}`);

    return (
        <>
            <div className={style.containerOre}>
                <CursoreOra />
                <div></div>
                <div className={style.containerOra}>
                    <div className={style.ore}>8:00 AM</div>
                </div>
                <div className={style.containerOra1}>
                    <div className={style.ore}>9:00 AM</div>
                </div>
                <div className={style.containerOra}>
                    <div className={style.ore}>10:00 AM</div>
                </div>
                <div className={style.containerOra}>
                    <div className={style.ore}>11:00 AM</div>
                </div>
                <div className={style.containerOra}>
                    <div className={style.ore}>12:00 AM</div>
                </div>
                <div className={style.containerOra}>
                    <div className={style.ore}>1:00 PM</div>
                </div>
                <div className={style.containerOra}>
                    <div className={style.ore}>2:00 PM</div>
                </div>
            </div>
        </>
    )
}

export default OreLateterali