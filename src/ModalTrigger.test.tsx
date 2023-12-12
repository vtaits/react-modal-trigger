import { useCallback, useState } from "react";
import { create } from "react-test-engine-vitest";
import { afterEach, describe, expect, test, vi } from "vitest";
import { ModalTrigger } from "./ModalTrigger";

vi.mock("react", async () => {
	const actual = await vi.importActual("react");

	return {
		...actual,
		useState: vi.fn(),
		useCallback: vi.fn(),
	};
});

const renderModal = vi.fn().mockReturnValue(<div className="modal" />);
const renderTrigger = vi.fn().mockReturnValue(<div className="trigger" />);
const handleOpen = vi.fn();
const handleClose = vi.fn();
const setIsOpen = vi.fn();

const render = create(
	ModalTrigger,
	{
		renderModal,
		renderTrigger,
	},
	{
		queries: {
			modal: {
				component: "div",
				className: "modal",
			},
			trigger: {
				component: "div",
				className: "trigger",
			},
		},

		hooks: {
			openState: useState,
			handleOpen: useCallback,
			handleClose: useCallback,
		},

		hookOrder: ["openState", "handleOpen", "handleClose"],

		hookDefaultValues: {
			openState: [false, setIsOpen],
			handleOpen: handleOpen,
			handleClose: handleClose,
		},
	},
);

afterEach(() => {
	vi.clearAllMocks();
});

describe("openState", () => {
	test.each([
		[true, true],
		[false, false],
		[undefined, false],
	])("pass `initiallyOpen` = %s", (initiallyOpen, expectedInitialState) => {
		const engine = render({
			initiallyOpen,
		});

		expect(engine.getHookArguments("openState")).toEqual([
			expectedInitialState,
		]);
	});
});

describe("handleOpen", () => {
	test("set open state", () => {
		const engine = render({});

		engine.getHookArguments("handleOpen")[0]();

		expect(setIsOpen).toHaveBeenCalledTimes(1);
		expect(setIsOpen).toHaveBeenCalledWith(true);
	});
});

describe("handleClose", () => {
	test("set closed state", () => {
		const engine = render({});

		engine.getHookArguments("handleClose")[0]();

		expect(setIsOpen).toHaveBeenCalledTimes(1);
		expect(setIsOpen).toHaveBeenCalledWith(false);
	});
});

describe("render", () => {
	test.each([[true], [false]])(
		"provide correct render props with `isOpen`=$s",
		(isOpen) => {
			render(
				{},
				{
					openState: [isOpen, setIsOpen],
				},
			);

			expect(renderModal).toHaveBeenCalledTimes(1);
			expect(renderModal).toHaveBeenCalledWith({
				isOpen,
				handleClose,
			});

			expect(renderTrigger).toHaveBeenCalledTimes(1);
			expect(renderTrigger).toHaveBeenCalledWith({
				isOpen,
				handleOpen,
			});
		},
	);

	test("render results of functions", () => {
		const engine = render({});

		expect(engine.accessors.modal.get()).toBeTruthy();
		expect(engine.accessors.trigger.get()).toBeTruthy();
	});
});
