// describe("Seller Login Page", () => {
//   beforeEach(() => {
//     cy.intercept("GET", "http://127.0.0.1:8000/api/sellers/", {
//       fixture: "sellers.json",
//     }).as("getSellers");
//     cy.visit("http://localhost:3000/Sellers");
//     cy.wait("@getSellers");
//   });

//   it("should display login form", () => {
//     cy.wait(3000);
//     cy.get("h2").should("contain.text", "Login");
//     cy.get("form").should("exist");
//     cy.get('input[name="email"]').should("exist");
//     cy.get('input[name="password"]').should("exist");
//     cy.get('button[type="submit"]').should("exist");
//   });

//   it("should display error message for invalid credentials", () => {
//     cy.wait(3000);
//     cy.get('input[name="email"]').type("invalid@example.com");
//     cy.get('input[name="password"]').type("invalidpassword");
//     cy.get('button[type="submit"]').click();
//     cy.on("window:alert", (alertText) => {
//       expect(alertText).to.equal("Invalid email or password");
//     });
//   });

//   it("should redirect to Seller Dashboard for valid credentials", () => {
//     cy.wait(3000);
//     cy.fixture("sellers.json").then((sellers) => {
//       const validSeller = sellers[0];
//       cy.get('input[name="email"]').type(validSeller.email);
//       cy.get('input[name="password"]').type(validSeller.password);
//       cy.get('.px-4').click();
//       cy.url().should("include", "http://localhost:3000/SellerDashBoard");
      
//     });
//   });
//   it("should redirect to Sign Up page", () => {
//     cy.wait(3000);
//     cy.contains("Don't have an account?").get(".mb-0 > a").click();
//     cy.url().should("include", "http://localhost:3000/SellerRegister");
//   });
// });





describe('Seller Login Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://127.0.0.1:8000/api/sellers/', { fixture: 'sellers.json' }).as('getSellers');
    cy.visit('http://localhost:3000/Sellers');
    cy.wait('@getSellers');
  });

  const waitAndType = (selector, text) => {
    cy.get(selector).should('be.visible').clear().type(text);
  };

  const waitAndClick = (selector) => {
    cy.get(selector).should('be.visible').click();
  };

  it('should display login form', () => {
    cy.get('h2').should('contain.text', 'Login');
    cy.get('form').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should display error message for invalid credentials', () => {
    waitAndType('input[name="email"]', 'invalid@example.com');
    waitAndType('input[name="password"]', 'invalidpassword');
    waitAndClick('button[type="submit"]');
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Invalid email or password');
    });
  });

  it('should redirect to Seller Dashboard for valid credentials', () => {
    cy.fixture('sellers.json').then((sellers) => {
      const validSeller = sellers[0]; 
      waitAndType('input[name="email"]', validSeller.email);
      waitAndType('input[name="password"]', validSeller.password);
      waitAndClick('button[type="submit"]');
      cy.url().should('include', 'http://localhost:3000/SellerDashboard');
    });
  });

  it('should redirect to Sign Up page', () => {
    waitAndClick(".mb-0 > a");
    cy.url().should('include', 'http://localhost:3000/SellerRegister');
  });
});
