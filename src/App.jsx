import React from "react";
import { data } from "./accordionData";
import SingleAccordion from "./SingleAccordion";

function App() {
  const [accordionData, setAccordionData] = React.useState(data);
  return (
    <section className="container">
      <h1>Questions and Answers about Login</h1>
      <div className="accordion_container">
        {accordionData &&
          accordionData.map((singleAccordion) => {
            return (
              <SingleAccordion
                key={singleAccordion.id}
                singleAccordion={singleAccordion}
              />
            );
          })}
      </div>
    </section>
  );
}

export default App;
