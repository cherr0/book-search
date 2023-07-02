import { ComponentMeta, ComponentStory } from '@storybook/react'

import PreviewCard from '.'

import defaultImage from '~/assets/image/default_image.png'

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
      defaultValue: defaultImage.toString(),
      control: {
        type: 'file'
      }
    }
  }
} as ComponentMeta<typeof PreviewCard>

export const Default: ComponentStory<typeof PreviewCard> = (Props) => (
  <PreviewCard {...Props} />
)
