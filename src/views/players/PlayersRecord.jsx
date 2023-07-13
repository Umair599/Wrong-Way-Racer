import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material'

import RegularCard from '../../components/Cards/RegularCard'

import './styles/playersrecord.scss'

const PlayersRecord = () => {
  const participantRecordArray = [
    { name: 'Miracle Levin', record: '2:44', rank: '1st' },
    {
      name: 'Lindsey Bergson',
      record: '2:49',
      rank: '2nd',
      detailInfo: { gamePlayed: '#456', worstRecord: '4:65', highestRank: '1st' }
    },
    { name: 'Madelyn Levin', record: '2:54', rank: '3rd' }
  ]

  return (
    <RegularCard
      cardTitle={
        <Typography noWrap={true} variant="h4">
          3:44
        </Typography>
      }
      headerColor="record-card-header"
      content={
        <List className="participant-record-list">
          {participantRecordArray.map((participantRecord) => (
            <ListItem
              key={participantRecord.record}
              secondaryAction={
                <Grid container direction="row" className="record-rank-info">
                  <Grid direction="column">
                    <Typography variant="subtitle1" align="center">
                      Record
                    </Typography>
                    <Typography variant="subtitle2" align="center">
                      {participantRecord.record}
                    </Typography>
                  </Grid>
                  <Grid direction="column">
                    <Typography variant="subtitle1" align="center">
                      Rank
                    </Typography>
                    <Typography variant="subtitle2" align="center">
                      {participantRecord.rank}
                    </Typography>
                  </Grid>
                </Grid>
              }
            >
              <ListItemText primary={participantRecord.name} />
            </ListItem>
          ))}
        </List>
      }
    />
  )
}

export default PlayersRecord
