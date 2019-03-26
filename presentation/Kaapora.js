import React from 'react'
import { Image } from 'spectacle'
import theme from './theme'
export default () => (
  <div style={{ display: 'flex', flexFlow: 'column', justifyContent: 'spread-around' }}>
    <Image rel="preload" style={{ height: 165 }} src={require('../assets/pre-kaapora.png')} />
    <h2 style={{ color: theme.screen.colors.primary }}>PLATAFORMA PARA APLICATIVOS SOCIAIS DECENTRALIZADOS</h2>
    <a style={{ color: theme.screen.colors.tertiary, textDecoration: 'none' }} href="https://kaapora.luandro.com" target="_blank">https://kaapora.luandro.com</a>
  </div>
)