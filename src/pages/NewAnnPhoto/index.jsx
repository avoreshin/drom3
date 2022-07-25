import React, { useState } from "react";

import { Button, Container, Header, Segment } from "semantic-ui-react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import UploaderItem from "../../components/UploaderItem";

const NewAnnPhoto = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setData(JSON.stringify(data));
    navigate("/new_ann_photo");
  };

  return (
    <Container>
      <Segment basic>
        <Header as={"h2"}> Добавление фотографии</Header>
        <div style={{ display: "flex" }}>
          <div>
            <UploaderItem />

            <Button
              color={"red"}
              type={"submit"}
              content={"Предварительный просмотр"}
            />
          </div>
        </div>
        <p>{onSubmit}</p>
      </Segment>
    </Container>
  );
};

export default NewAnnPhoto;
