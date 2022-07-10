import React from "react";
import { Container } from "semantic-ui-react";
import SpecCarousel from "../../components/SpecCarousel";
import FormFilterMain from "../../components/FormFilterMain";
import ShowAdsCards from "../../components/ShowAdsCards";

function MainPage(props) {
  const [made, setMade] = React.useState('')
  return (
    <>
      <Container>
        <h1 style={{ margin: 20 }}>Продажа автомобилей</h1>
      </Container>
      <SpecCarousel />
      <FormFilterMain made={made} setMade={setMade} />
      <ShowAdsCards made={made} />
    </>
  );
}

export default MainPage;
