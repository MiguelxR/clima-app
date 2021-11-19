import React, { useState, useEffect } from 'react';

const ApiFetch = () => {

    const [equipo, setEquipo] = useState([])

    useEffect(() => {

        // console.log("UseEffect");
        obtenerDatos()
        }, []);

        const obtenerDatos = async() => {
            const data = await fetch('https://api.meteomatics.com/2021-11-18T00:00:00ZP1D:PT1H/t_2m:C,relative_humidity_2m:p/47.4245,9.3767/json?model=mix&request_type=GET')
            const users = await data.json()
    
        // solucion haz lo siguiente, toma el objeto que te devuelve la variable main y traspasalo a un array para que puedas manifestarlo como un array normal en el jsx y pintar los datos finalmente.
            console.log(users);
            console.log(users.id);
            console.log(users.main.temp)
            setEquipo(users)
        }

    return (
        <div>
             <ul>
                 <li>hola mundo</li>
              {/* {
                  equipo.map(item =>(
                     <li key="item.id">{item.main}</li> 
                  ))
              } */}
            </ul> 
        </div>
    );
}

export default ApiFetch
