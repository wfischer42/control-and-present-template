import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'

import { [FTName]Presenter } from './[FTName]Presenter'

const meta: Meta<typeof [FTName]Presenter> = {
  title: 'Components/[FTName]Presenter',
  component: [FTName]Presenter,
}
export default meta

type Story = StoryObj<typeof [FTName]Presenter>

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
  },
  render: (args) => <[FTName]Presenter {...args} />
}