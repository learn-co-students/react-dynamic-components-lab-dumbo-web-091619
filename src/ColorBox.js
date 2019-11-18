import React, { Component } from 'react'

const renderAnotherColorBox = (currentOpactiy) => {
  if (currentOpactiy > 0.2) {
    return (<ColorBox opacity={currentOpactiy - 0.1} />)
  } else {
    return null
  }
}

export default class ColorBox extends Component {
  render () {
    return (
      <div className='color-box' style={{ opacity: this.props.opacity }}>
        {/* your conditional code here! */}
        {renderAnotherColorBox(this.props.opacity)}
      </div>
    )
  }
}
