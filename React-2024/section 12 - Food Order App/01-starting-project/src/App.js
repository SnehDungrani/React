import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";
import Card from "./components/UI/Card";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
