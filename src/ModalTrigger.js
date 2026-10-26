import { Fragment, useCallback, useState } from "react";
import { jsxs } from "react/jsx-runtime";

/**
 * @import { ModalTriggerProps } from "./types.js"
 */

/**
 * @param {ModalTriggerProps} props
 */
export function ModalTrigger({
	initiallyOpen = false,
	renderTrigger,
	renderModal,
}) {
	const [isOpen, setIsOpen] = useState(initiallyOpen);

	const handleOpen = useCallback(() => {
		setIsOpen(true);
	}, []);

	const handleClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	return jsxs(Fragment, {
		children: [
			renderTrigger({
				isOpen,
				handleOpen,
			}),

			renderModal({
				isOpen,
				handleClose,
			}),
		],
	});
}
