import React from "react";

import { Container } from "./styles";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <Container>
      <h1>home</h1>
    </Container>
  );
};

export default Home;
