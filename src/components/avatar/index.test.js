import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Avatar from './index'

let wrapper

describe('snapshot of avatar', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Avatar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('test"s of avatar', () => {
  beforeEach(() => {
    wrapper = mount(<Avatar />)
  })

  afterAll(() => {
    wrapper = null;
  });

  it('should be a function', () => {
    expect(typeof Avatar).toBe('function')
  })

  it('should to be img tag', () => {
    expect(wrapper.find('img')).toBeTruthy()
  })

  it('should has avatar class', () => {
    expect(wrapper.find('img').props().className).toEqual('avatar')
  })
})

describe('test"s props of avatar', () => {
  beforeEach(() => {
    // console.log('beforeEach')
    wrapper = mount(<Avatar src="link/para/test" alt="descricao do test" />)
  })

  it('should has avatar src props', () => {
    expect(wrapper.find('img').props().src).toEqual('link/para/test')
  })

  it('should has avatar alt props', () => {
    expect(wrapper.find('img').props().alt).toEqual('descricao do test')
  })
})
