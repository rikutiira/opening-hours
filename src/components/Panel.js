import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as styles from 'styles'

const StyledPanel = styled.div`
  background: ${styles.colors.white};
  padding: ${styles.sizes.large};
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const Panel = ({ children, style }) => {
  return (
    <StyledPanel style={style}>
      {children}
    </StyledPanel>
  )
}

Panel.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object
}

export default Panel