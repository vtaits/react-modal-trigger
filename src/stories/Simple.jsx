import { ModalTrigger } from "../index.js";

/**
 * @import { ModalTriggerProps } from "../index.js"
 */

/**
 * @param {ModalTriggerProps} props
 */
export function Simple(props) {
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
