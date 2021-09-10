import React from "react";
import {Inner,Container} from "./styles/jumbtron";

function Jumbotron({direction='row', ...restProps}){
    return(
      <Inner direction={direction}>
          <h1>Hello</h1>
      </Inner>
    )

}
Jumbotron.Container=function JumbotronContainer({children, ...restProps}){

    return <Container {...restProps}>{children} </Container>
}
export default Jumbotron;