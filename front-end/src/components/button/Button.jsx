import React from 'react'
import './Button.css'
const Button = props => (
    <div className="btn">
        <button class="ui green button" type={props.tipo} >
            <font className="font">
                <font className="font">
                    {props.button}
                </font>
            </font>
        </button>

    </div>
)
export default Button

