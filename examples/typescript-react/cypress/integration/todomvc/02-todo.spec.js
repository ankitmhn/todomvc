/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
import { Utils } from "../../../src/utils";

describe("todomvc", () => {
	const newItem = "Buy groceries @shopping @household";
	const { todoText, tags } = Utils.parseIntoToTokens(newItem);
	beforeEach(() => {
		cy.visit("http://localhost:4200");
		cy.get(".new-todo").type(`${newItem}{enter}`);
	});

	it(`new todo item (${newItem}) is added`, () => {
		cy.get("ul > li > .view").should("have.length", 1);
	});

	it("it should render title without tags", () => {
		cy.get(".view > label > div").first().should("have.text", todoText);
	});

	it(`it should render ${tags.length} tags`, () => {
		cy.get(".view > label > div")
			.last()
			.children()
			.should("have.length", tags.length);
	});

	it("it badge text should match the label text", () => {
		cy.get(".view > label > div").last().should("have.text", tags.join(""));
	});
});
