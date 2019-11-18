import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledAspectRatioOuter = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: ${props => props.height};
  position: relative;
`

const StyledAspectRatioInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const getHeight = ratio => {
  const [width, height] = ratio.split(':')

  return `${(height / width) * 100}%`
}

const AspectRatio = ({ children, ratio }) => {
  const height = getHeight(ratio)

  return (
    <StyledAspectRatioOuter height={height}>
      <StyledAspectRatioInner>
        {children}
      </StyledAspectRatioInner>
    </StyledAspectRatioOuter>
  )
}

AspectRatio.propTypes = {
  children: PropTypes.any.isRequired,
  ratio: PropTypes.string.isRequired
}

export default AspectRatio
