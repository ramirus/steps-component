import React from 'react'
import { shallow } from 'enzyme'
import Step from './index'

describe('Step component', () => {
  const props = {
    title: '',
    clickHandle: () => {},
  }

  describe('Step component initial', () => {
    const step = shallow(<Step {...props} />)

    it('renders properly', () => {
      expect(step).toMatchSnapshot()
    })
  })
})
