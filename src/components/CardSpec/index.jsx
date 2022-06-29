import React from "react";
import "./CardSpec.css";
import { Card, Icon, Image } from "semantic-ui-react";

// import {Link} from "react-router-dom";

function CardSpec(props) {
  const { item } = props;
  let { id, photo, make, city, price, model, year } = item;

  year = year.toString().substr(0, 4);

  price = price
    .toString()
    .replace(/\s+/g, "")
    .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1 ");

  return (
    <Card color={"olive"} centered>
      <Image className={"CardSpecImg"} src={photo[0].url} alt={photo[0].alt} />
      <div className={"CardSpecPrice"}>
        {" "}
        {price} <Icon name={"rub"} />
      </div>
      <Card.Content>
        <div className={"CardSpecTitle"}>
          <Icon name={"car"} />
          {make.name} {model.name} {year}
        </div>
        <Card.Meta extra>
          <Icon name={"map marker alternate"} />
          {city.name}
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default CardSpec;
