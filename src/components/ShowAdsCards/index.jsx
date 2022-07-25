import React from "react";
import {useEffect, useState} from "react";
import styled from 'styled-components/macro'
import {
    Container,
    Grid,
    Header,
    Image,
    Rating,
    Segment,
} from "semantic-ui-react";
import "./ShowAdsCards.css";
import {Link} from "react-router-dom";

function ShowAdsCards({filterMarka, made}) {

    const [cardItems, setCardsItems] = useState([]);
    useEffect(() => {
        fetch(`https://avoreshin.github.io/json-api/data-json.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then((data) => {
                // const tmp = cardItems;
                console.log(data.data);
                console.log('this', localStorage.getItem('made') )
                made =  localStorage.getItem('made')
                if (made === '' || made === 'Марка' || made === 'Все' ) {
                    setCardsItems(data.data);
                } else {

                    setCardsItems(data.data.filter(i => i.marka.replace(' ', '') === made))
                }
            })
            .catch((error) => console.error("data-json.json loader", error));
    }, [made]);

    return (
        <Container>
            {cardItems.map((item, i) => {
                return (
                    <Segment
                        basic
                        key={i}
                        css={`
                          height: 220px;
                          width: 926px;
                        `
                        }>
                        <a key={item.id} href={`/announcementId/${item.id}`} css={`display: flex;
                          padding: 20px;

                          &:hover {
                            border-radius: 10px;
                            background: rgba(236, 227, 211, 0.75);
                          }
                        `}>

                            <div css={`
                              flex: 0 0 240px;
                              margin-right: 40px;
                            `}>
                                <Image
                                    css={`
                                      background-image: url(${item.photo[2].url});
                                      background-position: center center;
                                      background-size: cover;
                                      height: 180px;
                                      width: 240px;
                                      overflow: hidden;
                                      border-radius: 6px;
                                      position: relative;
                                    `}
                                />
                            </div>
                            <div css={` flex: 0 1 406px;
                              margin-right: 40px;;
                              min-width: 264px`}>
                                <Header as="h3" color={""}>
                                    <div>
                                        {item.marka} {item.model}
                                        {", "}
                                        {item.year}
                                    </div>
                                </Header>
                                <p>
                                    {item.engine}
                                    {", "}
                                    {item.transmission}
                                    {", "}
                                    {item.body_type}
                                    <br/>
                                    {item.Mileage.toString()
                                        .replace(/\s+/g, "")
                                        .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1 ")}
                                    {" км"}
                                </p>
                            </div>
                            <div css={`flex: 280px`}
                                 className={"CardSpecPrice__price-block "}
                            >
                                <Segment basic>
                                    <h3>
                                        {item.price
                                            .toString()
                                            .replace(/\s+/g, "")
                                            .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1 ")}
                                        {" ₽"} <Rating icon="star" size={"large"}/>
                                    </h3>
                                </Segment>
                                <Segment basic/>
                                <Segment basic>{item.city}</Segment>
                            </div>

                        </a>
                    </Segment>
                )
                    ;
            })}
        </Container>
    );
}

export default ShowAdsCards;
