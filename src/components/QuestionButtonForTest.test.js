import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import QuestionButtonForTest from './QuestionButtonForTest'

chai.use(chaiEnzyme())

describe('<button></button>', () => {
  const button = shallow(<button></button>)

  it('is wrapped in a div', () => {
    expect(button).to.have.tagName('div')

  })
})
