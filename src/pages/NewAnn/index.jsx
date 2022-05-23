import React from 'react';
import PropTypes from "prop-types";
import {Button, Container, Form, Header, Input, Segment} from "semantic-ui-react";

const NewAnn = ({idName}) => {

    return(
        <Container>
            <Segment basic >
                <Header as={'h2'}> Добавить объявление</Header>
                <div style={{display: 'flex'}}>
                <div style={{flex: '0 60%',textAlign: 'end'}} >
                    <Form
                        widths = {'equal'}

                    >
                        <Form.Group  inline>
                            <label>Марка</label>
                            <Input
                                // fluid
                                width={'10'}
                                placeholder='Введите марку автомобиля' />
                        </Form.Group>
                        <Form.Field>
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

