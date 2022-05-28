import React from 'react';
import PropTypes from "prop-types";
import {Button, Container, Form, FormGroup, Header, Input, Segment} from "semantic-ui-react";
import "./NewAnn.css"
const NewAnn = () => {
    // let items;
    // let {idUser,
    //     marka,
    //     model
    //
    // } = items;

    return(
        <Container>
            <Segment basic >
                <Header as={'h2'}> Добавить объявление</Header>
                <div style={{display: 'flex'}}>
                <div style={{flex: '0 60%',textAlign: 'end'}} >
                    <Form
                        widths = {'equal'}
                    >
                        <FormGroup
                            inline>
                            <label>Марка</label>
                            <Input

                                className={"input_block"}
                                required
                                placeholder='Введите марку автомобиля' />
                        </FormGroup>
                        <Form.Field>

                            <FormGroup
                                inline>
                                <label>Модель</label>
                                <Input
                                    className={"input_block"}
                                    required
                                    placeholder='Модель' />
                            </FormGroup>
                            <Input label={"Модель"} placeholder='Модель' />
                        </Form.Field>

                        <Form.Field>

                            <FormGroup
                                inline>
                                <label>Модель</label>
                                <Input
                                    className={"input_block"}
                                    required
                                    placeholder='Модель' />
                            </FormGroup>
                            <Input label={"Модель"} placeholder='Модель' />
                        </Form.Field>







                        <Form.Field >

                            <Input label={"Пробег"} placeholder='Пробег' />
                        </Form.Field>
                        <Form.Field>
                            <Input type={'textarea'} label={"Описание"} placeholder=' ' />
                        </Form.Field>
                        <Form.Field >
                            <Input label={"Цена"} placeholder=' ' />
                        </Form.Field>
                        <Form.Field >
                            <Input label={"Город"} placeholder=' ' />
                        </Form.Field>
                        <Form.Field >
                            <Input label={"Телефон"} placeholder=' ' />
                        </Form.Field>

                        <Form.Field >
                            <Input type="file" label={"Фото 1"} placeholder=' ' />
                        </Form.Field>


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

