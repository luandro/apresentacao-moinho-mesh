import React from 'react'
import { Image } from 'spectacle'
import theme from './theme'
export default () => (
  <div style={{ position: 'fixed', bottom: 0, left: 0, minWidth: '100%', minHeight: '100%', background: `url(${require('../assets/pre-terra.jpg')})`, backgroundSize: 'cover'}}>
    <Image style={{ height: 165 }} src="https://d33wubrfki0l68.cloudfront.net/faeaaf0db78d772ebb7bc1bfa6af8f1b8bcbc624/4c89b/assets/hermies.png" />
    <h2 style={{ color: 'white', textShadow: '1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC' }}>Scuttlebutt</h2>
    <a style={{ color: theme.screen.colors.tertiary, textDecoration: 'none' }} href="https://www.scuttlebutt.nz/" target="_blank">https://www.scuttlebutt.nz</a>
  </div>
)