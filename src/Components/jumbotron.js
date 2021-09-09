import React from "react";
import {Inner,Container} from "./styles/jumbtron";

function Jumbotron({direction='row', ...restProps}){
    return(
      <Inner direction={direction}>
          Hello world.
      </Inner>
    )

}
Jumbotron.Container=function JumbotronContainer({children, ...restProps}){

    return <Container {...restProps}>{children} </Container>
}
export default Jumbotron;