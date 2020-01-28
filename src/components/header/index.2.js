import React from 'react'

import { getUser } from './api';

export default function withServices(Component) {
  // console.log('dentro do hoc')
  const ComponentWithServices = props =>
    <Component service={{
      getUser
    }} {...props} />

  return ComponentWithServices
}