import React from 'react'
import BEMHelper from 'react-bem-helper'

export const classes = new BEMHelper({
  name: 'code-of-conduct',
  prefix: 'c-',
});

const buttonClasses = new BEMHelper({
  name: 'button',
  prefix: 'c-',
});

class CodeOfConduct extends React.Component {
  constructor() {
    super()
    this.state = { showCodeOfConduct: false }
    this.toggleCodeOfConduct = this.toggleCodeOfConduct.bind(this)
  }

  toggleCodeOfConduct() {
    this.setState(prevState => ({
      showCodeOfConduct: !prevState.showCodeOfConduct,
    }))
  }

  render() {
    return (
      <div {...classes()}>
        <button onClick={this.toggleCodeOfConduct}>
          Code of Conduct
        </button>
        <p {...classes('text', this.state.showCodeOfConduct ? '' : 'hidden')}>
          Vi forventer at du respekterer andre deltakere, uavhengig av kjønn, etnisitet, religion, alder, legning, funksjonsevne eller andre aspekter knyttet til hvordan vi ser ut, kommer fra eller hvem vi er
        </p>
      </div>
    )
  }
}

export default CodeOfConduct
