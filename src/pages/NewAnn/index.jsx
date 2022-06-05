import React, {useState} from 'react';
import PropTypes from "prop-types";
import {Button, Container, Form, Header, Segment} from "semantic-ui-react";
import {useForm} from "react-hook-form";

import "./NewAnn.css"

const NewAnn = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");


    let FormValues;
    FormValues = {
        vin: ["VIN","Введите VIN"],// * VIN
        // Номер СТС
        // Госномер
        make: ["Марка","Введите Марку автомобиля"],   // * Марка
        model: ["Модель","Введите Модель"],  // * Модель
        // * Руль
        year: ["Год", "Укажите год выпуска"],// * Год выпуска
        transmission:["КПП", "Укажите тип коробки передач"],
        drive_unit:["Привод","Укажите привод"],
        engine:["Двигатель, объем","Например бензин, 1.6л"],
        body_type:["Кузов","Например седан"],// * Кузов
        // Поколение
        // Модификация
        // Комплектация
        // * Пробег
        color:["Цвет", "Укажите цвет"],// Цвет
        // Особые отметки
        // Описание
        price:["Цена","Укажите цену"],// * Цена
        // * Статус
        city:["город продажи",""],// * Город продажи
        mobile:["телефон","89123456789"]// * Телефон 1
        // Телефон 2
    }

       return(
        <Container>
            <Segment basic >
                <Header as={'h2'}> Добавить объявление</Header>
                <div style={{display: 'flex'}}>
                <div style={{flex: '0 60%',textAlign: 'end'}} >

                    <Form
                        onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
                        className={"input_block"} widths = {'equal'}>


                        <label > {FormValues.vin[0]}</label>
                            <input  {...register("vin")}  placeholder={FormValues.vin[1]} />

                        <label>{FormValues.make[0]}</label>
                            <input  {...register("make")}  placeholder={FormValues.make[1]} />



                        <label>{FormValues.drive_unit[0]}</label>
                            <input  {...register("transmission")}  placeholder={FormValues.drive_unit[1]} />


                        <label>{FormValues.body_type[0]}</label>
                            <input  {...register("engine")}  placeholder={FormValues.body_type[1]} />


                        <label>{FormValues.color[0]}</label>
                            <input  {...register("engine")}  placeholder={FormValues.color[1]} />




                        {/*<InputAddForm  name = {FormValues.year[0]} placeholder={FormValues.year[1]} />*/}
                        {/*<InputAddForm  name = {FormValues.transmission[0]} placeholder={FormValues.transmission[1]} />*/}
                        {/*<InputAddForm  name = {FormValues.engine[0]} placeholder={FormValues.engine[1]} />*/}
                        {/*<InputAddForm  name = {FormValues.drive_unit[0]} placeholder={FormValues.drive_unit[1]} />*/}
                        {/*<InputAddForm  name = {FormValues.body_type[0]} placeholder={FormValues.body_type[1]} />*/}
                        {/*<InputAddForm  name = {FormValues.color[0]} placeholder={FormValues.color[1]} />*/}
                        {/*<InputAddForm  name = {FormValues.price[0]} placeholder={FormValues.price[1]} />*/}
                        {/*<FormGroup inline >*/}
                        {/*    <label style = {{width: 150}} >Описание</label>*/}
                        {/*    <FormTextArea style={{paddingRight: "0"}} basic required placeholder='' />*/}
                        {/*</FormGroup>*/}

                        {/*<InputAddForm  name = {FormValues.mobile[0]} placeholder={FormValues.mobile[1]} />*/}


                        <Button
                            color={'red'}
                            type={"submit"}
                            content={"Подать оъявление и добавить фото"}
                        />
                        <p><p>{data}</p></p>
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



export default NewAnn;

