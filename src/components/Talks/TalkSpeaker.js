import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby-link'
import { talksClasses } from './'
import Talk from './Talk'
import Person from '../Icons/Person';

const TalkSpeaker = ({ speaker, speakers }) => {
  console.log(speaker)
  return (
    <div {...talksClasses('speaker')}>
      <span {...talksClasses('speaker-image')}>{speaker.pic ? <img src={withPrefix(`/static/pics/${speaker.pic}`)} /> : <Person /> }</span>
      <span {...talksClasses('speaker-name')}>{speaker.name}</span>
    </div>
  )
}

TalkSpeaker.propTypes = {
  speaker: PropTypes.object.isRequired,
  speakers: PropTypes.array,
}

export default TalkSpeaker
