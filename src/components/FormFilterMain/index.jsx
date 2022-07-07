import React from "react";
import {
    Button,
    Container, Dropdown,
    Form,
    FormField,
    Segment,
    Select,
} from "semantic-ui-react";

function FormFilterMain(props) {
    let made = "Made / Марка"
    let count = 13;
    const optionMade =

        [
        {key: 0, text: 'Toyota(' + count + ')', value: "Toyota"},
        {key: 1, text: 'Kia'},
        {key: 2, text: "Vaz"}

    ]
    return (
        <Container>
            <Segment placeholder>
                <Form widths={"equal"}>
                    <h2>Поиск объявлений</h2>
                    <Form.Group widths={24}>
                        <Dropdown
                            selection
                            options={optionMade}
                            compact
                            width={9} placeholder={made}/>


                        <FormField width={8} control={Select} placeholder={"Модель"}/>

                        <FormField width={8} control={Select} placeholder={"Поколение"}/>
                    </Form.Group>

                    <Form.Group widths="equal">
                        <Form.Input fluid control={Select} placeholder={"Цена от"}/>
                        <Form.Input fluid control={Select} placeholder={"до"}/>
                        <Form.Input fluid control={Select} placeholder={"Год от"}/>
                        <Form.Input fluid control={Select} placeholder={"до"}/>

                        <Form.Input fluid control={Select} placeholder={"КПП"}/>
                        <Form.Input fluid control={Select} placeholder={"Топливо"}/>
                    </Form.Group>
                    <Form.Checkbox label="Только с фотографиями"/>
                    <Button color={"black"} type="submit">
                        Показать
                    </Button>
                </Form>
            </Segment>
        </Container>
    );
}

export default FormFilterMain;
