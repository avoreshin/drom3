import React from 'react';
import './CardSpec.css';
import {Card, Header, Icon, Image} from "semantic-ui-react";
import {type} from "@testing-library/user-event/dist/type";
import {Link} from "react-router-dom";

function CardSpec(props) {

    const { item } = props;
    let { photo, marka, city, price, model, year } = item;

    year = year.toString().substr(0,4)

    price = price.toString().replace(/\s+/g, '')
        .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');

console.log({item});

    return (
        <>
            <Card link={"#"}
                color={'olive'}
                centered
                >
                    <Image className={"CardSpecImg"} src={photo[0].url} alt={photo.alt}/>
            <div className={"CardSpecPrice"}> {price} <Icon name={'rub'}/></div>
                <Card.Content>
                <div className={"CardSpecTitle"}><Icon name={'car'}/>
                    {marka}{' '}{model}{' '}{year}

                </div>
            <Card.Meta extra>

                <Icon name={'map marker alternate'}/>{city}

            </Card.Meta>
                </Card.Content>
            </Card>

        </>
    );
}

export default CardSpec;