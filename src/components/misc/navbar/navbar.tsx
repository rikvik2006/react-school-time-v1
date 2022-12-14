import { FC } from 'react'
import style from "./index.module.scss";

type Props = {}


const NavBarComponent: FC<Props> = () => {
    return (
        <div className={style.container}>
            <div className={style.logoContainer}>
                <img src={"https://imgur.com/h7zNfez.png"} alt="logo" className={style.logo}></img>
            </div>
        </div >
    )
}

export default NavBarComponent