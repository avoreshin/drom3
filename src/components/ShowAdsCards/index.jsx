import React from 'react';
import {useEffect, useState} from 'react';
import {Container, Grid, Header, Image, Rating, Segment} from "semantic-ui-react";
import './ShowAdsCards.css'


function ShowAdsCards(props) {
    const [cardItems, setCardsItems ] = useState([]);
    useEffect(() => {
        fetch(`https://avoreshin.github.io/json-api/data-json.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(data => {
                setCardsItems(data.data);
            })
            .catch(error => console.error("data-json.json loader", error));
    }, []);



    return (
        <Container
        style={{marginTop:30}}>
            {cardItems.map(item => {
                return (

                    <Segment
                    >
                        <Grid
                        columns={3}
                        >
                            <Grid.Column>
                                <Image
                                    rounded
                                    className={'Wrapper__img'}
                                    verticalAlign='middle'
                                    src={item.photo[2].url}/>
                            </Grid.Column>
                            <Grid.Column
                            >
                                <Header

                                    as='h3'
                                    color={''}
                                >
                                    <div>
                                        {item.marka}
                                        {" "}
                                        {item.model}
                                        {", "}
                                        {item.year}

                                    </div>
                                </Header>
                                    <p>
                                        {item.engine}
                                        {", "}
                                        {item.engine}
                                        {", "}
                                        <br/>
                                        {item.Mileage.toString().replace(/\s+/g, '')
                                            .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1")}{" km"}
                                    </p>



                            </Grid.Column>
                            <Grid.Column
                                className={"CardSpecPrice__price-block "}
                                stretched
                                // verticalAlign={'bottom'}
                                textAlign={'right'}
                            >

                                   <Segment basic>

                                       <h3>
                                        {item.price.toString().replace(/\s+/g, '').replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1")}{" ₽"}
                                        {" "}

                                        <Rating
                                            icon='star'
                                            size={'large'}

                                        />
                                   </h3>
                                    </Segment>
                                <Segment basic />
                                <Segment
                                    basic
                                >
                                    {item.city}
                                </Segment>
                            </Grid.Column>

                        </Grid>

                    </Segment>

                )
            })}

        </Container>
    );
}

export default ShowAdsCards;