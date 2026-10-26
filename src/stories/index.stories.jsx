import { ModalTrigger } from "../index.js";
import { Simple } from "./Simple.jsx";

/**
 * @import { Meta, StoryObj } from "@storybook/react"
 */

/** @type {Meta<typeof ModalTrigger>} */
const meta = {
	title: "react-modal-trigger",
	component: ModalTrigger,
	tags: ["autodocs"],
};

export default meta;

/**
 * @typedef {StoryObj<typeof ModalTrigger>} Story
 */

/** @type {Story} */
export const SimpleStory = {
	name: "Simple",
	args: {},
	render: (props) => <Simple {...props} />,
};
