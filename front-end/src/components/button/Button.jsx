import React from 'react'
import './Button.css'

const Button = props => (
    <div >
        <button class="ui green button" >
            
                <font className="font">
                    {props.button}
                </font>
           
        </button>

    </div>
)
export default Button

