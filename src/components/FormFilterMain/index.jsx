import React from "react";
import {
  Button,
  Container,
  Form,
  FormField,
  Segment,
  Select,
} from "semantic-ui-react";

function FormFilterMain(props) {
  return (
    <Container>
      <Segment placeholder>
        <Form widths={"equal"}>
          <h2>Поиск объявлений</h2>
          <Form.Group widths={24}>
            <FormField control={Select} width={8} placeholder={"Марка"} />
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
          <Button color={"black"} type="submit">
            Показать
          </Button>
        </Form>
      </Segment>
    </Container>
  );
}

export default FormFilterMain;
