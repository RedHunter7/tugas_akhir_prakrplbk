import React from 'react'
import { Button, Link } from 'rebass'
import PropTypes from 'prop-types'

const MyButton = (props) => {
  let children = props.children
  if (props.href) {
    const linkText = (
      <Link href={props.href} color='white'
      display='block' width='100%'
      sx={{textDecoration: 'none'}}>
        {props.children}
      </Link>
    )
    children = linkText
  }

  return <Button backgroundColor={props.bgColor}
    href={props.href}
    onClick={props.onClick}
    sx={{
      ':hover': {
        backgroundColor: props.hoverBgColor,
      }
    }}>
    {children}
  </Button>
}

MyButton.defaultProps = {
  bgColor: 'black',
  hoverBgColor: 'tomato',
  onClick: null,
  href: null
};

MyButton.propTypes = {
  onClick: PropTypes.func,
  bgColor: PropTypes.string.isRequired,
  hoverBgColor: PropTypes.string.isRequired,
  href: PropTypes.string,
  children: PropTypes.string.isRequired
};

export { MyButton }