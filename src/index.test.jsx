import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
} from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { ModalTrigger } from "./index.js";

afterEach(() => {
	vi.clearAllMocks();
	cleanup();
});

describe("open and close modal", () => {
	test("closed by default", () => {
		render(
			<ModalTrigger
				renderModal={({ handleClose, isOpen }) => {
					if (!isOpen) {
						return null;
					}

					return (
						<button type="button" onClick={handleClose}>
							Close modal
						</button>
					);
				}}
				renderTrigger={({ handleOpen, isOpen }) => (
					<button type="button" disabled={isOpen} onClick={handleOpen}>
						Open modal
					</button>
				)}
			/>,
		);

		expect(screen.queryByRole("button", { name: "Close modal" })).toBeFalsy();

		act(() => {
			fireEvent.click(screen.getByRole("button", { name: "Open modal" }));
		});

		expect(screen.getByRole("button", { name: "Open modal" })).toHaveProperty(
			"disabled",
			true,
		);

		act(() => {
			fireEvent.click(screen.getByRole("button", { name: "Close modal" }));
		});

		expect(screen.queryByRole("button", { name: "Close modal" })).toBeFalsy();
		expect(screen.getByRole("button", { name: "Open modal" })).toHaveProperty(
			"disabled",
			false,
		);
	});

	test("open by default", () => {
		render(
			<ModalTrigger
				renderModal={({ handleClose, isOpen }) => {
					if (!isOpen) {
						return null;
					}

					return (
						<button type="button" onClick={handleClose}>
							Close modal
						</button>
					);
				}}
				renderTrigger={({ handleOpen, isOpen }) => (
					<button type="button" disabled={isOpen} onClick={handleOpen}>
						Open modal
					</button>
				)}
				initiallyOpen
			/>,
		);

		expect(screen.getByRole("button", { name: "Open modal" })).toHaveProperty(
			"disabled",
			true,
		);

		act(() => {
			fireEvent.click(screen.getByRole("button", { name: "Close modal" }));
		});

		expect(screen.getByRole("button", { name: "Open modal" })).toHaveProperty(
			"disabled",
			false,
		);
		expect(screen.queryByRole("button", { name: "Close modal" })).toBeFalsy();

		act(() => {
			fireEvent.click(screen.getByRole("button", { name: "Open modal" }));
		});

		expect(screen.getByRole("button", { name: "Open modal" })).toHaveProperty(
			"disabled",
			true,
		);
		screen.getByRole("button", { name: "Close modal" });
	});
});
