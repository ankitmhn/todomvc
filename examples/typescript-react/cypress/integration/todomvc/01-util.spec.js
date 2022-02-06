/// <reference types="cypress" />
import { Utils } from "../../../src/utils";

describe("Unit test utility functions", () => {
	const todoTitle = "@tag My todo title with two tags @another";
	const { tags, todoText } = Utils.parseIntoToTokens(todoTitle);
	it("parses two tags", () => {
		expect(tags.length).to.eq(2);
	});
	it("does not show tags in todo title", () => {
		expect(todoText).to.not.contain("@");
	});
});
