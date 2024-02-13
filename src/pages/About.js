// pages/About.js

import React from 'react';
import delaPFP from '../public/assets/dela-01.webp'; 
import delaRef from '../public/assets/dela-ref-2023.webp'; 

function About() {
  return <>
    <h2>About Delaxiox</h2>
    <br/>
    <img className="about-pfp" src={delaPFP} alt="Headshot illustration of a gothic punk husky dog" />
    <br/>
    <p className="center-p"><i>Sharp, edgy, punk dog on the outside. Kind-hearted soul on the inside.</i></p>
    <br/>
    <p>Dela has gone through multiple renditions, backstories, lore changes, etc - to the point that I often point to the Spider-verse as a good example of how to think about him. He's had a full gothic part-vampire arc, the obvious werewolf arc, chibi Dela, street punk / Jet Set Radio-esque styled Dela, and who could forget raver Dela.</p>
    <br/>
    <p>That being said, in a nutshell, Dela's aesthetic should represent a blend of punk and gothic styles with his 'playful' side being only an undertone. He is not your typical husky character that is "10 cups of coffee" hyper and ready to bounce off the walls, but it's in his blood to be a bit goofy sometimes. Accompaning elements sprinkled in often come from hacker culture, video game culture, anti-facist culture, and emo / scene culture.</p>
    <br/>
    <p>There are a few "rules" that define Dela, regarding how he is drawn, what aesthetic he is portrayed in, or what setting he is found in.</p>
    <br/>
    <ol>
      <li>90% of the time will have a 'mischevious' or 'grumpy' in expression.</li>
      <li>Dela wears a lot of 'darker' clothing, very rarely ever wearing anything that isn't black, red, or white.</li>
      <li>He always has red-tipped black spikey hair, ranging from messy scene-kid hair to a raver's mowhawk.</li>
      <li>He always wears a skull-print bandana (or a desert scarf in fantasy settings).</li>
      <li>His tattoos are artistic liberty and not pixel perfect designs.</li>
      <li>Dela will always have piercings. Snakebites. Nostril. Two loops on right eyebrow. </li>
      <li>Big tail. Make that thing curly and fluffy.</li>
      <li>Glasses are not mandatory.</li>
    </ol>
    <br/>
    <a target="_blank" rel="noreferrer" href={delaRef}><img className="about-ref" src={delaRef} alt="Reference Sheet of Dela" /></a>
    <br/>
    <p className="center-p">Please do not use Dela as your character. I'll draw you your own character if you just ask.</p>
    <br/>
    
    <p className="center-p"><small>This section will be more fleshed out at a later time.</small></p>
    <br/>
    <p></p>
    <br/>
    <br/>
    <h2>About Me</h2>
    <br/>
    <p><i>I only exist as long as you think about me.</i></p>
    <br/>
    <div className="all-left-paragraphs">
      <p>I've been a furry since 2001 - and through the years, I've met so many incredible people and fallen in love with the community.</p>
      <br/>
      <p>To pay the bills, I grind the ol' 9 to 5 as a web dev, marketing others. For fun, I'm a digital dog with a punk attitude that wants to really <i>fight</i> for some change in the world. In my free time, all I my soul wants to do is create a better world.</p>
      <br/>
      <p>As a military kid, my family moved around quite often. With that, comes having to find a new friend group everytime you move somwhere new.</p>
      <br/>
      <p>Luckily, as internet technology was growing alongside me, I started to play online games like Runescape, Maplestory, Diablo 2, and many others as they came out - giving me a way to stay connected with friends no matter where we ended up.</p>
      <br/>
      <p>One day, while looking for new games, I stumbled upon Furcadia and thus I fell into the rabbit hole.</p>
      <br/>
      <p>Furcadia not only introduced me to things like pixel art, roleplaying, storytelling, world building, and programming - it also introduced to me the concept of what a furry was, though I didn't realize until later that furries existed outside of Furcadia.</p>
      <br/>
      <p>Time went by and eventually people started moving from Furcadia to Second Life, only bringing our characters to life even further. I also learned a bit about 3D modeling, texturing, and even more programming from making in-game video game replicas of memorable weapons.</p>
      <br/>
      <p>As I moved through higher education and started making a bit more money, I was finally able to start exploring in-person fur meets, get a suit, and meet locals who also loved our community.</p>
      <br/>
      <p>I've been a furry for over two decades now, but I've really only been able to connect with others in person as an adult. In a way, I only want to reclaim the days I missed out on.</p>
      <br/>
      <p>These days, I contribute to the fandom by assisting people with implementing technology so they can get back to doing what they are good at - and hopefully we can make even greater things together.</p>
    </div>
    <br/>
    <p>Ultimately, Dela is my escapism from the daily grind. I don't like talking about myself that much, but it's all here now.</p>
    <br/>
    <p><i>Just call me Dela.</i></p>
  </>;
}

export default About;