import React from 'react';
import PropTypes from "prop-types";
import {Container, Form, Header, Input, Segment} from "semantic-ui-react";

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
                        <Form.Field  >
                            <Input
                            label={"Марка"} width={'6'} placeholder='Введите марку автомобиля' />
                        </Form.Field>
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
    idName: PropTypes.string,
}
;

export default NewAnn;

