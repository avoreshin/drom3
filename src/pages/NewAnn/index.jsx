import React from 'react';
import PropTypes from "prop-types";
import {Button, Container, Form, FormGroup, FormTextArea, Header, Input, Label, Segment} from "semantic-ui-react";
import "./NewAnn.css"
const NewAnn = () => {


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
                <div style={{flex: '1 240px'}}> </div>
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

