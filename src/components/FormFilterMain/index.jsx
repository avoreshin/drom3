import {useState, useEffect} from "react";
import * as React from "react";
import styled from 'styled-components/macro'

import {
    Container,
    Form,
    FormField,
    Segment,
    Select,
} from "semantic-ui-react";
import {Input} from "antd";

function FormFilterMain({name, setMade}) {

    const marka100 = []
    const arrMarka = [];
    const setMark = {}

    const model100 = []
    const arrModel = []
    const setMod = {}
    const [made1, setMade1] = React.useState('Марка')
    const [model1, setModel1] = React.useState('Модель')

    let fetchAnn = async () => {
        const data = await fetch(`https://avoreshin.github.io/json-api/data-json.json`);
        const filter = await data.json()

        Object.values(filter).map(it => {
            it.map(i => marka100.push(i.marka.replace(/["' ]/g, "")))
        })

        Object.values(filter).map(it => {
            it.map(i => model100.push(i.model.replace(/["' ]/g, "")))
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
            value: 'Все',
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
        Object.keys(setMod).forEach((key, index) => {
            arrModel.push({
                key: index + 1,
                value: key,
                count: setMod[key],
                text: `${key}(${setMod[key]})`,
            })
        })
    };

    fetchAnn();
    const optionMade = arrMarka

    const handleChange = (_e, {value}) => {

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

    let optionModel = arrModel;

    const handleChangeModel = (_e, {value}) => {

        if (value === 'Все') {
            setModel1('Марка');
        } else {
            setModel1(value);
        }
        localStorage.setItem('model', value);
    }

    function toglee() {
        return made1 === "Марка";
    }

    return (<Container>
        {/*<p>{made1}</p>*/}

        <Segment placeholder
                 css={`
                   width: 926px;

                 `}>
            <Form onSumbit={handleSubmit}>
                <h2>Поиск объявлений</h2>
                <div css={`
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 20px`}>
                    <Select css={`width: 100%;
                      margin-right: 10px`}
                            select
                            options={optionMade}
                            placeholder={localStorage.getItem('made') || made1}
                            value={made1}
                            onChange={handleChange}
                    />

                    <Select css={`width: 100%;
                      margin-right: 10px`}
                            options={optionModel}
                            placeholder={"Модель" || localStorage.getItem('model') || model1}
                            value={model1}
                            onChange={handleChangeModel}
                            disabled={toglee()}
                    />
                    <Select css={`width: 100%`} control={Select} placeholder={"Поколение"}/>
                </div>

                <div css={`
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 20px`}>
                    <div css={`display: flex;
                      margin-right: 10px`}>
                        <Input fluid control={Select} placeholder={"Цена от"}/>
                        <Input fluid control={Select} placeholder={"до"}/>
                    </div>
                    <div css={`display: flex;
                      margin-right: 10px`}>
                        <Input fluid control={Select} placeholder={"Год от"}/>
                        <Input fluid control={Select} placeholder={"до"}/>
                    </div>

                    <div css={`display: flex;
                      `}>
                        <Input fluid control={Select} placeholder={"КПП"}/>
                        <Input fluid control={Select} placeholder={"Топливо"}/>
                    </div>

                </div>


                <Form.Group>
                    <Form.Button color={"black"} onClick={() => setMade(made1)}>
                        Показать
                    </Form.Button>
                    <Form.Button color={"grey"} onClick={() => setMade("Марка")}>
                        Показать все
                    </Form.Button>
                    <Form.Checkbox label="Только с фотографиями"/>
                </Form.Group>
            </Form>
        </Segment>
    </Container>);
}

export default FormFilterMain;
