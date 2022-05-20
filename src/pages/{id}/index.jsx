import React, {useState} from 'react';
import {Container, Image} from "semantic-ui-react";
import AnnouncementId from "../AnnouncementId";

function Announcement(marka) {
    return (

        <Container>

            <h2 style={{margin:20}}>  Объявление {marka} </h2>
            <div style={{display: "flex" }}>

                <div style={{background:"red", flex:'0 0 60%' }}>

                </div>
                <div style={{background:"blue", flex: '1 1 auto'}}> aaaeweqewqeqwewqea </div>
                <div style={{background:"red", flex: '0 0 240px'}}> aaaa </div>
            </div>


        </Container>


    );
}
export default Announcement;