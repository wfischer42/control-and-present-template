import { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { [FTName] as [FTName]Component } from './[FTName]'
import { [FTName]ControllerContext } from './[FTName]Controller'
import { [FTName]ControllerMock } from './[FTName]Controller.mock'

const meta: Meta<typeof [FTName]Component> = {
  title: 'Components/[FTName]',
  component: [FTName]Component,
  decorators: [
    (Story) => (
      <[FTName]ControllerContext.Provider value={[FTName]ControllerMock}>
        <Story />
      </[FTName]ControllerContext.Provider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof [FTName]Component>

export const [FTName]: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
  },
  render: (args) => <[FTName]Component {...args} />,
}
