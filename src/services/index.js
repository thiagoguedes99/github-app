import React from 'react'

import { Nav } from '../components';

import { getUser } from './api';

// export default function withServices(Component) {
//   // console.log('dentro do hoc')
//   const ComponentWithServices = props =>
//     <Component service={{
//       getUser
//     }} {...props} />

//   return ComponentWithServices
// }

export default function withServices(Component) {

  const ComponentWithServices = props => (
    <>
      <Nav />
      <Component service={{
        getUser
      }} {...props} />
    </>
  )

  return ComponentWithServices
}