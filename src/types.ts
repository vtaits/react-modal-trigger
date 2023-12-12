import type { ReactNode } from "react";

export type TriggerRenderProps = Readonly<{
	/**
	 * Whether the modal open
	 */
	isOpen: boolean;
	/**
	 * Open the modal
	 */
	handleOpen: () => void;
}>;

export type ModalRenderProps = Readonly<{
	/**
	 * Whether the modal open
	 */
	isOpen: boolean;
	/**
	 * Open the modal
	 */
	handleClose: () => void;
}>;

export type ModalTriggerProps = Readonly<{
	/**
	 * Whether the modal open by default
	 * `false` by default
	 */
	initiallyOpen?: boolean;
	/**
	 * Render the button that opens the modal on click
	 * @param renderProps render props
	 */
	renderTrigger: (renderProps: TriggerRenderProps) => ReactNode;
	/**
	 * Render the modal in open and closed states
	 * @param renderProps render props
	 */
	renderModal: (renderProps: ModalRenderProps) => ReactNode;
}>;
