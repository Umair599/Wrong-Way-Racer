import { Grid } from '@mui/material'

import ChatBox from './views/chatbox/Chatbox'
import WrongWayRacer from './views/PixiGame/WrongWayRacer'
import PlayersAvailable from './views/players/PlayersAvailable'
import PlayersRecord from './views/players/PlayersRecord'

import './app.scss'

const App = () => {
  return (
    <Grid container spacing={2} className="app-main-container">
      <Grid item>
        <Grid item container md={12} lg={12}>
          <WrongWayRacer />
        </Grid>
        <Grid item container>
          <Grid md={4} lg={4} item>
            <PlayersRecord />
          </Grid>
          <Grid md={4} lg={4} item>
            <ChatBox />
          </Grid>
          <Grid md={4} lg={4} item>
            <PlayersAvailable />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
