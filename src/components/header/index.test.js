import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import Header from './index'
import Avatar from '../avatar'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn().mockImplementation(() => ({
    user: {
      login: 'mock login',
      avatar_url: 'mock url',
    }
  }))
}))

let wrapper

describe('snapshot of avatar', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Header />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('test"s of avatar', () => {
  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  afterAll(() => {
    wrapper = null;
  });

  it('should be a function', () => {
    expect(typeof Header).toBe('function')
  })

  it('should has className="header__container"', () => {
    expect(wrapper.props().className).toEqual('header__container')
  })

  it('should has className="header__container"', () => {
    // mount
    // expect(wrapper.children().props().className).toEqual('header__container')

    // shallow
    expect(wrapper.props().className).toEqual('header__container')
  })

  it('should has className="header__text" in user.login', () => {
    // mount
    // expect(wrapper.children().at(0).children().at(0).props().className).toEqual('header__text')

    // shallow
    expect(wrapper.children().at(0).props().className).toEqual('header__text')
  })

  it('should render the value of user.login', () => {
    // shallow
    expect(wrapper.children().at(0).text()).toEqual('mock login')
  })

  // only with shallow
  it('should has Avatar component', () => {
    expect(wrapper.children().at(1).find(Avatar)).toHaveLength(1)
  })

})
