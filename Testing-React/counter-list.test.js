import React from 'react'
import CounterList from './counter-list'
import { shallow, mount } from 'enzyme'

describe('CounterList', () => {
	it('just for demo!', () => {
		// one level deep
		const shallowWrapper = shallow(<CounterList />)
		
		// multiple levels deep
		const mountWrapper = mount(<CounterList />)

		// console.log('shallow HTML', shallowWrapper.debug())
		// console.log('mount HTML', mountWrapper.debug())
		
		const counters = shallowWrapper.find('Counter')
		expect(counters.length).toEqual(2)
	})

	it('can add more counters when we click the button', () => {
		const wrapper = shallow(<CounterList />)
		const btn = wrapper.find('button')
		btn.simulate('click')

		const counters = wrapper.find('Counter')
		expect(counters.length).toEqual(3)
	})
})