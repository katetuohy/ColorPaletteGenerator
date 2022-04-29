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

  const [colors, setColors] = React.useState(['#D57B4F','#C1D54F','#4FD554','#4FD0D5','#4F65D5', '#D54F8C']);
  const [colorsTracery, setColorsTracery] = React.useState(tracery.createGrammar(colorsJson));
  colorsTracery.addModifiers(tracery.baseEngModifiers); 
  const [num, setNum] = React.useState(5);
  const [paletteName, setPaletteName] = React.useState("Sunny Day on the beach");
  const ntc = require('./ntc.js');

  const changeColors = () => {
    let c = [];
    for (let ii = 0; ii < num; ii++) {
      c.push('#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
    }
    setColors(c);
  }

  React.useEffect(() => {
    shades = []
    for (var ii = 0; ii < num; ii++) {
      shades.push(ntc.name(colors[ii])[3])
    }
    const shuffled = shades.sort(() => 0.5 - Math.random());
    console.log("shuffled::: " + shuffled);
    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, 2);
    console.log(selected[0]);
    console.log(selected[1]);
    switch(selected[0]) {
      case 'Red':
        switch (selected[1]) {
          case 'Orange':
            var redOrange = colorsTracery.flatten('#redAdj.capitalize# #orangeNoun#');
            var orangeRed = colorsTracery.flatten('#orangeAdj.capitalize# #redNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? redOrange : orangeRed);
            break;
          case 'Yellow':
            var redYellow = colorsTracery.flatten('#redAdj.capitalize# #yellowNoun#');
            var yellowRed = colorsTracery.flatten('#yellowAdj.capitalize# #redNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? redYellow : yellowRed);
            break;
          case 'Green':
            var redGreen = colorsTracery.flatten('#redAdj.capitalize# #greenNoun#');
            var greenRed = colorsTracery.flatten('#greenAdj.capitalize# #redNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? redGreen : greenRed);
            break;
          case 'Blue':
            var redBlue = colorsTracery.flatten('#redAdj.capitalize# #blueNoun#');
            var blueRed = colorsTracery.flatten('#blueAdj.capitalize# #redNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? redBlue : blueRed);
            break;
          case 'Violet':
            var redViolet = colorsTracery.flatten('#redAdj.capitalize# #violetNoun#');
            var violetRed = colorsTracery.flatten('#violetAdj.capitalize# #redNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? redViolet : violetRed);
            break;
          case 'Brown':
            var redBrown = colorsTracery.flatten('#redAdj.capitalize# #brownNoun#');
            var brownRed = colorsTracery.flatten('#brownAdj.capitalize# #redNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? redBrown : brownRed);
            break;
          case 'Black':
            var redBlack = colorsTracery.flatten('#redAdj.capitalize# #blackNoun#');
            var blackRed = colorsTracery.flatten('#blackAdj.capitalize# #redNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? redBlack : blackRed);
            break;
          case 'Grey':
            var redGrey = colorsTracery.flatten('#redAdj.capitalize# #greyNoun#');
            var greyRed = colorsTracery.flatten('#greyAdj.capitalize# #redNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? redGrey : greyRed);
            break;
          case 'White':
            var redwhite = colorsTracery.flatten('#redAdj.capitalize# #whiteNoun#');
            var whiteRed = colorsTracery.flatten('#whiteAdj.capitalize# #redNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? redwhite : whiteRed);
            break; 
        }
        break;
      case 'Orange':
        switch (selected[1]) {
          case 'Orange':
            var redOrange = colorsTracery.flatten('#redAdj.capitalize# #orangeNoun#');
            var orangeRed = colorsTracery.flatten('#orangeAdj.capitalize# #redNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? redOrange : orangeRed);
            break;
          case 'Yellow':
            var orangeYellow = colorsTracery.flatten('#orangeAdj.capitalize# #yellowNoun#');
            var yellowOrange = colorsTracery.flatten('#yellowAdj.capitalize# #orangeNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? orangeYellow : yellowOrange);
            break;
          case 'Green':
            var orangeGreen = colorsTracery.flatten('#orangeAdj.capitalize# #greenNoun#');
            var greenorange = colorsTracery.flatten('#greenAdj.capitalize# #orangeNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? orangeGreen : greenorange);
            break;
          case 'Blue':
            var orangeBlue = colorsTracery.flatten('#orangeAdj.capitalize# #blueNoun#');
            var blueOrange = colorsTracery.flatten('#blueAdj.capitalize# #orangeNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? orangeBlue : blueOrange);
            break;
          case 'Violet':
            var orangeViolet = colorsTracery.flatten('#orangeAdj.capitalize# #violetNoun#');
            var violetOrange = colorsTracery.flatten('#violetAdj.capitalize# #orangeNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? orangeViolet : violetOrange);
            break;
          case 'Brown':
            var orangeBrown = colorsTracery.flatten('#orangeAdj.capitalize# #brownNoun#');
            var brownOrange = colorsTracery.flatten('#brownAdj.capitalize# #orangeNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? orangeBrown : brownOrange);
            break;
          case 'Black':
            var orangeBlack = colorsTracery.flatten('#orangeAdj.capitalize# #blackNoun#');
            var blackOrange = colorsTracery.flatten('#blackAdj.capitalize# #orangeNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? orangeBlack : blackOrange);
            break;
          case 'Grey':
            var orangeGrey = colorsTracery.flatten('#orangeAdj.capitalize# #greyNoun#');
            var greyOrange = colorsTracery.flatten('#greyAdj.capitalize# #orangeNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? orangeGrey : greyOrange);
            break;
          case 'White':
            var orangewhite = colorsTracery.flatten('#orangeAdj.capitalize# #whiteNoun#');
            var whiteOrange = colorsTracery.flatten('#whiteAdj.capitalize# #orangeNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? orangewhite : whiteOrange);
            break; 
        }
        break;
      case 'Yellow':
        switch (selected[1]) {
          case 'Red':
            var yellowRed = colorsTracery.flatten('#yellowAdj.capitalize# #redNoun#');
            var redYellow = colorsTracery.flatten('#redAdj.capitalize# #yellowNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowRed : redYellow);
            break;
          case 'Orange':
            var yellowOrange = colorsTracery.flatten('#yellowAdj.capitalize# #orangeNoun#');
            var orangeYellow = colorsTracery.flatten('#orangeAdj.capitalize# #yellowNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowOrange : orangeYellow);
            break;
          case 'Green':
            var yellowGreen = colorsTracery.flatten('#yellowAdj.capitalize# #greenNoun#');
            var greenyellow = colorsTracery.flatten('#greenAdj.capitalize# #yellowNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowGreen : greenyellow);
            break;
          case 'Blue':
            var yellowBlue = colorsTracery.flatten('#yellowAdj.capitalize# #blueNoun#');
            var blueyellow = colorsTracery.flatten('#blueAdj.capitalize# #yellowNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowBlue : blueyellow);
            break;
          case 'Violet':
            var yellowViolet = colorsTracery.flatten('#yellowAdj.capitalize# #violetNoun#');
            var violetyellow = colorsTracery.flatten('#violetAdj.capitalize# #yellowNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowViolet : violetyellow);
            break;
          case 'Brown':
            var yellowBrown = colorsTracery.flatten('#yellowAdj.capitalize# #brownNoun#');
            var brownyellow = colorsTracery.flatten('#brownAdj.capitalize# #yellowNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowBrown : brownyellow);
            break;
          case 'Black':
            var yellowBlack = colorsTracery.flatten('#yellowAdj.capitalize# #blackNoun#');
            var blackyellow = colorsTracery.flatten('#blackAdj.capitalize# #yellowNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowBlack : blackyellow);
            break;
          case 'Grey':
            var yellowGrey = colorsTracery.flatten('#yellowAdj.capitalize# #greyNoun#');
            var greyyellow = colorsTracery.flatten('#greyAdj.capitalize# #yellowNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowGrey : greyyellow);
            break;
          case 'White':
            var yellowwhite = colorsTracery.flatten('#yellowAdj.capitalize# #whiteNoun#');
            var whiteyellow = colorsTracery.flatten('#whiteAdj.capitalize# #yellowNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowwhite : whiteyellow);
            break; 
        }
        break;
      case 'Green':
        switch (selected[1]) {
          case 'Red':
            var greenRed = colorsTracery.flatten('#greenAdj.capitalize# #redNoun#');
            var redgreen = colorsTracery.flatten('#redAdj.capitalize# #greenNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greenRed : redgreen);
            break;
          case 'Orange':
            var greenOrange = colorsTracery.flatten('#greenAdj.capitalize# #orangeNoun#');
            var orangegreen = colorsTracery.flatten('#orangeAdj.capitalize# #greenNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greenOrange : orangeGreen);
            break;
          case 'Yellow':
            var greenYellow = colorsTracery.flatten('#greenAdj.capitalize# #yellowNoun#');
            var yellowGreen = colorsTracery.flatten('#yellowAdj.capitalize# #greenNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowGreen : greenYellow);
            break;
          case 'Blue':
            var greenBlue = colorsTracery.flatten('#greenAdj.capitalize# #blueNoun#');
            var blueGreen = colorsTracery.flatten('#blueAdj.capitalize# #greenNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greenBlue : blueGreen);
            break;
          case 'Violet':
            var greenViolet = colorsTracery.flatten('#greenAdj.capitalize# #violetNoun#');
            var violetGreen = colorsTracery.flatten('#violetAdj.capitalize# #greenNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greenViolet : violetGreen);
            break;
          case 'Brown':
            var greenBrown = colorsTracery.flatten('#greenAdj.capitalize# #brownNoun#');
            var brownGreen = colorsTracery.flatten('#brownAdj.capitalize# #greenNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greenBrown : brownGreen);
            break;
          case 'Black':
            var greenBlack = colorsTracery.flatten('#greenAdj.capitalize# #blackNoun#');
            var blackGreen = colorsTracery.flatten('#blackAdj.capitalize# #greenNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greenBlack : blackGreen);
            break;
          case 'Grey':
            var greenGrey = colorsTracery.flatten('#greenAdj.capitalize# #greyNoun#');
            var greyGreen = colorsTracery.flatten('#greyAdj.capitalize# #greenNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greenGrey : greyGreen);
            break;
          case 'White':
            var greenWhite = colorsTracery.flatten('#greenAdj.capitalize# #whiteNoun#');
            var whiteGreen = colorsTracery.flatten('#whiteAdj.capitalize# #greenNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greenWhite : whiteGreen);
            break; 
        }
        break;
      case 'Blue':
        switch (selected[1]) {
          case 'Red':
            var blueRed = colorsTracery.flatten('#blueAdj.capitalize# #redNoun#');
            var redBlue = colorsTracery.flatten('#redAdj.capitalize# #blueNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blueRed : redBlue);
            break;
          case 'Orange':
            var blueOrange = colorsTracery.flatten('#blueAdj.capitalize# #orangeNoun#');
            var orangeBlue = colorsTracery.flatten('#orangeAdj.capitalize# #blueNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blueOrange : orangeBlue);
            break;
          case 'Yellow':
            var blueYellow = colorsTracery.flatten('#blueAdj.capitalize# #yellowNoun#');
            var yellowBlue = colorsTracery.flatten('#yellowAdj.capitalize# #blueNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowBlue : blueYellow);
            break;
          case 'Green':
            var blueGreen = colorsTracery.flatten('#blueAdj.capitalize# #greenNoun#');
            var greenBlue = colorsTracery.flatten('#greenAdj.capitalize# #blueNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greenBlue : blueGreen);
            break;
          case 'Violet':
            var blueViolet = colorsTracery.flatten('#blueAdj.capitalize# #violetNoun#');
            var violetBlue = colorsTracery.flatten('#violetAdj.capitalize# #blueNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blueViolet : violetBlue);
            break;
          case 'Brown':
            var blueBrown = colorsTracery.flatten('#blueAdj.capitalize# #brownNoun#');
            var brownBlue = colorsTracery.flatten('#brownAdj.capitalize# #blueNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blueBrown : brownBlue);
            break;
          case 'Black':
            var blueBlack = colorsTracery.flatten('#blueAdj.capitalize# #blackNoun#');
            var blackBlue = colorsTracery.flatten('#blackAdj.capitalize# #blueNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blueBlack : blackBlue);
            break;
          case 'Grey':
            var blueGrey = colorsTracery.flatten('#blueAdj.capitalize# #greyNoun#');
            var greyBlue = colorsTracery.flatten('#greyAdj.capitalize# #blueNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blueGrey : greyBlue);
            break;
          case 'White':
            var blueWhite = colorsTracery.flatten('#blueAdj.capitalize# #whiteNoun#');
            var whiteBlue = colorsTracery.flatten('#whiteAdj.capitalize# #blueNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blueWhite : whiteBlue);
            break; 
        }
        break;
      case 'Violet':
        switch (selected[1]) {
          case 'Red':
            var violetRed = colorsTracery.flatten('#violetAdj.capitalize# #redNoun#');
            var redViolet = colorsTracery.flatten('#redAdj.capitalize# #violetNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? violetRed : redViolet);
            break;
          case 'Orange':
            var violetOrange = colorsTracery.flatten('#violetAdj.capitalize# #orangeNoun#');
            var orangeViolet = colorsTracery.flatten('#orangeAdj.capitalize# #violetNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? violetOrange : orangeViolet);
            break;
          case 'Yellow':
            var violetYellow = colorsTracery.flatten('#violetAdj.capitalize# #yellowNoun#');
            var yellowViolet = colorsTracery.flatten('#yellowAdj.capitalize# #violetNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowViolet : violetYellow);
            break;
          case 'Green':
            var violetGreen = colorsTracery.flatten('#violetAdj.capitalize# #greenNoun#');
            var greenViolet = colorsTracery.flatten('#greenAdj.capitalize# #violetNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greenViolet : violetGreen);
            break;
          case 'Blue':
            var violetBlue = colorsTracery.flatten('#violetAdj.capitalize# #blueNoun#');
            var blueViolet = colorsTracery.flatten('#blueAdj.capitalize# #violetNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blueViolet : violetBlue);
            break;
          case 'Brown':
            var violetBrown = colorsTracery.flatten('#violetAdj.capitalize# #brownNoun#');
            var brownViolet = colorsTracery.flatten('#brownAdj.capitalize# #violetNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? violetBrown : brownViolet);
            break;
          case 'Black':
            var violetBlack = colorsTracery.flatten('#violetAdj.capitalize# #blackNoun#');
            var blackViolet = colorsTracery.flatten('#blackAdj.capitalize# #violetNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? violetBlack : blackViolet);
            break;
          case 'Grey':
            var violetGrey = colorsTracery.flatten('#violetAdj.capitalize# #greyNoun#');
            var greyViolet = colorsTracery.flatten('#greyAdj.capitalize# #violetNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? violetGrey : greyViolet);
            break;
          case 'White':
            var violetWhite = colorsTracery.flatten('#violetAdj.capitalize# #whiteNoun#');
            var whiteViolet = colorsTracery.flatten('#whiteAdj.capitalize# #violetNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? violetWhite : whiteViolet);
            break; 
        }
        break;
      case 'Brown':
        switch (selected[1]) {
          case 'Red':
            var brownRed = colorsTracery.flatten('#brownAdj.capitalize# #redNoun#');
            var redbrown = colorsTracery.flatten('#redAdj.capitalize# #brownNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? brownRed : redbrown);
            break;
          case 'Orange':
            var brownOrange = colorsTracery.flatten('#brownAdj.capitalize# #orangeNoun#');
            var orangebrown = colorsTracery.flatten('#orangeAdj.capitalize# #brownNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? brownOrange : orangebrown);
            break;
          case 'Yellow':
            var brownYellow = colorsTracery.flatten('#brownAdj.capitalize# #yellowNoun#');
            var yellowbrown = colorsTracery.flatten('#yellowAdj.capitalize# #brownNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowbrown : brownYellow);
            break;
          case 'Green':
            var brownGreen = colorsTracery.flatten('#brownAdj.capitalize# #greenNoun#');
            var greenbrown = colorsTracery.flatten('#greenAdj.capitalize# #brownNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greenbrown : brownGreen);
            break;
          case 'Blue':
            var brownBlue = colorsTracery.flatten('#brownAdj.capitalize# #blueNoun#');
            var bluebrown = colorsTracery.flatten('#blueAdj.capitalize# #brownNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? bluebrown : brownBlue);
            break;
          case 'Violet':
            var violetBrown = colorsTracery.flatten('#violetAdj.capitalize# #brownNoun#');
            var brownViolet = colorsTracery.flatten('#brownAdj.capitalize# #violetNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? violetBrown : brownViolet);
            break;
          case 'Black':
            var brownBlack = colorsTracery.flatten('#brownAdj.capitalize# #blackNoun#');
            var blackbrown = colorsTracery.flatten('#blackAdj.capitalize# #brownNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? brownBlack : blackbrown);
            break;
          case 'Grey':
            var brownGrey = colorsTracery.flatten('#brownAdj.capitalize# #greyNoun#');
            var greybrown = colorsTracery.flatten('#greyAdj.capitalize# #brownNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? brownGrey : greybrown);
            break;
          case 'White':
            var brownWhite = colorsTracery.flatten('#brownAdj.capitalize# #whiteNoun#');
            var whitebrown = colorsTracery.flatten('#whiteAdj.capitalize# #brownNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? brownWhite : whitebrown);
            break; 
        }
        break;
      case 'Black':
        switch (selected[1]) {
          case 'Red':
            var blackRed = colorsTracery.flatten('#blackAdj.capitalize# #redNoun#');
            var redBlack = colorsTracery.flatten('#redAdj.capitalize# #blackNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blackRed : redBlack);
            break;
          case 'Orange':
            var blackOrange = colorsTracery.flatten('#blackAdj.capitalize# #orangeNoun#');
            var orangeBlack = colorsTracery.flatten('#orangeAdj.capitalize# #blackNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blackOrange : orangeBlack);
            break;
          case 'Yellow':
            var blackYellow = colorsTracery.flatten('#blackAdj.capitalize# #yellowNoun#');
            var yellowBlack = colorsTracery.flatten('#yellowAdj.capitalize# #blackNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowBlack : blackYellow);
            break;
          case 'Green':
            var blackGreen = colorsTracery.flatten('#blackAdj.capitalize# #greenNoun#');
            var greenBlack = colorsTracery.flatten('#greenAdj.capitalize# #blackNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greenBlack : blackGreen);
            break;
          case 'Blue':
            var blackBlue = colorsTracery.flatten('#blackAdj.capitalize# #blueNoun#');
            var blueBlack = colorsTracery.flatten('#blueAdj.capitalize# #blackNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blueBlack : blackBlue);
            break;
          case 'Violet':
            var violetBlack = colorsTracery.flatten('#violetAdj.capitalize# #blackNoun#');
            var blackViolet = colorsTracery.flatten('#blackAdj.capitalize# #violetNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? violetBlack : blackViolet);
            break;
          case 'Brown':
            var brownBlack = colorsTracery.flatten('#brownAdj.capitalize# #blackNoun#');
            var blackBrown = colorsTracery.flatten('#blackAdj.capitalize# #brownNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? brownBlack : blackBrown);
            break;
          case 'Grey':
            var blackGrey = colorsTracery.flatten('#blackAdj.capitalize# #greyNoun#');
            var greyBlack = colorsTracery.flatten('#greyAdj.capitalize# #blackNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blackGrey : greyBlack);
            break;
          case 'White':
            var blackWhite = colorsTracery.flatten('#blackAdj.capitalize# #whiteNoun#');
            var whiteBlack = colorsTracery.flatten('#whiteAdj.capitalize# #blackNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blackWhite : whiteBlack);
            break; 
        }
        break;
      case 'Grey':
        switch (selected[1]) {
          case 'Red':
            var greyRed = colorsTracery.flatten('#greyAdj.capitalize# #redNoun#');
            var redGrey = colorsTracery.flatten('#redAdj.capitalize# #greyNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greyRed : redGrey);
            break;
          case 'Orange':
            var greyOrange = colorsTracery.flatten('#greyAdj.capitalize# #orangeNoun#');
            var orangeGrey = colorsTracery.flatten('#orangeAdj.capitalize# #greyNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greyOrange : orangeGrey);
            break;
          case 'Yellow':
            var greyYellow = colorsTracery.flatten('#greyAdj.capitalize# #yellowNoun#');
            var yellowGrey = colorsTracery.flatten('#yellowAdj.capitalize# #greyNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowGrey : greyYellow);
            break;
          case 'Green':
            var greyGreen = colorsTracery.flatten('#greyAdj.capitalize# #greenNoun#');
            var greenGrey = colorsTracery.flatten('#greenAdj.capitalize# #greyNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greenGrey : greyGreen);
            break;
          case 'Blue':
            var greyBlue = colorsTracery.flatten('#greyAdj.capitalize# #blueNoun#');
            var blueGrey = colorsTracery.flatten('#blueAdj.capitalize# #greyNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blueGrey : greyBlue);
            break;
          case 'Violet':
            var violetGrey = colorsTracery.flatten('#violetAdj.capitalize# #greyNoun#');
            var greyViolet = colorsTracery.flatten('#greyAdj.capitalize# #violetNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? violetGrey : greyViolet);
            break;
          case 'Brown':
            var brownGrey = colorsTracery.flatten('#brownAdj.capitalize# #greyNoun#');
            var greyBrown = colorsTracery.flatten('#greyAdj.capitalize# #brownNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? brownGrey : greyBrown);
            break;
          case 'Black':
            var blackGrey = colorsTracery.flatten('#blackAdj.capitalize# #greyNoun#');
            var greyBlack = colorsTracery.flatten('#greyAdj.capitalize# #blackNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blackGrey : greyBlack);
            break;
          case 'White':
            var greyWhite = colorsTracery.flatten('#greyAdj.capitalize# #whiteNoun#');
            var whiteGrey = colorsTracery.flatten('#whiteAdj.capitalize# #greyNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greyWhite : whiteGrey);
            break; 
        }
        break;
      case 'White':
        switch (selected[1]) {
          case 'Red':
            var whiteRed = colorsTracery.flatten('#whiteAdj.capitalize# #redNoun#');
            var redWhite = colorsTracery.flatten('#redAdj.capitalize# #whiteNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? whiteRed : redWhite);
            break;
          case 'Orange':
            var whiteOrange = colorsTracery.flatten('#whiteAdj.capitalize# #orangeNoun#');
            var orangeWhite = colorsTracery.flatten('#orangeAdj.capitalize# #whiteNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? whiteOrange : orangeWhite);
            break;
          case 'Yellow':
            var whiteYellow = colorsTracery.flatten('#whiteAdj.capitalize# #yellowNoun#');
            var yellowWhite = colorsTracery.flatten('#yellowAdj.capitalize# #whiteNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? yellowWhite : whiteYellow);
            break;
          case 'Green':
            var whiteGreen = colorsTracery.flatten('#whiteAdj.capitalize# #greenNoun#');
            var greenWhite = colorsTracery.flatten('#greenAdj.capitalize# #whiteNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greenWhite : whiteGreen);
            break;
          case 'Blue':
            var whiteBlue = colorsTracery.flatten('#whiteAdj.capitalize# #blueNoun#');
            var blueWhite = colorsTracery.flatten('#blueAdj.capitalize# #whiteNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blueWhite : whiteBlue);
            break;
          case 'Violet':
            var violetWhite = colorsTracery.flatten('#violetAdj.capitalize# #whiteNoun#');
            var whiteViolet = colorsTracery.flatten('#whiteAdj.capitalize# #violetNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? violetWhite : whiteViolet);
            break;
          case 'Brown':
            var brownWhite = colorsTracery.flatten('#brownAdj.capitalize# #whiteNoun#');
            var whiteBrown = colorsTracery.flatten('#whiteAdj.capitalize# #brownNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? brownWhite : whiteBrown);
            break;
          case 'Black':
            var blackWhite = colorsTracery.flatten('#blackAdj.capitalize# #whiteNoun#');
            var whiteBlack = colorsTracery.flatten('#whiteAdj.capitalize# #blackNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? blackWhite : whiteBlack);
            break;
          case 'Grey':
            var greyWhite = colorsTracery.flatten('#greyAdj.capitalize# #whiteNoun#');
            var whiteGrey = colorsTracery.flatten('#whiteAdj.capitalize# #greyNoun#');
            setPaletteName(Boolean(Math.round(Math.random())) ? greyWhite : whiteGrey);
            break; 
        }
        break;          
    }    
  }, [colors]);

  const changeNumOfColors = (event) => {
    setNum(event.target.value);
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
              shrink: true,
            }}
            defaultValue={num}
            onChange={changeNumOfColors}
            style={{marginRight: 15,}}
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
