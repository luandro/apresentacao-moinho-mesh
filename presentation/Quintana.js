import React from 'react'
import { Image } from 'spectacle'
import theme from './theme'
export default () => (
  <div>
    <h2 style={{ color: theme.screen.colors.secondary }}>Quintana Libre</h2> 
    <Image rel="preload" style={{ height: 500 }} src={require('../assets/pres-quintana.jpg')} />
  </div>
)