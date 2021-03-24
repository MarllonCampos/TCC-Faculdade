import React from "react";
import {index1} from "./index1";
import {index} from "../EstufaAtiva/index"

import {Switch,Route} from "react-router-dom";

export const Routes = () => {
    return(
        <Switch>
            <Route path="/list-estufas" component={index1} exact/>
            <Route path="/estufa-ativa" component={index}/>
            <Route component = {( => <div>Erro</div>)}>
        </Switch>
    )
}