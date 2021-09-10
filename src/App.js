
import React from "react";
import jumboData from "./fixtures/jumbo";
import Jumbotron from "./Components/jumbotron";

function App() {
  return (
    
<Jumbotron.Container>
{jumboData.map((item)=>(
<Jumbotron key={item.id}>
  <p>{item.title}</p>
  <p>{item.subTitle}</p>
  <p>{item.image}</p>
  <p>{item.alt}</p>
</Jumbotron>
))}
</Jumbotron.Container>
  );
}

export default App;
