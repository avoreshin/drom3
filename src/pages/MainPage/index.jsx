import React, {useContext} from "react";
import { Container } from "semantic-ui-react";
import SpecCarousel from "../../components/SpecCarousel";
import FormFilterMain from "../../components/FormFilterMain";
import ShowAdsCards from "../../components/ShowAdsCards";

// const context = useContext(contextValue);


function MainPage(props) {
  return (
    <>
      <Container>
        <h1 style={{ margin: 20 }}>Продажа автомобилей</h1>
      </Container>
      <SpecCarousel />
      <FormFilterMain />
      <ShowAdsCards />
    </>
  );
}

export default MainPage;
