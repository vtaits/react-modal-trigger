import { expect, test } from "vitest";
import { ModalTrigger } from "./ModalTrigger";
import * as lib from "./index";

test("correct exports", () => {
	expect(lib.ModalTrigger).toBe(ModalTrigger);
});
