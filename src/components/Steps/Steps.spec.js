import React from 'react'
import { shallow } from 'enzyme'
import Steps from './index'

describe('Steps container', () => {
  const props = {
    steps: [],
    current: 0,
  }

  describe('Steps container initial', () => {
    const steps = shallow(<Steps {...props} />)

    it('renders properly', () => {
      expect(steps).toMatchSnapshot()
    })

    it('not render <Step /> if "steps" prop is empty', () => {
      expect(steps.find('Step')).toHaveLength(0)
    })
  })

  describe('Steps container has one child', () => {
    const nextProps = {
      ...props,
      steps: [
        {
          label: 'Design',
        },
      ]
    }

    const steps = shallow(<Steps {...nextProps} />)

    it('not render <Step /> if "steps" prop length is 1', () => {
      expect(steps.find('Step')).toHaveLength(0)
    })
  })

  describe('Steps container render <Step />', () => {
    const nextProps = {
      ...props,
      steps: [
        {
          label: 'Design',
        },
        {
          label: 'Build',
        },
        {
          label: 'Launch',
        },
      ]
    }

    const steps = shallow(<Steps {...nextProps} />)

    it('render <Step /> components', () => {
      expect(steps.find('Step')).toHaveLength(nextProps.steps.length)
    })
  })

  describe('Max steps props length in Steps container', () => {
    const nextProps = {
      ...props,
      steps: [
        {
          label: 'Design',
        },
        {
          label: 'Build',
        },
        {
          label: 'Launch',
        },
        {
          label: 'Launch 1',
        },
        {
          label: 'Launch 2',
        },
        {
          label: 'Launch 3',
        },
      ],
    }

    const steps = shallow(<Steps {...nextProps} />)

    it('If steps props length > 5 Steps container render only 5 <Step /> components', () => {
      expect(steps.find('Step')).toHaveLength(5)
    })
  })

  describe('Click logic in Steps', () => {
    const mockHandleClick = jest.fn();

    const nextProps = {
      ...props,
      steps: [
        {
          label: 'Design',
        },
        {
          label: 'Build',
        },
        {
          label: 'Launch',
        },
      ],
      handleClick: mockHandleClick,
    }

    const steps = shallow(<Steps {...nextProps} />)
    const firstStep = steps.find('Step').first().getElement().props;

    it('Click on current step will not fire handleClick prop', () => {
      firstStep.handleClick(nextProps.current)
      expect(mockHandleClick).toHaveBeenCalledTimes(0)
    })

    it('Click on step over a step will not fire handleClick prop', () => {
      firstStep.handleClick(nextProps.current + 2)
      expect(mockHandleClick).toHaveBeenCalledTimes(0)
    })

    it('Click on next step will fire handleClick prop', () => {
      firstStep.handleClick(nextProps.current + 1)
      expect(mockHandleClick).toHaveBeenCalledTimes(1)
    })
  })
})
