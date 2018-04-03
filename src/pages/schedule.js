import React from 'react'
import Link from 'gatsby-link'
import BEMHelper from 'react-bem-helper'
import viewmodel from '../json'
import Paragraph from '../components/Paragraph'
import ButtonGroup from '../components/ButtonGroup'
import Slot from '../components/Slot'

const classes = new BEMHelper({
  name: 'content',
  prefix: 'c-',
})

const buttonClasses = new BEMHelper({
  name: 'button',
  prefix: 'c-',
})

class SchedulePage extends React.Component {
  constructor() {
    super()
    this.onDayClick = this.onDayClick.bind(this)
    this.state = {
      activeIndex: 0,
    }
  }

  onDayClick(evt, activeIndex) {
    evt.preventDefault()
    this.setState({ activeIndex })
  }
  render() {
    const activeDay =
      viewmodel && viewmodel.schedules[this.state.activeIndex]
        ? viewmodel.schedules[this.state.activeIndex]
        : undefined
    if (!activeDay || !activeDay.day) {
      return <span>Her skjedde noe feil gitt...</span>
    }
    return (
      <div {...classes('', 'schedule')}>
        <h1>Skjema</h1>
          <ButtonGroup>
            <Link {...buttonClasses('', 'white')} to="/">
              Forside
            </Link>
            <Link {...buttonClasses('', 'white')} to="/speakers/">
              Talere
            </Link>
          </ButtonGroup>
        <ButtonGroup>
          {viewmodel.schedules.map((day, index) => (
            <button
              onClick={evt => this.onDayClick(evt, index)}
              {...buttonClasses()}
            >
              {day.day}
            </button>
          ))}
        </ButtonGroup>
        <div {...classes('container')}>
          {activeDay.collections.map((collection, index) => (
            <Slot collection={collection} />
          ))}
        </div>
      </div>
    )
  }
}

export default SchedulePage
