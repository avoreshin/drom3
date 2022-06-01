import React from 'react';
import PropTypes, {string} from "prop-types";
import {Button, Container, Form, FormGroup, FormTextArea, Header, Input, Segment} from "semantic-ui-react";
import {useForm} from "raact-hook-form";

import "./NewAnn.css"
import {typeImplementation} from "@testing-library/user-event/dist/type/typeImplementation";
const NewAnn = () => {

    let FormValues;
    FormValues = {
        // * VIN
        // Номер СТС
        // Госномер
        make: string,   // * Марка
        model: string,  // * Модель
        // * Руль
        year: string,// * Год выпуска
        // * Кузов
        // Поколение
        // Модификация
        // Комплектация
        // * Пробег
        // Цвет
        // Особые отметки
        // Описание
        // * Цена
        // * Статус
        // * Город продажи
        // * Телефон 1
        // Телефон 2

    }

    const {register} = useForm<FormValues>();

    return(
        <Container>
            <Segment basic >
                <Header as={'h2'}> Добавить объявление</Header>
                <div style={{display: 'flex'}}>
                <div style={{flex: '0 60%',textAlign: 'end'}} >
                    <Form
                        widths = {'equal'}
                    >
                        <FormGroup inline>
                            <label style = {{width: 150}}>Марка</label>
                            <Input className={"input_block"} required placeholder='Введите марку автомобиля' />
                        </FormGroup>

                        <FormGroup inline>
                            <label style = {{width: 150}}>Модель</label>
                            <Input className={"input_block"} required placeholder='Введите модель автомобиля' />
                        </FormGroup>

                        <FormGroup inline>
                            <label style = {{width: 150}}>Стоимость</label>
                            <Input className={"input_block"} required placeholder='Введите стоимость автомобиля' />
                        </FormGroup>

                        <FormGroup inline>
                            <label style = {{width: 150}}>Год</label>
                            <Input className={"input_block"} required placeholder='Введите год автомобиля' />
                        </FormGroup>

                        <FormGroup inline>
                            <label style = {{width: 150}}>Пробег</label>
                            <Input className={"input_block"} required placeholder='Введите пробег автомобиля' />
                        </FormGroup>

                        <FormGroup inline>
                            <label style = {{width: 150}}>Город</label>
                            <Input className={"input_block"} required placeholder='Введите город' />
                        </FormGroup>

                        <FormGroup inline>
                        <label style = {{width: 150}}>Телефон</label>
                        <Input  className={"input_block"} required placeholder='Введите телефон' />
                    </FormGroup>

                        <FormGroup inline>
                            <label style = {{width: 150}} >Описание</label>
                            <FormTextArea  className={"input_block"} required placeholder='' />
                        </FormGroup>


                        <Button
                            color={'red'}
                        type={"submit"}
                        content={"ОТПРАВИТЬ"}
                        />
                    </Form>
                </div>
                <div style={{flex: '1 140px'}}> </div>
                </div>



            </Segment>
        </Container>
    )

}
NewAnn.defaultProps = {
    idName:" ",
}

NewAnn.propTypes = {
    idName: PropTypes.number,
}
;

export default NewAnn;

