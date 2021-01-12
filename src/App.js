import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Custome
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboad from "./pages/Dashboard";
import Stats from "./pages/Stats";
import MobileNav from "./components/MobileNav";
import Floating from "./components/FloatingButton";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  min-height: 90rem;
  overflow: hidden;
  margin: 0 auto;
  @media (max-width: 770px) {
    height: auto !important;
    min-height: auto;
    padding-bottom: 10rem;
  } ;
`;

const Main = styled.div`
  width: 100%;
  height: calc(100% - 140px);
  display: flex;
  justify-content: flex-start;
  align-self: stretch;
  @media (max-width: 960px) {
    height: calc(100% - 96px);
  }
  @media (max-width: 770px) {
    height: auto !important;
  } ;
`;

const MainContent = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Container className="muneeb">
      <Navbar />
      <BrowserRouter>
        <Main>
          <Sidebar />
          <MainContent>
            <Switch>
              <Route
                path="/stats"
                exact={true}
                component={Stats}
                strict={true}
              />
              <Route path="/" exact={true} component={Dashboad} />
            </Switch>
          </MainContent>
        </Main>
        <MobileNav></MobileNav>
        <Floating></Floating>
      </BrowserRouter>
    </Container>
  );
}

export default App;
