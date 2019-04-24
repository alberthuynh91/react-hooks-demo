import React, { Component } from 'react'

export class WithoutHooks extends Component {
  constructor() {
    super()
    this.state = {
      photo: null

    }
  }

  componentDidMount() {
    fetch('https://random.dog/woof.json')
    .then((data) => data.json())
    .then(({ url }) => this.setState({ photo: url }))
  }

  render() {
    return (
      <div>
        here's a photo of a dog, yo. implemented with0ut h00kz
        {this.state.photo && <div><img src={this.state.photo} alt='dawgz' width='500px'/></div>}
      </div>
    )
  }
}

export default WithoutHooks