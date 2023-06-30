import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '~/common/button'

export default {
  title: 'common/button',
  component: Button,
  argTypes: {
    width: {
      defaultValue: 'hug',
      options: ['fill', 'hug', 'fixed'],
      control: { type: 'inline-radio' }
    },
    fixedWidth: {
      defaultValue: 500,
      control: { type: 'range', min: 300, max: 800, step: 100 }
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' }
    },
    children: {
      name: 'content',
      defaultValue: 'Button CTA',
      control: { type: 'text' }
    }
  }
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (Props) => (
  <Button {...Props} />
)
