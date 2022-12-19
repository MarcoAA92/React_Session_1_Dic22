import React from 'react'; 

const Counter = (props) => {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '300%',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '-15%',
          }}>
            Counter App
            <div style={{
              fontSize: '120%',
              position: 'relative',
              top: '10vh',
            }}>
              {props.countData}
            </div>  
        </div>
    )
}

export default Counter;// Esto exporta el archivo para que lo podamos usar