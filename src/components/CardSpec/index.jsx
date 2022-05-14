import React from 'react';
import bmw from './../../images/bmw_5_2014.png';
import './CardSpec.css';

function CardSpec(props) {

    // let item = [id, name] = props;

    return (
        <>
            <img className={"CardSpecImg"} src={bmw} alt="bmw"/>
        </>
    );
}

export default CardSpec;