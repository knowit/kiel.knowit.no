import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import BEMHelper from 'react-bem-helper'

import Header from '../components/Header'
import './index.css'
import viewmodel from '../json';

export const classes = new BEMHelper({
  name: 'content',
  prefix: 'c-',
})

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
        />
      </Helmet>
      {children()}
      <div className="google-maps-wrapper">
        <div className="google-maps-blocker" />
          <div className="google-maps-content">
            <h1>Lokasjon</h1>
            <h3>Colorline Oslo-Kiel</h3>
            <h3>Kiel</h3>
          </div>
        <iframe
          className="google-maps"
          src={viewmodel.event.gmapsUrl}
          frameborder='0'
         />
        </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
