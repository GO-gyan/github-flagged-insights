import React from "react";
import Navbar from "./navbar";

describe("<Navbar />", () => {
    beforeEach(() => {
        cy.mount(<Navbar />);
    });
    it("should have app title", () => {
        cy.get("p").should("have.text", "Flagged");
    });
    it("should have a navigation link Repos", () => {
        cy.get("[data-cy='nav-link-repos']").should("have.text", "Repos");
    });
    it("should have navigation link '/' for Flagged", () => {
        cy.get("[data-cy='nav-link-home']").should("have.attr", "href", "/");
    });
    it("should have navigation link '/repos' for nav repos", () => {
        cy.get("[data-cy='nav-link-repos']").should("have.attr", "href", "/repos");
    });
});
