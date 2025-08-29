// pages/Credits.js

import React from 'react';
import delaPunkImg from '../public/assets/dela-punk-fullbody.webp'; 

function Credits() {
  return <>
    <h2>Credits</h2>
    <p  className="center-p"><i><small>Always support your creatives.</small></i></p>
    <br/><br/>
    <p><a target="_blank" rel="noreferrer" href={delaPunkImg}  className="center-p">Dela - Punk Full Body</a> by <a target="_blank" rel="noreferrer" href="https://bunnymothmartyr.carrd.co/">BUNNYMOTHMARTYR</a></p>
    <br/>
    <p><a target="_blank" rel="noreferrer" href="https://icons8.com/icon/9201/dog-paw"  className="center-p">Paw</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a></p>
    
  </>; 
}

export default Credits;