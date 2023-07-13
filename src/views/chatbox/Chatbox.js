import { Grid, TextField } from '@mui/material'

import RegularCard from '../../components/Cards/RegularCard'
import Button from '../../components/CustomButton/Button'

import './styles/chatbox.scss'

const ChatBox = () => {
  const participantChat = [
    { name: 'Miracle Levin', newjoin: true },
    { name: 'Skylar Baptosta', message: 'how you doing mate' },
    { name: 'Wilson Rosser', message: 'Not bad' },
    { name: 'Ahmad Dias', message: 'did you win last round' },
    { name: 'Skylar Baptosta', message: 'yes, headed for 2:30' },
    { name: 'Livia', message: 'wow Cool!' }
  ]
  const sendMessage = () => alert('Message Sent')
  return (
    <Grid className="chat-box">
      <RegularCard
        content={participantChat.map((chat, index) => (
          <div key={index} className="participant-messages">
            {chat.newJoin && <span>{chat.name} Has Joined the Game</span>}
            {chat.message && (
              <span>
                {chat.name}: {chat.message}
              </span>
            )}
            {index === participantChat.length - 1 && <span>The Game Start in 6...</span>}
          </div>
        ))}
        footer={
          <Grid container justifyContent="center" alignItems="center">
            <Grid md={9}>
              <TextField
                className="text-field-style"
                placeholder="..."
                size="small"
                variant="outlined"
              />
            </Grid>
            <Grid md={3}>
              {' '}
              <Button className="" onClick={() => sendMessage()}>
                {' '}
                Send{' '}
              </Button>
            </Grid>
          </Grid>
        }
      />
    </Grid>
  )
}

export default ChatBox
