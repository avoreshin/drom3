import {useState, useEffect} from "react";
import * as React from "react";

import {
    Button,
    Container, Dropdown,
    Form,
    FormField,
    Segment,
    Select,
} from "semantic-ui-react";

const marka = "marka";
let setPost;

// useEffect(() => {
fetch(`https://avoreshin.github.io/json-api/data-json.json`)
    .then((res) => res.json())
    // .then(data => console.log(data.data[0].marka))
    .then(data => {
        const x = Object.keys(data.data)
            .filter(key => marka.includes(key))
            .reduce((obj, key) => {
                obj[key] = data[key]
            //     return obj;
            }, {})
        console.log(x)

    })
// .then((data) => setPost(data));

// }, []);

// console.log(post);


function FormFilterMain(props) {
    let made = "Made / Марка"
    let count = 13;
    const optionMade = //сюда подать данные поля Марка
        [
            {key: 0, text: 'Toyota(' + count + ')', value: "Toyota"},
            {key: 1, text: 'Kia'},
            {key: 2, text: "Vaz"}

        ]
    return (
        <Container>
            <Segment placeholder>
                <Form widths={"equal"}>
                    <h2>Поиск объявлений</h2>
                    <Form.Group widths={24}>
                        <Dropdown
                            selection
                            options={optionMade}
                            compact
                            width={9} placeholder={made}/>


                        <FormField width={8} control={Select} placeholder={"Модель"}/>

                        <FormField width={8} control={Select} placeholder={"Поколение"}/>
                    </Form.Group>

                    <Form.Group widths="equal">
                        <Form.Input fluid control={Select} placeholder={"Цена от"}/>
                        <Form.Input fluid control={Select} placeholder={"до"}/>
                        <Form.Input fluid control={Select} placeholder={"Год от"}/>
                        <Form.Input fluid control={Select} placeholder={"до"}/>

                        <Form.Input fluid control={Select} placeholder={"КПП"}/>
                        <Form.Input fluid control={Select} placeholder={"Топливо"}/>
                    </Form.Group>
                    <Form.Checkbox label="Только с фотографиями"/>
                    <Button color={"black"} type="submit">
                        Показать
                    </Button>
                </Form>
            </Segment>
        </Container>
    );
}

export default FormFilterMain;
