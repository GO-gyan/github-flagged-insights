import { RepoProp } from "./repo-card";
import CardPagination from "./card-pagination";

describe("CardPagination", () => {
    beforeEach(() => {
        const repo1: RepoProp = {
            id: "1",
            avatarUrl: "/next.svg",
            fullName: "test1/test1",
            description: "test description 1",
            isVisible: false,
        };
        const repo2: RepoProp = {
            id: "2",
            avatarUrl: "/vercel.svg",
            fullName: "test2/test2",
            description: "test description 2",
            isVisible: false,
        };
        const repos = [repo1, repo2];

        cy.mount(<CardPagination repos={repos} />);
    });

    it("should be visible", () => {
        cy.get("[data-cy='card-pagination-section']").should("be.visible");

        cy.get("[data-cy='card-pagination-section']")
            .first()
            .within(() => {
                cy.get("[data-cy='repo-card-1']").should("be.visible");
                cy.get("[data-cy='repo-card-2']").should("be.visible");
            });
    });

    it("should display avatar", () => {
        cy.get("[data-cy='card-pagination-section']")
            .first()
            .within(() => {
                cy.get("[data-cy='repo-avatar-1']").should("have.attr", "src", "/next.svg");
                cy.get("[data-cy='repo-avatar-2']").should("have.attr", "src", "/vercel.svg");
            });
    });

    it("should display name", () => {
        cy.get("[data-cy='card-pagination-section']")
            .first()
            .within(() => {
                cy.get("[data-cy='repo-name-1']").should("have.text", "test1/test1");
                cy.get("[data-cy='repo-name-2']").should("have.text", "test2/test2");
            });
    });

    it("should display description", () => {
        cy.get("[data-cy='card-pagination-section']")
            .first()
            .within(() => {
                cy.get("[data-cy='repo-description-1']").should("have.text", "test description 1");
                cy.get("[data-cy='repo-description-2']").should("have.text", "test description 2");
            });
    });
});
