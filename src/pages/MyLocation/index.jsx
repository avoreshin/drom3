import React, {useState} from 'react';
import MenuMain from "../../components/MenuMain";
import {Button, Container} from "semantic-ui-react";
// import {Button} from "semantic-ui-react";

function Mylocation() {


    const [location, setLocation] = useState("Ваш регион")

    const handleChange =(value) =>{
        setLocation("Kazan")
    }
   console.log({location});


    return (
        <>
            <MenuMain location = {location}/>
            <Container>


                <h2> Выбор региона </h2>
                <h2>{location}</h2>


                <Button color={'red'}
                    onClick={handleChange}
                >
                    Kazan
                </Button>
            </Container>
        </>
    );
}

export default Mylocation;