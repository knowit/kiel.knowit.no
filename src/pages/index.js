import React from 'react'
import Link from 'gatsby-link'
import BEMHelper from 'react-bem-helper'
import viewmodel from '../json'
import Paragraph from '../components/Paragraph'
import ButtonGroup from '../components/ButtonGroup'

const classes = new BEMHelper({
  name: 'content',
  prefix: 'c-',
})

const buttonClasses = new BEMHelper({
  name: 'button',
  prefix: 'c-',
})

const IndexPage = () => (
  <div>
    <div {...classes('', 'intro')}>
      <h1>{viewmodel.title}</h1>
      <Paragraph cssModfier="white">Tid: {viewmodel.event.date}</Paragraph>
      <Paragraph cssModfier="white">
        Sted: {viewmodel.event.city}, {viewmodel.event.country}
      </Paragraph>
      <ButtonGroup>
        <Link {...buttonClasses('', 'white')} to="/speakers/">
          Talere
        </Link>
        <Link {...buttonClasses('', 'white')} to="/schedule/">
          Skjema
        </Link>
      </ButtonGroup>
    </div>
    <div {...classes('', 'info')}>
      <h2>Informasjon</h2>
      <p>
        Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte selv som lager programmet. Våren 2018 vil den bli avholdt 27. april - 29. april 2018 i Kiel, Tyskland.
      </p>
      <p>
        Tidligere har vi besøkt Berlin, Istanbul, Madrid, Dublin, Svalbard, Reykjavik, Palma etc.
      </p>
      <p>
        Alle rom markert med 🎥 vil bli filmet.
      </p>

    </div>
  </div>
)

export default IndexPage
