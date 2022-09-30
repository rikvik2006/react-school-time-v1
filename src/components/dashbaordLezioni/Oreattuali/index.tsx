import React, { useState, useEffect } from 'react'
import CursoreOra from './cursoreOra';
import style from "./index.module.scss";
import moment from 'moment';

function OreLateterali() {
    // const date = new Date;
    // const [hours, setHours] = useState<number>(11)
    // const [minute, setMinute] = useState<number>(11);
    const [ora, setOra] = useState<string>();

    // useEffect(() => {
    //     console.log("In use effect")
    //     const interval = setInterval(() => {
    //         setHours(date.getHours());
    //         setMinute(date.getMinutes());

    //     }, 1000)

    //     return () => clearInterval(interval)
    // }, [])


    // console.log(`${hours}:${minute}`);

    useEffect(() => {
        const getHour = moment().format("h:mm A");
        setOra(getHour);

        const interval = setInterval(() => {
            const getNewHour = moment().format("h:mm A");
            setOra(getNewHour);
        }, 1000)


    }, [])


    return (
        <>
            <div className={style.containerOre}>
                <CursoreOra ora={ora} />
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