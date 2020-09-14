import { screen } from '@testing-library/react';
describe('E2E validation', () => {
    beforeEach(() =>{
        cy.visit("/");
    })
it("Checking in correct username and password ",()=>{
    cy.get("#Username").type("Username");
    cy.get("#password").type("password");
    cy.get("#loginBtn").click();
    expect(localStorage.getItem('token')).to.equal(null);
});
it("Checking for correct username & password", () => {
    cy.get("#Username").type("admin");
    cy.get("#password").type("password");
    cy.get("#loginBtn").click();
    expect(localStorage.getItem('token'));
});

it("Visit Readnow page after succesful login", () => {
    localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsibmV3czphbGwiLCJuZXdzOnJlYWQiLCJuZXdzOmVkaXQiXSwiaWF0IjoxNTk5MjE4Mjc5LCJzdWIiOiJhZG1pbiJ9.jrCnF41hmcD3e2GCavbpkZiLmCxwsNk2we2b4Mmt3b4')
    localStorage.setItem('isAuthenticated', true);
    cy.get('#readnow').click();
});
it("Visit dashboard page after succesful login", () => {
    localStorage.setItem('isAuthenticated', true);
    cy.get('#dashboard').click();
});
it("Visit Dashboard page and news based on search Text", () => {
    localStorage.setItem('isAuthenticated', true);
    cy.get('#dashboard').click();
    cy.get("#NewsFilterData").click();
    cy.get('#searchTextData').type('covid');
    cy.get("#searchNews").click();

});

it("Visit Dashboard page and news based on sources ", () => {
    localStorage.setItem('isAuthenticated', true);
    cy.get('#dashboard').click();
    cy.get("#NewsFilterData").click();
    cy.get('#sources').type('bbc-news');
    cy.get("#searchNews").click();
});

it("Visit Dashboard page and news based on country ", () => {
    localStorage.setItem('isAuthenticated', true);
    cy.get('#dashboard').click();
    cy.get("#NewsFilterData").click();
    cy.get('#country').type('in');
    cy.get("#searchNews").click();
});

it("Visit Dashboard page and filter the news ", () => {
    localStorage.setItem('isAuthenticated', true);
    cy.get('#dashboard').click();
    cy.get("#NewsFilterData").click();
    cy.get('#country').type('us');
    cy.get('#category').type('business');
    cy.get('#searchTextData').type('trump');
    cy.get("#searchNews").click();
});

it("Adding news to read later in Dashboard", () => {
    localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsibmV3czphbGwiLCJuZXdzOnJlYWQiLCJuZXdzOmVkaXQiXSwiaWF0IjoxNTk5MjE4Mjc5LCJzdWIiOiJhZG1pbiJ9.jrCnF41hmcD3e2GCavbpkZiLmCxwsNk2we2b4Mmt3b4')
    localStorage.setItem('isAuthenticated', true);
        cy.get('#dashboard').click();
        cy.get('#readLaterDash').click();
        cy.get('#readnow').click();
});

it("Adding news to read later in Filter", () => {
    localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOlsibmV3czphbGwiLCJuZXdzOnJlYWQiLCJuZXdzOmVkaXQiXSwiaWF0IjoxNTk5MjE4Mjc5LCJzdWIiOiJhZG1pbiJ9.jrCnF41hmcD3e2GCavbpkZiLmCxwsNk2we2b4Mmt3b4')
    localStorage.setItem('isAuthenticated', true);
        cy.get('#dashboard').click();
        cy.get("#NewsFilterData").click();
        cy.get('#searchTextData').type('covid');
        cy.get("#searchNews").click();
        cy.get('#readnow').click();
});




})
