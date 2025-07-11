import React from 'react';
import Particles from 'react-tsparticles';

const BinaryRainBackground = () => {
  return (
    <Particles
      id="binary-rain"
      options={{
        background: {
          color: {
            value: '#000000',
          },
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#00FF00',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 0.1,
            },
          },
          move: {
            direction: 'down',
            speed: 1,
            out_mode: 'out',
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default BinaryRainBackground;
