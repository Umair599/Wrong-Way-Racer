import { useCallback, useEffect } from 'react'
import {
  AnimatedSprite,
  Container,
  Graphics,
  Sprite,
  Stage,
  useApp,
  withFilters
} from '@inlet/react-pixi'
import * as PIXI from 'pixi.js'

import CarCenter from './assets/cars/car_center.png'

const WrongWayRacer = () => {
  const app = useApp()
  const Filters = withFilters(Container, {
    blur: PIXI.filters.BlurFilter
  })


  useEffect(() => {
    app.loader.add('player', 'assets/BlackOut.png')
    app.loader.add('enemy1', 'assets/RedStrip.png')
    app.loader.add('enemy2', 'assets/BlueStrip.png')
    app.loader.add('enemy3', 'assets/GreenStrip.png')
    app.loader.add('enemy4', 'assets/PinkStrip.png')
    app.loader.add('enemy5', 'assets/WhiteStrip.png')
  }, [])
  if (frames.length === 0) {
    return null
  }
  const draw = useCallback((g) => {
    g.beginFill(0x0033cc, 1)
    g.lineStyle(4, 0xff0000, 1)
    g.drawRect(250, 150, 150, 120)
    g.endFill()
  }, [])
  function onkeydown(ev) {
    switch (ev.key) {
      case 'ArrowLeft':
      case 'a':
        player.v.x = -player.speed
        pressed['left'] = true
        break

      case 'ArrowRight':
      case 'd':
        player.v.x = player.speed
        pressed['right'] = true
        break

      case 'ArrowUp':
      case 'w':
        player.v.y = -player.speed
        pressed['up'] = true
        break

      case 'ArrowDown':
      case 's':
        player.v.y = player.speed
        pressed['down'] = true
        break
    }
  }
  function onkeyup(ev) {
    switch (ev.key) {
      case 'ArrowLeft':
      case 'a':
        player.v.x = pressed['right'] ? player.speed : 0
        pressed['left'] = false
        break

      case 'ArrowRight':
      case 'd':
        player.v.x = pressed['left'] ? -player.speed : 0
        pressed['right'] = false
        break

      case 'ArrowUp':
      case 'w':
        player.v.y = pressed['down'] ? player.speed : 0
        pressed['up'] = false
        break

      case 'ArrowDown':
      case 's':
        player.v.y = pressed['up'] ? -player.speed : 0
        pressed['down'] = false
        break
    }
  }

  return (
    <Stage
      options={{
        backgroundColor: 0x10bb99,
        antialias: false
      }}>
      <AnimatedSprite
        width={200}
        height={150}
        anchor={0.5}
        animationSpeed={0.5}
        isPlaying={true}
        loop={false}
      />

      {/* <Text text="Hello World"  /> <Filters>

      <Sprite image={CarCenter} x={50} y={50}/></Filters>  <Graphics draw={draw}/>*/}
    </Stage>
  )
}

export default WrongWayRacer
