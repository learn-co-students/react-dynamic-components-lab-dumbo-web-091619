//your code here
import React, { Component } from 'react';

export default class Comment extends Component {
  render(prop) {
    return (
      <div className="comment">{this.props.commentText}</div>
    )
  }
}
