import React from 'react'
import { shallow } from 'enzyme'

import Step from './index'

describe('Step component', () => {
  const props = {
    title: '',
    handleClick: () => { },
  }

  describe('Step component initial', () => {
    const step = shallow(<Step {...props} />)

    it('renders properly', () => {
      expect(step).toMatchSnapshot()
    })
  })

  describe('Step component with props', () => {
    const mockClickHandle = jest.fn();

    const nextProps = {
      title: 'Test',
      handleClick: mockClickHandle,
    }
    const step = shallow(<Step {...nextProps} />)

    it('renders label', () => {
      expect(step.find('Label')).toHaveLength(1)
    })

    it('renders icon button', () => {
      expect(step.find('input[type="button"]')).toHaveLength(1)
    })

    describe('when clicking the icon button', () => {
      step.find('input[type="button"]').simulate('click', {
        preventDefault: () => { },
      })

      it('calls the props.clickHandle', () => {
        expect(mockClickHandle).toHaveBeenCalledTimes(1)
      })
    })
  })
})
