import React from 'react'; 

const Actions = (props) => {
    return(
        <div className="buttons">
            <button style={{
                fontSize: '60%',
                position: 'relative',
                top: '20vh',
                marginRight: '5px',
                backgroundColor: 'green',
                borderRadius: '8%',
                color: 'white',
            }}
                onClick={props.click1}>Increment
            </button>
            <button style={{
                fontSize: '60%',
                position: 'relative',
                top: '20vh',
                marginLeft: '5px',
                backgroundColor: 'red',
                borderRadius: '8%',
                color: 'white',
            }}
                onClick={props.click2}>Decrement
            </button>
            <input style={{
                  fontSize: '60%',
                  position: 'relative',
                  top: '20vh',
                  marginLeft: '5px',
                  borderRadius: '8%',
                  width:'20px',
                  textAlign: 'center',
            }} 
                id='numChanger'
                 placeholder='Enter Number'
                 onChange={props.change}>
            </input>
        </div>
    )
}

export default Actions;// Esto exporta el archivo para que lo podamos usar