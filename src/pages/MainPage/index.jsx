import React from "react";
import { Container } from "semantic-ui-react";
import SpecCarousel from "../../components/SpecCarousel";
import FormFilterMain from "../../components/FormFilterMain";
import ShowAdsCards from "../../components/ShowAdsCards";

function MainPage(props) {
  const [name, setName] = React.useState('')
  // console.log('aasd' + name)
  return (
    <>
      <Container>
        <h1 style={{ margin: 20 }}>Продажа автомобилей</h1>
      </Container>
      <SpecCarousel />
      <FormFilterMain name={name} setName={setName} />
      <ShowAdsCards name={name} />
    </>
  );
}

export default MainPage;
