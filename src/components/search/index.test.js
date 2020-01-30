import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import Search from './index'

let wrapper

describe('snapshot of avatar', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Search />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('test"s of search', () => {
  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  afterAll(() => {
    wrapper = null;
  });

  it('should be a function', () => {
    expect(typeof Search).toBe('function')
  })

  it('should has className="search__container"', () => {
    expect(wrapper.props().className).toEqual('search__container')
  })

  it('should has onde input in form', () => {
    expect(wrapper.children().at(0).find('input')).toHaveLength(1)
  })

  it('should has the class search__input in input', () => {
    expect(wrapper.children().at(0).props().className).toEqual('search__input')
  })

  it('should to change the value of input', () => {
    expect(wrapper.children().at(0).props().value).toEqual('')

    wrapper.children().at(0).simulate('change', { target: { value: 'thiago' } })

    expect(wrapper.children().at(0).props().value).toEqual('thiago')
  })
})

describe('test of props ans events search', () => {
  const myClick = jest.fn();

  const eventChange = {
    preventDefault: jest.fn(),
    target: {
      value: 'thiago'
    }
  }
  
  const eventSubmit = {
    preventDefault: jest.fn(),
    key: 'Enter',
    target: {
      value: 'thiago'
    }
  }

  beforeEach(() => {
    wrapper = shallow(<Search onSubmit={myClick} />)
  })

  it('should to change the onSubmit', () => {
    wrapper.children().at(0).simulate('change', eventChange)

    wrapper.find('form').simulate('submit', eventSubmit)
    
    expect(myClick).toBeCalledWith('thiago')
  })

})
