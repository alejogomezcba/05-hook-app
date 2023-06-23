import React, {useState, useEffect} from 'react';


const Message = () => {

  const [coords, setCoords] = useState({coordX:0, coordY:0})

  const {coordX, coordY} = coords;
  
  useEffect(() => {

    const mouseMove = (e) => {
       const coords = {coordX: e.x, coordY: e.y};
       setCoords(coords);
    }
    
    window.addEventListener('mousemove', mouseMove)
  
    return () => {
        window.removeEventListener('mousemove', mouseMove)
    }
  }, []);

  return <>
  <h3>Mensaje de componente para validar useEffec</h3>
  <p>Coordenadas para X: {coordX} -- Y: {coordY}</p>
  </>
}

export default Message;
