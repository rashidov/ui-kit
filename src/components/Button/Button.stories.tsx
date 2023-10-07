import React from 'react'
import Button, {ButtonProps} from "./Button";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
}
export default meta

type Story = StoryObj<typeof Button>

export const ButtonStory: Story = {
  args: {
    variant: 'my variant'
  }
}

// export default {
//   title: 'components/Button',
//   component: Button,
//   args: {
//     variant: 'its my variant'
//   },
// } as Meta<ButtonStoryProps>
//
// // type ButtonStoryProps = Pick<ButtonProps, 'variant'>
// type ButtonStoryProps = ButtonProps
//
// export const ButtonStoryTemplate: Story<ButtonStoryProps> = ({ ...args}) => (
//   <Button {...args} />
// )
//
// ButtonStoryTemplate.storyName = 'Button'
// ButtonStoryTemplate.args = {
//   variant: 'adda'
// }