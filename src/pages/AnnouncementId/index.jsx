import * as React from "react";
import {
  Container,
  Header,
  Image,
  Label,
  Segment,
  Table,
} from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const AnnouncementId = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/post`)
      .then((res) => res.json())
      .then((res) => {
        let x = res.filter((item) => item.id === id);
        return x[0];
      })
      .then((data) => setPost(data));
  }, [id]);

    console.log(post)
  return (
    <Container>
      {post && (
        <>
          <h2 style={{ margin: 20 }}>
            Продажа {post.make.name} {post.model.name}
            {", "}
            {post.year}
            {"год"}
          </h2>
          <div style={{ display: "flex" }}>
            <div style={{ flex: "0 0 40%" }}>
              <Segment basic>
                <Image
                  style={{ minWidth: "100%" }}
                  rounded
                  verticalAlign="middle"
                  src={post.photo[0].url}
                  size={"medium"}
                ></Image>
              </Segment>
            </div>
            <div style={{ flex: "1 1 auto" }}>
              <Segment basic>
                <Header
                  // textAlign={'center'}
                  // dividing
                  style={{}}
                >
                  {post.price}
                  {" ₽"}
                </Header>
                <Label
                  as={"h5"}
                  color={"green"}
                  block
                  children={"нормальная цена"}
                  size={"mini"}
                />
                <Table compact basic={"very"} columns={2}>
                  <Table.Row>
                    <Table.Cell>
                      <Header as="h5" children={`Двигатель`} disabled />
                    </Table.Cell>
                    <Table.Cell>
                      <Header.Content> {post.engine}</Header.Content>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h5" children={`Коробка передач`} disabled />
                    </Table.Cell>
                    <Table.Cell>
                      <Header.Content> {post.transmission.name}</Header.Content>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h5" children={`Привод`} disabled />
                    </Table.Cell>
                    <Table.Cell>
                      <Header.Content> {post.drive_unit.name}</Header.Content>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h5" children={`Тип кузова`} disabled />
                    </Table.Cell>
                    <Table.Cell>
                      <Header.Content> {post.body_type.name}</Header.Content>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h5" children={`Цвет`} disabled />
                    </Table.Cell>
                    <Table.Cell>
                      <Header.Content> {post.color}</Header.Content>
                    </Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h5" children={`Пробег, км`} disabled />
                    </Table.Cell>
                    <Table.Cell>
                      <Header.Content> {post.mileageKm}</Header.Content>
                    </Table.Cell>
                  </Table.Row>
                </Table>
                <Table.Footer columns={1}>
                  <Header.Content> {post.description}</Header.Content>
                </Table.Footer>
              </Segment>
            </div>
            <div style={{ flex: "2 2 240px" }}> </div>
          </div>
        </>
      )}
    </Container>
  );
};

export { AnnouncementId };
