import { ComponentMeta, ComponentStory } from '@storybook/react'

import PreviewCard from '.'

export default {
  title: 'list/Preview card',
  component: PreviewCard,
  argTypes: {
    title: {
      defaultValue: 'sample title',
      control: {
        type: 'text'
      }
    },
    subtitle: {
      defaultValue: 'sample subtitle',
      control: {
        type: 'text'
      }
    },
    thumbnailUrl: {
      control: {
        type: 'file'
      }
    }
  }
} as ComponentMeta<typeof PreviewCard>

export const Default: ComponentStory<typeof PreviewCard> = (Props) => (
  <PreviewCard {...Props} />
)
