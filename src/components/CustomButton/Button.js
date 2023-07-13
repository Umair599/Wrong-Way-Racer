import { forwardRef } from 'react'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'

import './buttonStyle.scss'

const RegularButton = forwardRef(function MUIButton(
  { className, children, disabled, ...rest },
  ref
) {
  return (
    <Button
      ref={ref}
      tabIndex={disabled ? -1 : undefined}
      className={`${className} primary`}
      {...rest}
    >
      {children}
    </Button>
  )
})

RegularButton.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'cancel']),
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  floatRightMdUp: PropTypes.bool
}

export default RegularButton
