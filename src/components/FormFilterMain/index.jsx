import { useState, useEffect } from "react";
import * as React from "react";

import {
    Button, Container, Dropdown, Form, FormField, Segment, Select,
} from "semantic-ui-react";
import { renderIntoDocument } from "react-dom/test-utils";

function FormFilterMain({ name, setName }) {

    const [made1, setMade1] = useState([]);
    const marka100 = []
    const arr = [];
    const car = {
        key: 0, text: '', count: 0, value: ''
    }
    const setMark = {}

    let fetchAnn = async () => {
        const data = await fetch(`https://avoreshin.github.io/json-api/data-json.json`);
        const filter = await data.json()
        // setMade1(filter.result)
        Object.values(filter).map(it => {

            it.map(i => marka100.push(i.marka.replace(/["' ]/g, "")))

        })
        const count = {}
        marka100.forEach((element) => {
            count[element] = (count[element] || 0) + 1;
            if (setMark.hasOwnProperty(element.replace(/["']/g, ""))) {
                setMark[element]++
            } else {
                const key = element.replace(/["']/g, "");
                setMark[element] = 1;
            }
        })

        Object.keys(setMark).forEach((key, index) => {
            arr.push({
                key: index,
                value: key,
                count: setMark[key],
                text: `${key}(${setMark[key]})`,
            })
        })
        // console.log(arr);

        // hadlChange = (e, {})
    };

    let count = 13;
    fetchAnn();
    const optionMade = arr


    const [name1, setName1] = React.useState('Марка')

    const handleChange = (_e, { value }) => {
        setName1(value)
    }

    const handleSubmit = (e) => {
        console.log("±!!!!");
        setName(name1)
        console.log("±!!!!");
    }


    // const handleChange = (event) => {
    //     const [name, value] = event.target;
    //     setName((prevState) => {
    //         return {
    //     //         ...prevState,
    //             [name]: value
    //         }
    //     })
    // }

    return (<Container>
        <p>{made1}</p>
        <Segment placeholder>
            <Form onSumbit={handleSubmit} widths={"equal"}>
                <h2>Поиск объявлений</h2>
                <Form.Group widths={24}>
                    <Form.Select
                        options={optionMade}
                        placeholder={name1}

                        // name='name'
                        value={name1}
                        onChange={handleChange}
                    // onSumbit = {handleSubmit}
                    // name="marka"
                    // value={ }
                    // control={Select}
                    // width={8}
                    // placeholder={made}
                    // options={optionMade}
                    // onChange={this.hadlChange}

                    />


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

                <Form.Group>
                    <Form.Button color={"black"} onClick={() => setName(name1)}>

                        Показать
                    </Form.Button>
                    <Form.Button color={"grey"} onClick={() => setName("")}>

                        Показать все
                    </Form.Button>
                </Form.Group>
            </Form>
        </Segment>
    </Container>);
}

export default FormFilterMain;
