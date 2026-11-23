
import React from 'react';
import { createRoot } from 'react-dom/client';
import Topography from './Topography.jsx';

import './Topography.css';
import './site-overrides.css';

function Background() {
  return (
    <Topography
      color="#7474749d"
      lineCount={24}
      lineWidth={1.15}
      majorLines
      elevation={1.05}
      foreground={0.28}
      scale={1}
      detail={0.38}
      tilt={34}
      speed={0.9}
      direction="forward"
      morph={0.22}
      glow={1}
      depthOfField={0.38}
      fog={0.42}
      brightness={0.5}
      opacity={0.82}
      mouseInteraction
      hoverEffect="lift"
      mouseRadius={1.15}
      mouseStrength={0.55}
      trail={0.28}
      parallax={1}
      clickEffect="pulse"
      markers="none"
      glitch={0}
      intro
      className="site-topography"
      style={{ width: '100%', height: '100%' }}
    />
  );
}

const mount = document.getElementById('topography-root');

if (mount) {
  createRoot(mount).render(<Background />);
}
