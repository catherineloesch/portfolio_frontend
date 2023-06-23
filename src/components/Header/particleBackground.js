import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"
import { useCallback } from "react"

const ParticleBackground = () => {
     const particlesInit = useCallback(async (engine) => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        //console.log(container);
    }, []);
  return (
    <div className='particles-container'>
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{
            
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%",
                margin: "0",
                padding: "0",
                zIndex: "0"
              
        }}
        options={{
            fullScreen: {
                enable: false
              },
            background: {
                color: "transparent",
            },
            fpsLimit: 60,
            interactivity: {
                detectsOn: "canvas",
                events: {
                    resize: true,
                    onhover: {
                        enable: true,
                        mode: "bubble"
                    }
                },
            },
            particles: {
                color: {
                    value: "ffffff"
                },
                number: {
                    density: {
                        enable: true,
                        area: 1080
                    },
                    limit: 0,
                    value: 300,
                },
                opacity: {
                    animation: {
                        enable: true,
                        minimumValue: 0.05,
                        speed: 1,
                        synch: false
                    },
                    random: {
                        enable: true,
                        minimumValue: 0.05,

                    },
                    value: 1
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: {
                        enable: true,
                        minimumValue: 0.5
                    },
                    value: 2.5,
                },
                move: {
                    enable: true,
                    direction: "none",
                    random: true,
                    straight: false,
                    speed: 0.1,
                    bounce: false,
                    out_mode: "out",
                    attract: {
                                            enable: false,
                                            rotateX: 600,
                                            rotateY: 600
                                        }
                }
            }



        }}
        />
      
    </div>
  )
}

export default ParticleBackground
