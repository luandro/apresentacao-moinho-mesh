import React from 'react'
import { Image } from 'spectacle'
import theme from './theme'
export default () => (
  <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'spread-around' }}>
    <Image rel="preload" style={{ height: 190 }} src={require('../assets/pre-moinho-mesh.jpg')} />
    <Image rel="preload" style={{ height: 500 }} src={require('../assets/pres-primeiro-no.jpg')} />
  </div>
)