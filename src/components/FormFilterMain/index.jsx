import React from 'react';
import {Button, Container, Form, FormField, Input, Segment, Select, Tab} from "semantic-ui-react";

function FormFilterMain (props) {
    return (
            <Container>
                <Segment placeholder>
                <Form widths={'equal'}>
                    <h2>
                        Поиск объявлений
                    </h2>
                    <Form.Group widths = {24}
                        >
                        <FormField
                            control={Select} width={8}
                            placeholder ={"Марка"}
                        />
                        <FormField width={8}

                            control={Select}
                            placeholder ={"Модель"}
                        />

                        <FormField width={8}
                            control={Select}
                            placeholder ={"Поколение"}
                        />

                    </Form.Group>


                    <Form.Group

                        >
                        <Form.Input
                             width={6}
                            placeholder ={"Цена от ,Р"}
                        />
                        <Form.Input
                            control={Select} width={6}
                            placeholder ={"до"}
                        />
                        <Form.Input width={3}
                                   control={Select}
                                   placeholder ={"Модель"}
                        />
                        <Form.Input width={3}
                                   control={Select}
                                   placeholder ={"Модель"}
                        />

                        <Form.Input width={3}
                                   control={Select}
                                   placeholder ={"Поколение"}
                        />
                        <Form.Input width={3}
                                   control={Select}
                                   placeholder ={"Модель"}
                        />

                    </Form.Group>
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Button color={'black'} type='submit'>Показать</Button>
            </Form>
                </Segment>
</Container>

    );
}

export default FormFilterMain;