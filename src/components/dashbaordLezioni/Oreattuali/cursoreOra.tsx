import React, { FC, useState, useEffect } from 'react'
import style from "./index.module.scss";

type Props = {
    ora?: string;
}

const CursoreOra: FC<Props> = ({ ora }) => {
    // console.log(ora)


    // const hours: string = ora[0].toString();
    // const minute: string = ora[1].toString();
    // // const minute = "9";

    // console.log(minute.length);

    // const [modifiedMinute, setModifiedMinute] = useState<string>(minute);
    // const [modifiedHours, setModifiedHours] = useState<string>(minute);

    // useEffect(() => {
    //     setInterval(() => {
    //         if (minute.length < 2) {
    //             setModifiedMinute(`0${minute}`)
    //         }

    //         if (hours.length < 2) {
    //             setModifiedHours(`0${hours}`)
    //         }
    //     }, 1)
    // }, [])

    return (
        <div className={style.cursoreOra}>{ora}</div>
    )
}

export default CursoreOra