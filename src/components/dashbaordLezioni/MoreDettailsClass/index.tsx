import React, { FC, useEffect, useState } from 'react'
import { HourContent } from '../../../utils/types';
import style from "./index.module.scss";
import { TbList, TbCalendar, TbNote } from "react-icons/tb"
import { CgCloseR } from "react-icons/cg";
import { HandleClickClose } from '../../../utils/helpers/handleClick';


type Props = {
    HourContent?: HourContent;
}

const MoreDettailsClass: FC<Props> = ({ HourContent }) => {
    const [x, setX] = useState<number>(150);

    // setTimeout(() => {
    //     console.log("Showing...")
    //     setX(-46)
    // }, 5000)


    //style={{ transform: `translate(-50%, ${x}%)` }}
    return (
        <div id={style.modal} className="open">
            <div className={style.container}>
                <div className={style.top}>
                    <div className={style.emoji}>{HourContent?.emoji}</div>
                    <CgCloseR id={style.close} className={style.icon} onClick={HandleClickClose} />
                </div>
                <div className={style.nome}>{HourContent?.name}</div>
                <div className={style.props}>
                    <div className={style.iconDescription}>
                        <TbList className={style.icon} />
                        <span>Tags</span>
                    </div>
                    <div className={style.tag}>
                        {HourContent?.tags.map(tag => (
                            <div>{tag}</div>
                        ))}
                    </div>
                </div>
                <div className={style.props}>
                    <div className={style.iconDescription}>
                        <TbCalendar className={style.icon} />
                        <span>Creato</span>
                    </div>
                    <div className={style.tag}>{HourContent?.created}</div>
                </div>
                <hr className="hr" />
                <div className={style.props}>
                    <div className={style.iconDescription}>
                        <TbNote className={style.icon} />
                        <span>Note</span>
                    </div>
                    <div className={style.note}>{HourContent?.note}</div>
                </div>
                <hr className="hr" />
                <div className={style.description}>
                    <h2 className="h2">Description</h2>
                    <p>{HourContent?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default MoreDettailsClass