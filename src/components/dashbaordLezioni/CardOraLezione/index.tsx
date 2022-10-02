import React, { FC, useState, useEffect } from 'react'
import { HourContent } from '../../../utils/types';
import style from "./index.module.scss";
import pointer from "../../../assets/pointer.svg";
import { HandleClickOpen } from '../../../utils/helpers/handleClick';
import MoreDettailsClass from '../MoreDettailsClass';
import moment from "moment";

type Props = {
    hourContent: HourContent;
    parentCallback: any;
}

const CardOraLezione: FC<Props> = ({ hourContent, parentCallback }) => {
    const [hourNote, setHourNote] = useState<string>();

    useEffect(() => {
        if (hourContent.note.length > 27) {
            setHourNote(hourContent.note.substring(0, 28) + "...");
        } else {
            setHourNote(hourContent.note)
        }
    }, [])

    // const showModalDescription = () => {
    //     console.log("Cliccato");
    //     console.log(document.getElementById("modal"));
    //     document.getElementById(style.modal)!.style.transform = "translate(-50%, -46%)"
    // }


    // const [dettails, setDettails] = useState<HourContent>()


    // const getDettails = (dettails: HourContent) => {
    //     setDettails(dettails);
    //     console.log("--HoursContent--");
    //     console.log(dettails);
    // }


    const onTringger = () => {
        parentCallback(hourContent);
    }

    const InterceptClick = () => {
        onTringger()
        HandleClickOpen();
    }

    return (
        <>
            <div className={style.container} onClick={InterceptClick}>
                {/* <span className={style.emoji}>{hourContent.emoji}</span>  */}
                <span className={style.name}>{hourContent.name}</span>
                <div className={style.tagsContainer}>{hourContent.tags.map((tag) => (
                    <span className={style.tag}>{tag}</span>
                ))}</div>


                <div className={style.note}>
                    <div className={style.content}>
                        <div>{hourNote}</div>
                        <img src={pointer} alt="pointaer" />
                    </div>
                </div>
                <div className={style.created}>{hourContent.created}</div>
            </div>
            {/* {dettails && <MoreDettailsClass HourContent={dettails} />} */}
        </>
    )
}

export default CardOraLezione