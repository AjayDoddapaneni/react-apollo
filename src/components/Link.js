import React, { Component } from 'react'

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.link.id} {this.props.link.description} {this.props.link.url} {this.props.link.createdAt}
        </div>
      </div>
    )
  }
}

export default Link
