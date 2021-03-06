import './Palette.css';
import * as React from 'react';
import Box from '@mui/material/Box';

function Palette(props) { 

  let colorBoxes=[];
  let colors = props.colors;
  colors.forEach((color)=>{
    colorBoxes.push(<span key={color}>
        <Box component="div" 
        sx={{width: 125, height: 125, m: 2, backgroundColor: color, }}>
          {/* <button className="Color-name" onMouseEnter={showTitle} onMouseLeave={hideTitle}/> */}
        </Box>
        <span className='Color-name'>{color}</span>
      </span>)
  })

  return (
    <div className="Palette">
        {colorBoxes}
    </div>
  );
}

export default Palette;
