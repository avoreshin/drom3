import { useState, useEffect } from "react";
import * as React from "react";

import {
    Button, Container, Dropdown, Form, FormField, Segment, Select,
} from "semantic-ui-react";


function FormFilterMain(props) {

    const [made1, setMade1] = useState([]);
    // const [car, setCar] = useState({
    //     key: 0, text: '', count: 0, value: ''
    // });
    const car = {key: 0, text: '', count: 0, value: ''

    }
    // useEffect(() => {
    //     fetchAnn();
    // }, []);

    let marka100 = [];



    let fetchAnn = async () => {
        const data = await fetch(`https://avoreshin.github.io/json-api/data-json.json`);
        const filter = await data.json()

        setMade1(filter.result)

        let markaAll = () => {

            for (const key in filter.data) {

                marka100.push(filter.data[key].marka);

            }
        }

        markaAll();
        const count = {}
        marka100.forEach(element => {
            count[element] = (count[element] || 0) + 1;
        })
        const set = new Set(marka100.sort());
        // console.log(set.values())
        // set.forEach()
        // arr.push(set.values());
        let i = 0;
        set.forEach((key) => {
           car.key = i
            car.text = `${key}(${car.count})`
          car.value = key
            // console.log(car)
            i++;

        })
    };

    // console.log(car)
    let made = "Made / Марка";
    let count = 13;
    // console.log(car)
    fetchAnn();
    console.log(car)
    const optionMade =
    // сюда подать данные поля Марка
    [

        {key: 0, text: "Toyota(" + count + ")", value: "Toyota"},
        {key: 1, text: "Kia"},
        {key: 2, text: "Vaz"},
    ];
    return (<Container>
        <p>{made1}</p>
        <Segment placeholder>
            <Form widths={"equal"}>
                <h2>Поиск объявлений</h2>
                <Form.Group widths={24}>
                    <Select
                        selection
                        compact
                        width={9}
                        placeholder={made}
                        options={optionMade}
                    >


                    </Select>


                    <FormField width={8} control={Select} placeholder={"Модель"} />

                    <FormField width={8} control={Select} placeholder={"Поколение"} />
                </Form.Group>

                <Form.Group widths="equal">
                    <Form.Input fluid control={Select} placeholder={"Цена от"} />
                    <Form.Input fluid control={Select} placeholder={"до"} />
                    <Form.Input fluid control={Select} placeholder={"Год от"} />
                    <Form.Input fluid control={Select} placeholder={"до"} />

                    <Form.Input fluid control={Select} placeholder={"КПП"} />
                    <Form.Input fluid control={Select} placeholder={"Топливо"} />
                </Form.Group>
                <Form.Checkbox label="Только с фотографиями" />
                <Button color={"black"} type="submit">
                    Показать
                </Button>
            </Form>
        </Segment>
    </Container>);
}

export default FormFilterMain;
