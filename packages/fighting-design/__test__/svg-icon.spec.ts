import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FSvgIcon } from '../index'

describe('SvgIcon', () => {
  test('class', () => {
    const wrapper = mount(FSvgIcon)
    expect(wrapper.classes()).toContain('f-svg-icon')
  })
})
