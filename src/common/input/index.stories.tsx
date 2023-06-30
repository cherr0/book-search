import { ComponentMeta, ComponentStory } from '@storybook/react'

import Input from '~/common/input'

export default {
  title: 'common/Input',
  component: Input,
  argTypes: {
    defaultValue: {
      defaultValue: '',
      control: {
        type: 'text'
      }
    },
    placeholder: {
      defaultValue: '',
      control: {
        type: 'text'
      }
    },
    width: {
      defaultValue: 'hug',
      control: {
        type: 'inline-radio',
        options: ['hug', 'fill', 'fixed']
      }
    },
    fixedWidth: {
      defaultValue: 50,
      control: {
        type: 'range',
        min: 50,
        max: 500
      }
    }
  }
} as ComponentMeta<typeof Input>

export const Default: ComponentStory<typeof Input> = (Props) => (
  <Input {...Props} />
)
