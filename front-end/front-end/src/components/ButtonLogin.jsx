import React, { useState } from 'react'


const [login, setLogin] = useState(1)
const ButtonLogin  = props => (


   
   
    <div>
<button class="ui green button" onClick={() => setLogin(1)} >
<font className="font">
    <font className="font">
        {props.buttonLogin}
</font>
</font>
</button>

    </div>


    )


export default ButtonLogin