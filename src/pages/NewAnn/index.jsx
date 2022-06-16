import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Container, Form, Header, Segment } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "./NewAnn.css";
import { useNavigate } from "react-router-dom";

const NewAnn = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setData(JSON.stringify(data));
    navigate("/new_ann_photo");
  };

  let FormValues;
  FormValues = {
    vin: ["VIN", "Введите VIN"], // * VIN
    // Номер СТС
    // Госномер
    make: ["Марка", "Введите Марку автомобиля"], // * Марка
    model: ["Модель", "Введите Модель"], // * Модель
    // * Руль
    year: ["Год", "Укажите год выпуска"], // * Год выпуска
    transmission: ["КПП", "Укажите тип коробки передач"],
    drive_unit: ["Привод", "Укажите привод"],
    engine: ["Двигатель, объем", "Например бензин, 1.6л"],
    body_type: ["Кузов", "Например седан"], // * Кузов
    // Поколение
    // Модификация
    // Комплектация
    mileageKm: ["Пробег", "Пробег, км"], // * Пробег
    color: ["Цвет", "Укажите цвет"], // Цвет
    // Особые отметки
    description: ["Описание", ""], // Описание
    price: ["Цена", "Укажите цену"], // * Цена
    // * Статус
    city: ["Город продажи", ""], // * Город продажи
    mobile: ["телефон", "89123456789"], // * Телефон 1
    // Телефон 2
  };

  return (
    <Container>
      <Segment basic>
        <Header as={"h2"}> Добавить объявление</Header>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0 60%", textAlign: "end" }}>
            <Form
              //   onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
              onSubmit={handleSubmit(onSubmit)}
              className={"input_block"}
              widths={"equal"}
            >
              <label> {FormValues.vin[0]}</label>
              <input {...register("vin")} placeholder={FormValues.vin[1]} />

              <label>{FormValues.make[0]}</label>
              <input {...register("make")} placeholder={FormValues.make[1]} />

              <label>{FormValues.model[0]}</label>
              <input {...register("model")} placeholder={FormValues.model[1]} />

              <label>{FormValues.year[0]}</label>
              <input {...register("year")} placeholder={FormValues.year[1]} />

              <label>{FormValues.transmission[0]}</label>
              <input
                {...register("transmission")}
                placeholder={FormValues.transmission[1]}
              />

              <label>{FormValues.body_type[0]}</label>
              <input
                {...register("body_type")}
                placeholder={FormValues.body_type[1]}
              />

              <label>{FormValues.engine[0]}</label>
              <input
                {...register("engine")}
                placeholder={FormValues.engine[1]}
              />

              <label>{FormValues.drive_unit[0]}</label>
              <input
                {...register("transmission")}
                placeholder={FormValues.transmission[1]}
              />

              <label>{FormValues.mileageKm[0]}</label>
              <input
                {...register("mileageKm")}
                placeholder={FormValues.mileageKm[1]}
              />

              <label>{FormValues.color[0]}</label>
              <input {...register("color")} placeholder={FormValues.color[1]} />

              <label>{FormValues.description[0]}</label>
              <textarea
                {...register("description")}
                placeholder={FormValues.description[1]}
              />

              <label>{FormValues.price[0]}</label>
              <input {...register("price")} placeholder={FormValues.price[1]} />

              <label>{FormValues.city[0]}</label>
              <input {...register("city")} placeholder={FormValues.city[1]} />

              <label>{FormValues.mobile[0]}</label>
              <input
                {...register("mobile")}
                placeholder={FormValues.mobile[1]}
              />
              <Segment basic></Segment>

              <Button
                color={"red"}
                type={"submit"}
                content={"Подать оъявление и добавить фото"}
              />
            </Form>
          </div>
          <div style={{ flex: "1 140px" }}> </div>
        </div>
        <p>{onSubmit}</p>
      </Segment>
    </Container>
  );
};
NewAnn.defaultProps = {
  idName: " ",
};

NewAnn.propTypes = {
  idName: PropTypes.number,
};

export default NewAnn;
