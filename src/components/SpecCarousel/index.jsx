import React from 'react';
import "@egjs/flicking-plugins/dist/arrow.css";
import './SpecPanel.css'
import Flicking, {MoveEvent, ViewportSlot, WillChangeEvent} from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import CardSpec from "../CardSpec";

function SpecCarousel(props) {
    const _plugin = [new Arrow()];
    return (

    <Flicking
        plugins={_plugin}
        viewportTag = "div"
        cameraTag = "div"
        align = "center"
        onMove = {(e: MoveEvent) => {}}
        onWillChange = {(e: WillChangeEvent) => {}}
        horizontal = {true}
        circular = {true}
    >
        <div className="card-panel">1<CardSpec/></div>
        <div className="card-panel">2<CardSpec/></div>
        <div className="card-panel">3<CardSpec/></div>
        <div className="card-panel">4<CardSpec/></div>
        <div className="card-panel">5<CardSpec/></div>
        <div className="card-panel">6<CardSpec/></div>
        <div className="card-panel">7<CardSpec/></div>
        <div className="card-panel">8<CardSpec/></div>
        <div className="card-panel">9<CardSpec/></div>
        <ViewportSlot>
            <span className="flicking-arrow-prev"></span>
            <span className="flicking-arrow-next"></span>
        </ViewportSlot>
    </Flicking>
    );
}

export default SpecCarousel;
