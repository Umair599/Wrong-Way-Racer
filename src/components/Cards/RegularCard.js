import { Card, CardActions, CardContent, CardHeader } from '@mui/material'
import PropTypes from 'prop-types'

import './regularCardStyle.scss'

function RegularCard({
  headerColor,
  plainCard,
  cardTitle,
  cardTitleStyle,
  id,
  cardSubtitle,
  content,
  cardHeaderStyle,
  action,
  footer,
  cardContainer,
  cardSubtitleStyle,
  ...rest
}) {
  const cardHeaderColor = headerColor ? headerColor : ''
  const plainCardClasses = plainCard ? 'card-plain' : ''
  const cardPlainHeaderClasses = plainCard ? 'card-plain-header' : ''

  return (
    <Card {...rest} className={`card ${plainCardClasses} ${cardContainer}`} id={id && `${id}-card`}>
      <CardHeader
        id={id && `${id}-card-header`}
        classes={{
          root: `card-header ${cardHeaderColor} ${cardPlainHeaderClasses}`,
          content: `${cardHeaderStyle ? cardHeaderStyle : ''}`,
          title: `${cardTitleStyle ? cardTitleStyle : 'card-title'}`,
          subheader: `${cardSubtitleStyle ? cardSubtitleStyle : 'card-subtitle'}`
        }}
        title={cardTitle}
        subheader={cardSubtitle}
        action={action}
      />
      <CardContent id={id && `${id}-card-content`}>{content}</CardContent>
      {footer !== undefined && <CardActions className="card-actions">{footer}</CardActions>}
    </Card>
  )
}

RegularCard.defaultProps = {
  headerColor: 'blue'
}

RegularCard.propTypes = {
  plainCard: PropTypes.bool,
  headerColor: PropTypes.oneOf(['orange', 'green', 'red', 'blue', 'purple', 'dodgerblue']),
  cardTitle: PropTypes.node,
  cardSubtitle: PropTypes.node,
  content: PropTypes.node,
  action: PropTypes.node,
  footer: PropTypes.node
}

export default RegularCard
