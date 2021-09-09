
import React from "react";
import jumboData from "./fixtures/jumbo";
import Jumbotron from "./Components/jumbotron";

function App() {
  return (
    
<Jumbotron.Container>
{jumboData.map((item)=>(
<Jumbotron key={item.id}>
  <p>Hello I am a child</p>
</Jumbotron>
))}
</Jumbotron.Container>
  );
}

export default App;
