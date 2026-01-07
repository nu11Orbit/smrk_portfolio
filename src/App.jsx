import React from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Dock, Navbar, Welcome } from '#components';
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Photos } from '#windows';
import Home from '#components/Home';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photos />
    </main>
  )
}

export default App