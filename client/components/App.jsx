import React from 'react'

import ThingListContainer from '../containers/ThingListContainer'
import ThingDetailContainer from '../containers/ThingDetailContainer'
import HomePage from './containers/HomePage'

export default () => {
  return (
    <div>
      <HomePage />
      <ThingListContainer />
      <ThingDetailContainer />
    </div>
  )
}
