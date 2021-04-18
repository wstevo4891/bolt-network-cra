import React from 'react'
import { shallow, mount, render } from 'enzyme'

import MainContainer from '../MainContainer'

describe('<MainContainer />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      children: [],
      setSlideLength: jest.fn(),
      slideLength: null,
    }
  })

  describe('with default props', () => {
    beforeEach(() => {
      wrapper = shallow(<MainContainer {...props} />)
    })

    it('should not render', () => {
      expect(wrapper.exists('.main-container')).toBe(false)
    })

    it('should call setSlideLength', () => {
      expect(props.setSlideLength).toHaveBeenCalled()
    })
  })

  describe('when slideLength is defined', () => {
    beforeEach(() => {
      props.slideLength = 6
      wrapper = shallow(<MainContainer {...props} />)
    })

    it('should render', () => {
      expect(wrapper.find('.main-container').exists()).toBe(true)
    })

    it('should match inline snapshot', () => {
      expect(wrapper).toMatchInlineSnapshot()
    })
  })
})
