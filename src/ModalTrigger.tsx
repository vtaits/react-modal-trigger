import { type ReactElement, useCallback, useState } from "react";
import type { ModalTriggerProps } from "./types";

export function ModalTrigger({
	initiallyOpen = false,
	renderTrigger,
	renderModal,
}: ModalTriggerProps): ReactElement {
	const [isOpen, setIsOpen] = useState(initiallyOpen);

	const handleOpen = useCallback(() => {
		setIsOpen(true);
	}, []);

	const handleClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	return (
		<>
			{renderTrigger({
				isOpen,
				handleOpen,
			})}

			{renderModal({
				isOpen,
				handleClose,
			})}
		</>
	);
}
