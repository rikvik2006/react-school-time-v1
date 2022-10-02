import React, { useState, useEffect } from 'react'
import CursoreOra from './cursoreOra';
import style from "./index.module.scss";
import moment from 'moment';

function OreLateterali() {
    // const date = new Date;
    // const [hours, setHours] = useState<number>(11)
    // const [minute, setMinute] = useState<number>(11);
    const [ora, setOra] = useState<string>();
    const [oraDigitale, setOraDigitale] = useState<string>("0");
    const [ratio, setRatio] = useState<number>();

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
        const now = moment();

        const getHour = now.format("h:mm A");
        const getDigitalHour = now.format("HH:mm")
        setOra(getHour);
        setOraDigitale(getDigitalHour);

        const interval = setInterval(() => {
            const now = moment();

            const getNewHour = now.format("h:mm A");
            const getDigitalHour = now.format("HH:mm")
            setOra(getNewHour);
            setOraDigitale(getDigitalHour);
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {

        console.log("Ora digitale ruster");
        console.log(oraDigitale);
        const oraDigitaleSplit = oraDigitale?.split(":")
        const oraDigitaleNumber = oraDigitaleSplit?.map((hours: any) => Math.round(hours));
        console.log("--Ora digitale--")
        console.log(oraDigitaleNumber);

        if (oraDigitaleNumber![0] >= 14) {
            oraDigitaleNumber![0] = 14;
        }


        console.log("--Ora digitaleeee--");
        console.log(oraDigitaleNumber![0]);
        const ratio = (100 * oraDigitaleNumber![0]) / 14;

        console.log("--Ratio--");
        console.log(ratio);
        setRatio(ratio);
    }, [oraDigitale])

    // useEffect(() => {

    //     setInterval(() => {
    //         const now = moment()
    //         const nowHours = now.format("HH:mm:ss")

    //         console.log(nowHours);
    //     }, 10000)
    // }, [])



    return (
        <>
            <div className={style.containerOre}>
                <CursoreOra ora={ora} ratio={ratio} />
                <div></div>
                <div className={style.containerOra}>
                    <div className={style.ore}>8:00 AM</div>
                </div>
                <div className={style.containerOra}>
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