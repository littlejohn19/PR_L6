import React from 'react';
import {useState} from 'react'

const ComponentFunctional = (props: any) => {
    const [value, setValue] = useState(0)

    return (
        <div>
            <p>{value}</p>
            <button className = "btn btn-secondary-btn-sm" onClick = {() => setValue(value+1)}>Add Value</button>
        </div>
    );
}

export default ComponentFunctional;
