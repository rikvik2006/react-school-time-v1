import React from "react";
import CardOraLezione from "../../components/dashbaordLezioni/CardOraLezione";
import MoreDettailsClass from "../../components/dashbaordLezioni/MoreDettailsClass";
import style from "../../components/dashbaordLezioni/MoreDettailsClass/index.module.scss";

export const HandleClickOpen = () => {
    // event.preventDefault();
    console.log("Click")
    console.log(document.getElementById(style.modal))
    document.getElementById(style.modal)!.style.transform = "translate(-50%, -46%)";
}

export const HandleClickClose = (event: React.MouseEvent<SVGAElement>) => {
    // event.preventDefault();
    document.getElementById(style.modal)!.style.transform = "translate(-50%, 50%)";
}