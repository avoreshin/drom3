import React, {useEffect, useState} from 'react';
import "@egjs/flicking-plugins/dist/arrow.css";
import './SpecPanel.css'
import Flicking, {MoveEvent, ViewportSlot, WillChangeEvent} from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import CardSpec from "../CardSpec";

function SpecCarousel() {
    const _plugin = [new Arrow()];

    const [ cardsData, setCardsData ] = useState([]);
    useEffect(() => {
        fetch(`https://avoreshin.github.io/json-api/data-json.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(data => {
                setCardsData(data.data);
            })
            .catch(error => console.error("data-json.json loader", error));
    }, []);

    console.log(cardsData)
    return (

        <Flicking style={{marginBottom:30}}
            plugins={_plugin}
            viewportTag = "div"
            cameraTag = "div"
            align = "center"
            // onMove = {(e: MoveEvent) => {}}
            // onWillChange = {(e: WillChangeEvent) => {}}
            horizontal = {true}
            circular = {true}
        >
            {cardsData.map(item => {
                return (
                    <div className="card-panel"> <CardSpec
                        item={item}
                    /></div>
                )
            })}

            <ViewportSlot>
                <span className="flicking-arrow-prev"> </span>
                <span className="flicking-arrow-next"> </span>
            </ViewportSlot>
        </Flicking>
    );
}

export default SpecCarousel;
