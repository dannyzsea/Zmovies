import React from "react";
import {Inner,Container} from "./styles/jumbtron";

function Jumbotron({children,direction='row', ...restProps}){
    return(
      <Inner direction={direction}>
        <p>{children}</p>
      </Inner>
    )

}
Jumbotron.Container=function JumbotronContainer({children, ...restProps}){

    return <Container {...restProps}>{children} </Container>
}
export default Jumbotron;