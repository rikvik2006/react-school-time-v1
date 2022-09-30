import React, { FC } from 'react'
import style from "./index.module.scss";

type Props = {
    ore: any;
}

const CursoreOra: FC<Props> = ({ ore }) => {

    console.log(ore)

    return (
        <div className={style.cursoreOra}>00:00 AM</div>
    )
}

export default CursoreOra