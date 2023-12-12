import type { ReactElement } from "react";
import { ModalTrigger, type ModalTriggerProps } from "..";

export function Simple(props: ModalTriggerProps): ReactElement {
	return (
		<ModalTrigger
			{...props}
			renderModal={({ handleClose, isOpen }) => {
				if (!isOpen) {
					return null;
				}

				return (
					<div
						role="dialog"
						style={{
							position: "fixed",
							top: "50%",
							left: "50%",
							backgroundColor: "#fff",
							transform: "translateX(-50%) translateY(-50%)",
							padding: "20px",
							boxShadow: "0px 0px 8px 6px rgba(0, 0, 0, 0.15)",
						}}
					>
						<p>Content</p>

						<button type="button" onClick={handleClose}>
							Close
						</button>
					</div>
				);
			}}
			renderTrigger={({ handleOpen, isOpen }) => (
				<button disabled={isOpen} type="button" onClick={handleOpen}>
					Open
				</button>
			)}
		/>
	);
}
