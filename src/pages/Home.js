// pages/Home.js

import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return <>
    <h2>Home</h2>
    <br/>
    <p className="center-p"><i>Welcome to my slice of the internet.</i></p>
    <br/>
    <p className="center-p">This website was 100% free to make and host on Github.</p>
    <br/>
    <p className="center-p">There are zero monthly fees if you have some technical skill. <NavLink to="/contact">Contact</NavLink> me if you want to learn how.</p>
    <br/>
    <p className="center-p">It's kinda empty right now, but a lot of my dev work is non-furry. My goal is to help the artists and creators who make the furry fandom easier to find and support, allowing us to keep the money we spend on furry merchandise to stay within the fandom where possible.</p>
    <br/>
    <p className="center-p"><i>Stop buying furry merch from corporations.</i></p>
    <br />
    <h2>Social Links</h2>
    <br/>
    <p><a target="_blank" rel="noreferrer" href="https://twitter.com/Delaxiox">Twitter</a></p>
    <br/>
    <p><a href="https://www.furaffinity.net/user/delaxiox">FurAffinity</a></p>
    <br/>
    <p><a target="_blank" rel="noreferrer" href="https://t.me/delaxiox">Telegram</a></p>
  </>; 
}

export default Home;