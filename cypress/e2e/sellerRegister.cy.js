// sellerRegister.spec.js (inside cypress/integration/)
describe('Seller Register Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/SellerRegister');
    });
  

    it('should display registration form', () => {
        cy.get('.card-title').should('contain.text', 'Register');
        cy.get('form').should('exist');
        cy.get('input[name="user_name"]').should('exist');
        cy.get('input[name="company_name"]').should('exist');
        cy.get('textarea[name="address"]').should('exist');
        cy.get('input[name="pincode"]').should('exist');
        cy.get('input[name="contact_number"]').should('exist');
        cy.get('input[name="website"]').should('exist');
        cy.get('input[name="email"]').should('exist');
        cy.get('input[name="password"]').should('exist');
        cy.get('button[type="submit"]').should('exist');
      });
      
  
    it('should alert for empty form submission', () => {
      cy.get('button[type="submit"]').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Please fill in all fields.');
      });
    });
  


    it('should successfully register with valid data', () => {
        cy.fixture('registrationData.json').then((registrationData) => {
          // Fill in the registration form with valid data
          cy.get('input[name="user_name"]').type(registrationData.user_name);
          cy.get('input[name="company_name"]').type(registrationData.company_name);
          cy.get('textarea[name="address"]').type(registrationData.address);
          cy.get('input[name="pincode"]').type(registrationData.pincode);
          cy.get('input[name="contact_number"]').type(registrationData.contact_number);
          cy.get('input[name="website"]').type(registrationData.website);
          cy.get('input[name="email"]').type(registrationData.email);
          cy.get('input[name="password"]').type(registrationData.password);
      
          cy.get('button[type="submit"]').click();
      
          // Assertions for successful registration
          // For example, assert that it navigates to a success page or displays a success message
        //   cy.url().should('include', '/SuccessPage'); // Replace '/SuccessPage' with your success page URL
        //   cy.contains('Registration successful').should('exist'); // Example success message text
      
          // Verify the registration data stored in Redux state if applicable
          // Replace these assertions with your Redux state verification logic
        //   cy.window().its('store').invoke('getState').then((state) => {
        //     expect(state.registration.user_name).to.equal(registrationData.user_name);
        //     expect(state.registration.company_name).to.equal(registrationData.company_name);
        //     // Add more assertions for other fields in Redux state
        //   });
        });
      });
      
  
    it('should navigate to Sign In page', () => {
      cy.contains('Already have an account?');
      cy.get('.mb-0 > a').click();
      cy.url().should('include', 'http://localhost:3000/SellerLogin');
    });
  });
  