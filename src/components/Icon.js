import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AspectRatio from './AspectRatio'
import { ReactComponent as Time } from 'assets/icons/time.svg';

const StyledIcon = styled.div`
  display: block;
  width: ${props => props.size};

  .iconOuter {
    display: block;
    width: 100%;
    height: 0;
    position: relative;

    .iconInner {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }

  svg {
    display: block;
  }

  svg,
  svg * {
    fill: ${props => {
      return props.color;
    }}
  }
`

const icons = {
  time: {
    component: Time,
    ratio: '1:1'
  }
}

const Icon = ({ name, color, size }) => {
  const IconComponent = icons[name].component

  return (
    <StyledIcon color={color} size={size}>
      {/* Set height using aspect ratio trick to fix SVG rendering issues for IE11 */}
      <AspectRatio ratio={icons[name].ratio}>
        <IconComponent />
      </AspectRatio>
    </StyledIcon>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
}

Icon.defaultProps = {
  color: 'inherit',
  size: '100%'
}

export default Icon
