import type { Meta, StoryObj } from "@storybook/react";
import { ModalTrigger } from "..";
import { Simple } from "./Simple";

const meta: Meta<typeof ModalTrigger> = {
	title: "react-modal-trigger",
	component: ModalTrigger,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ModalTrigger>;

export const SimpleStory: Story = {
	name: "Simple",
	args: {},
	render: (props) => <Simple {...props} />,
};
