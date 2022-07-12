import React from "react";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";

export const EntryPage = (props) => {
  return (
    <>
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
            <Form>
              <Form.Input
                icon="user"
                iconPosition="left"
                label="Email"
                placeholder="Email"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Пароль"
                type="password"
              />
              <Button content="Войти" primary />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Button color={"red"} content="Зарегистрироваться" icon="signup" />
          </Grid.Column>
        </Grid>

        <Divider vertical>Или</Divider>
      </Segment>
    </>
  );
};
