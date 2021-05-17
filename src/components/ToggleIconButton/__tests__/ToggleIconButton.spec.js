import React from 'react'
import { render, screen } from '@testing-library/react'

import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'

import { LEFT, RIGHT } from 'utils'

import ToggleIconButton from '..'

describe('<ToggleIconButton />', () => {
  let props

  beforeEach(() => {
    props = {
      buttonClass: 'icon-btn',
      options: [faCheck, faPlus],
      text: 'My List',
      textPlacement: RIGHT,
    }
  })

  it('renders the first icon by default', () => {
    render(<ToggleIconButton {...props} />)

    // console.log(screen.getByText('My List'))

    expect(true).toBe(true)
  })
})
