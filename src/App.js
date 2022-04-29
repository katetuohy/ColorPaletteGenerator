// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Palette from './Palette.js';
import { Button, TextField } from '@mui/material';
import tracery from 'tracery-grammar';
import { GetColorName } from 'hex-color-to-color-name';
import colorsJson from './tracery/colors.json';
import { shades } from './ntc.js';
// import ntc from './ntc.js';

function App() {

  const [colors, setColors] = React.useState(['#D57B4F','#C1D54F','#4FD554','#4FD0D5','#4F65D5']);
  const [colorsTracery, setColorsTracery] = React.useState(tracery.createGrammar(colorsJson));
  colorsTracery.addModifiers(tracery.baseEngModifiers); 
  const [num, setNum] = React.useState(5);
  const [paletteName, setPaletteName] = React.useState("Sunny Day on the beach");
  const ntc = require('./ntc.js');
  const hexToHsl = require('hex-to-hsl');

  const changeColors = () => {
    let c = [];
    for (let ii = 0; ii < num; ii++) {
      c.push('#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
    }
    setColors(c);
  }

  const allEqual = arr => arr.every( v => v === arr[0] )

  React.useEffect(() => {
    var shades = []
    var names = []
    var numPastels = 0;
    for (var ii = 0; ii < num; ii++) {
      names.push(ntc.name(colors[ii])[1])
      shades.push(ntc.name(colors[ii])[3])
      if (hexToHsl(colors[ii])[2] > 70) {
        numPastels++;
      }
    }
    var maxEl = "";
    var secondEl = "";
    let options = []
    if (allEqual(shades)) {
      maxEl = shades[0];
      secondEl = shades[0];
      options = addRandomNameOptions(names, maxEl)
    } else {
      let maxElements = []
      while (shades.length > 0) {
        var modeMap = {};
        var maxEl = shades[0], maxCount = 1;
        for(var i = 0; i < shades.length; i++) {
            var el = shades[i];
            if(modeMap[el] === null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
            if (modeMap[el] > maxCount) {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        maxElements.push(maxEl);
        shades = shades.filter(function(value){ 
          return value != maxEl;
        });
      }

      if (maxElements.length === num) {
        console.log("shuffle");
        //If all the shades are different, randomize list so selected aren't just the first two in palette
        maxElements = maxElements.sort((a, b) => 0.5 - Math.random());
        maxEl = maxElements[0]
        secondEl = maxElements[1]
      } else {
        maxEl = maxElements[0]
        secondEl = maxElements[1]
        options = addRandomNameOptions(names, maxEl)
      }
      console.log("Max Elements::" + maxElements)
    }
    options.push('#' + secondEl.toLowerCase() + 'Adj.capitalize# #' + maxEl.toLowerCase() + 'Noun.capitalize.s#');
    options.push('#' + maxEl.toLowerCase() + 'Adj.capitalize# #' + secondEl.toLowerCase() + 'Noun.capitalize.s#');
    options.push('#' + secondEl.toLowerCase() + 'Adj.capitalize# #' + maxEl.toLowerCase() + 'Noun.capitalize#');
    options.push('#' + maxEl.toLowerCase() + 'Adj.capitalize# #' + secondEl.toLowerCase() + 'Noun.capitalize#');

    options.push('#' + secondEl.toLowerCase() + 'Thing.capitalize.s# and #' + maxEl.toLowerCase() + 'Thing.capitalize.s#');
    options.push('#' + maxEl.toLowerCase() + 'Thing.capitalize.s# and #' + secondEl.toLowerCase() + 'Thing.capitalize.s#');
    options.push('#' + secondEl.toLowerCase() + 'Thing.capitalize# and #' + maxEl.toLowerCase() + 'Thing.capitalize#');
    options.push('#' + maxEl.toLowerCase() + 'Thing.capitalize# and #' + secondEl.toLowerCase() + 'Thing.capitalize#');
    options.push('#' + secondEl.toLowerCase() + 'Thing.capitalize.s# of #' + maxEl.toLowerCase() + 'Noun.capitalize#');
    options.push('#' + maxEl.toLowerCase() + 'Thing.capitalize.s# of #' + secondEl.toLowerCase() + 'Noun.capitalize#');

    options.push('#' + secondEl.toLowerCase() + 'Thing.capitalize# #placeConnectors# #' + maxEl.toLowerCase() + 'Place#');
    options.push('#' + maxEl.toLowerCase() + 'Thing.capitalize# #placeConnectors# #' + secondEl.toLowerCase() + 'Place#');
    //Wasn't showing up often so wanted to increase frequency
    options.push('#' + secondEl.toLowerCase() + 'Thing.capitalize# #placeConnectors# #' + maxEl.toLowerCase() + 'Place#');
    options.push('#' + maxEl.toLowerCase() + 'Thing.capitalize# #placeConnectors# #' + secondEl.toLowerCase() + 'Place#');
    
    if (numPastels > Math.floor(num / 3)) {
      var input = '#pastelAdj.capitalize# #' + maxEl.toLowerCase() + 'Noun.capitalize#';
      console.log(input)
      setPaletteName(colorsTracery.flatten(input));
    }  else {
      setPaletteName(colorsTracery.flatten(options[Math.floor(Math.random() * options.length)]));
    }
  }, [colors]);

  const changeNumOfColors = (event) => {
    setNum(event.target.value);
  }

  const addRandomNameOptions = (names, maxEl) => {
    let options = []
    var randomName = names[Math.floor(Math.random() * names.length)];
    //If all the shades are different, don't want to use color name
    options.push('#' + maxEl.toLowerCase() + 'Thing.capitalize.s# and ' + randomName);
    options.push(randomName + ' and #' + maxEl.toLowerCase() + 'Thing.capitalize.s#');
    options.push(randomName + ' #' + maxEl.toLowerCase() + 'Noun.capitalize#');
    return options;
  }

  return (
    <div className="App">
      <div style={{padding: 30, backgroundColor: '#d6d6d6'}}>
        <div className="App-header">
          Color Palette Generator
        </div>
        <TextField
            id="outlined-number"
            label="Number of Colors"
            type="number"
            InputLabelProps={{
                shrink: true
            }}
            InputProps={{
              inputProps: {
                min: 2, 
                max: 8
              }
            }}
            defaultValue={num}
            onChange={changeNumOfColors}
            style={{marginRight: 15, minWidth: 125}}
          />
        <span style={{paddingTop: 30}}>
          <Button className="Generate-button" variant="contained" onClick={changeColors}>
            Generate New Color Palette
          </Button>
        </span>    
      </div>
      <div className="Palette-name">{paletteName}</div>  
      <Palette className="Palette" colors={colors}/>
      <div className='Footer'>
            Created by Katherine Tuohy
      </div>
    </div>
  );
}

export default App;
