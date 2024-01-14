import RepoCard, { RepoProp, RepoCardProps } from "./repo-card";

describe("RepoCard", () => {
    beforeEach(() => {
        const repo: RepoProp = {
            id: "1",
            avatarUrl: "/next.svg",
            fullName: "test/test",
            description: "test description",
            isVisible: false,
        };
        const props: RepoCardProps = {
            repo,
            handleRepo: cy.stub().as("handleRepo"),
            index: 0,
        };

        cy.mount(<RepoCard {...props} />);
    });

    it("should be visible", () => {
        cy.get("[data-cy='repo-card-1']").should("be.visible");
        cy.get("[data-cy='repo-avatar-1']").should("be.visible");
        cy.get("[data-cy='repo-name-1']").should("be.visible");
        cy.get("[data-cy='repo-description-1']").should("be.visible");
        cy.get("[data-cy='repo-invisible-1']").should("be.visible");
    });

    it("should display avatar", () => {
        cy.get("[data-cy='repo-avatar-1']").should("have.attr", "src", "/next.svg");
    });

    it("should display name", () => {
        cy.get("[data-cy='repo-name-1']").should("have.text", "test/test");
    });

    it("should display description", () => {
        cy.get("[data-cy='repo-description-1']").should("have.text", "test description");
    });

    it("should toggle visibility", () => {
        const repo: RepoProp = {
            id: "1",
            avatarUrl: "/next.svg",
            fullName: "test/test",
            description: "test description",
            isVisible: true,
        };
        const props: RepoCardProps = {
            repo,
            handleRepo: () => {},
            index: 0,
        };

        cy.mount(<RepoCard {...props} />);
        cy.get("[data-cy='repo-visible-1']").should("be.visible");
    });
    it("should call handle repo on click of button", () => {
        cy.get("[data-cy='toggle-repo-visibility']").click();
        cy.get("@handleRepo").should("be.called");
    });
});
