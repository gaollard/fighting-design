import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FProgress } from '@fighting-design/fighting-components'

describe('FProgress', () => {
  test('class', () => {
    const wrapper = mount(FProgress)
    expect(wrapper.classes()).toContain('f-progress')
  })

  test('percentage', () => {
    const wrapper = mount(FProgress, { props: { percentage: 50 } })
    expect(
      wrapper.find('.f-progress-bar__inner').attributes('style')
    ).toContain('50%')
  })

  test('type', () => {
    const types = ['primary', 'success', 'danger', 'warning'] as const

    types.forEach((item) => {
      const wrapper = mount(FProgress, {
        props: { type: item }
      })
      expect(wrapper.classes()).toContain(`f-progress--${item}`)
    })
  })

  test('linear', () => {
    const wrapper = mount(FProgress, {
      props: { linear: true, percentage: 40 }
    })
    expect(wrapper.classes()).toContain('is-linear')
  })

  test('progress color', () => {
    const wrapper = mount(FProgress, {
      props: {
        percentage: 50,
        color: 'red'
      }
    })
    expect(
      wrapper.find('.f-progress-bar__inner').attributes('style')
    ).toContain('red')
  })

  test('progress background', () => {
    const wrapper = mount(FProgress, {
      props: {
        percentage: 50,
        background: '#f4d1d1'
      }
    })
    expect(
      wrapper.find('.f-progress-bar__wrapper').attributes('style')
    ).toContain('#f4d1d1')
  })

  test('width and height', () => {
    const wrapper = mount(FProgress, {
      props: {
        percentage: 50,
        width: 400,
        height: 26
      }
    })
    const styles = wrapper.find('.f-progress-bar__wrapper').attributes('style')
    expect(styles).toContain('400px')
    expect(styles).toContain('26px')
  })
})