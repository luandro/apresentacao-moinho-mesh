import React from 'react'
import { Image } from 'spectacle'
import theme from './theme'
export default () => (
  <div>
    <h2 style={{ color: theme.screen.colors.primary }}>Plano 1</h2> 
    <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'spread-around' }}>
      <Image style={{ height: 400 }} src={require('../assets/pre-plano-1.jpg')} />
      <Image style={{ height: 400 }} src={require('../assets/pre-plano-1.1.jpg')} />
    </div>
  </div>
)