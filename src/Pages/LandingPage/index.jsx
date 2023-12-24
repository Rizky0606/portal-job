import { Button, Typography } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Hero from "../../components/organisms/Hero";
import LandingPageTemplate from "../../components/templates/LandingPageTemplate";
import { incrementCounter } from "../../redux/counter/action";

const { Title } = Typography;

function LandingPage() {
  const { counter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  return (
    <div>
      <div>
        {/* <Title level={5}>Counter: {counter}</Title>
        <Button onClick={handleIncrement} type="primary">
          Increment
        </Button> */}
        <LandingPageTemplate>
          <Hero />
        </LandingPageTemplate>
      </div>
    </div>
  );
}

export default LandingPage;
