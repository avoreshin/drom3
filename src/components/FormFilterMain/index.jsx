import { useState, useEffect } from "react";
import * as React from "react";

import {
    Container,
    Form,
    FormField,
    Segment,
    Select,
} from "semantic-ui-react";

function FormFilterMain({ name, setMade }) {

    const marka100 = []
    const arrMarka = [];
    const setMark = {}


    let fetchAnn = async () => {
        const data = await fetch(`https://avoreshin.github.io/json-api/data-json.json`);
        const filter = await data.json()
        Object.values(filter).map(it => {

            it.map(i => marka100.push(i.marka.replace(/["' ]/g, "")))

        })
        const count = {}
        let NumOfAllMarks = 0;
        marka100.forEach((element) => {
            count[element] = (count[element] || 0) + 1;
            if (setMark.hasOwnProperty(element.replace(/["']/g, ""))) {
                setMark[element]++
            } else {
                const key = element.replace(/["']/g, "");
                setMark[element] = 1;
            }
            NumOfAllMarks++;
        })
        arrMarka.push({
            key: 0,
            value: 'Показать все',
            count: NumOfAllMarks,
            text: `Показать все(${NumOfAllMarks})`,
        })
        Object.keys(setMark).forEach((key, index) => {
            arrMarka.push({
                key: index + 1,
                value: key,
                count: setMark[key],
                text: `${key}(${setMark[key]})`,
            })
        })
    };

    fetchAnn();
    const optionMade = arrMarka

    const [made1, setMade1] = React.useState('Марка')

    const handleChange = (_e, { value }) => {
        // console.log(value)
        if (value === 'Показать все') {
            setMade1('Марка');
        } else {
            setMade1(value);
        }
        localStorage.setItem('made', value);
    }

    const handleSubmit = (e) => {
        setMade(made1)
    }

    let optionModel;

    function toglee() {
        return made1 === "Марка";
    }

    return (<Container>
        <p>{made1}</p>
        <Segment placeholder>
            <Form onSumbit={handleSubmit} widths={"equal"}>
                <h2>Поиск объявлений</h2>
                <Form.Group widths={24}>
                    <Form.Select
                        options={optionMade}
                        placeholder={localStorage.getItem('made')|| made1 }
                        value={made1}
                        onChange={handleChange}
                    />

                    <Form.Select
                        options={optionModel}
                        placeholder={"Модель" || localStorage.getItem('made')|| made1 }
                        value={made1}
                        onChange={handleChange}
                        disabled={toglee()}
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
                    <Form.Button color={"black"} onClick={() => setMade(made1)}>

                        Показать
                    </Form.Button>
                    <Form.Button color={"grey"} onClick={() => setMade("Марка")}>

                        Показать все
                    </Form.Button>
                </Form.Group>
            </Form>
        </Segment>
    </Container>);
}

export default FormFilterMain;
