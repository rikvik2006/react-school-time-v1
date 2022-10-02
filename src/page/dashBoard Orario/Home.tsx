import React, { useState, useEffect } from 'react'
import style from "./index.module.scss";
import DayContainer from "../../components/dashbaordLezioni/dayContainer";
import OreLateterali from '../../components/dashbaordLezioni/Oreattuali';
import CardOraLezione from '../../components/dashbaordLezioni/CardOraLezione';
import moment from 'moment';
import { HourContent, hoursContent } from '../../utils/types';
import MoreDettailsClass from '../../components/dashbaordLezioni/MoreDettailsClass';
import { HandleClickOpen } from '../../utils/helpers/handleClick';

function Home() {

    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam expedita neque cum beatae officia incidunt modi voluptatem soluta, distinctio voluptates impedit eligendi amet qui, fuga perferendis nisi ratione fugiat!"

    const lorem2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam expedita neque cum beatae officia incidunt modi voluptatem soluta, distinctio voluptates impedit eligendi amet qui, fuga perferendis nisi ratione fugiat!\nLorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam expedita neque cum beatae officia incidunt modi voluptatem soluta, distinctio voluptates impedit eligendi amet qui, fuga perferendis nisi ratione fugiat!"

    // const [dettails, setDettails] = useState<HourContent>()

    // const getDettails = (dettails: HourContent) => {
    //     setDettails(dettails);
    //     console.log("--HoursContent--");
    //     console.log(dettails);
    // }

    // const InterceptClick = (content: HourContent) => {
    //     console.log("--HoursContent--");
    //     console.log(content);
    //     getDettails(content)
    //     HandleClickOpen();
    // }

    const test = {
        id: "3",
        name: "test",
        emoji: "🖥️",
        tags: ["test"],
        note: "Applicazione dei concetti spiegati nell ora precedente",
        description: "Postazione 2, utente: PinoPagliaccio, password: 1234... ma se metto un 5",
        created: `Creato ${moment().format("DD/MM/y")}`
    }

    const [state, setState] = useState<HourContent>();

    const handleCallback = (childData: HourContent) => {
        setState(childData);
    }

    return (

        <>
            <div className={style.container}>
                <OreLateterali />
                <div className={style.bigGrid}>
                    <>
                        <DayContainer />
                        {/* <div className={style.oreContainer}></div>
                    <div className={style.classContainer}></div> */}
                        {
                            hoursContent.map((hourContent) => (
                                <CardOraLezione hourContent={hourContent} key={hourContent.id} parentCallback={handleCallback} />
                            ))
                        }
                    </>
                </div>
            </div>
            <MoreDettailsClass HourContent={state} />
        </>
    )
}

export default Home