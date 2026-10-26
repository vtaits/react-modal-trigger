/**
 * @import { ReactNode } from "react"
 */

/**
 * @typedef {Object} TriggerRenderProps
 * @property {boolean} isOpen Whether the modal open
 * @property {VoidFunction} handleOpen Open the modal
 */

/**
 * @typedef {Object} ModalRenderProps
 * @property {boolean} isOpen Whether the modal open
 * @property {VoidFunction} handleClose Close the modal
 */

/**
 * @typedef {Object} ModalTriggerProps
 * @property {boolean} [initiallyOpen=false] Whether the modal open by default
 * @property {(renderProps: TriggerRenderProps) => ReactNode} renderTrigger Render the button that opens the modal on click
 * @property {(renderProps: ModalRenderProps) => ReactNode} renderModal Render the modal in open and closed states
 */
export {};
