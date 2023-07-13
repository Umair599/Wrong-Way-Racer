import { Settings } from '@mui/icons-material'
import ImageIcon from '@mui/icons-material/Image'
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

import RegularCard from '../../components/Cards/RegularCard'
import Button from '../../components/CustomButton/Button'

import './styles/playersavailable.scss'

const PlayersAvailable = () => {
  const handleSettingsBtnClick = () => alert('Settings Btn Click')
  const participantArray = [
    'Skylar Baptista',
    'Wilson Rosser',
    'Leo Aminoff',
    'Livia Bator',
    'Ahmad Dias',
    'Brandon Dokiis'
  ]

  return (
    <RegularCard
      cardTitle={
        <Button onClick={() => handleSettingsBtnClick()}>
          <Settings /> &nbsp; Settings
        </Button>
      }
      content={
        <List className="participant-list">
          {participantArray.map((participant) => (
            <ListItem key={participant} className="participant-list-item">
              <ListItemAvatar className="participant-list-item-avatar">
                <ImageIcon />
              </ListItemAvatar>
              <ListItemText className="participant-list-item-text" primary={participant} />
            </ListItem>
          ))}
        </List>
      }
    />
  )
}

export default PlayersAvailable
