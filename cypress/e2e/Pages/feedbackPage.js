export class FeedbackForm{
    //locators
        openFeebackForm_locator= "div[class='sc-dsQDmV iPfMcv']>div:nth-of-type(1)";
        submitForm_locator= "button[class='sc-fLlhyt cwlpeM sc-efBctP kczoxk']";
        emailWithValidationChecks_email_locator= '#email';
        whoAreYou_developer_locator= "label[for='Developer']";
        whoAreYou_cryptoEnthuiast_locator= "label[for='Crypto Enthusiast']";
        whoAreYou_retailInvestor_locator= "label[for='Retail Investor']";
        whoAreYou_other_locator= "label[for='Other']";
        feedbackOn_warpDapp_locator= "label[for='Warp DApp']";
        feedbackOn_tokenOptions_locator= "label[for='Token Options']";
        feedbackOn_chainOptions_locator= "label[for='Chain Options']";
        feedbackOn_methodOptions_locator= "label[for='Method Options']";
        feedbackOn_applicationOptions_locator= "label[for='Application Options']";
        feedbackOn_instructions_locator= "label[for='Instructions']";
        yourFeedback_locator= '#feedback-textarea';
        additionalComments_locator= '#feedback-comments';
        //submitFinalForm_locator= "button[class='sc-fLlhyt cwlpeM sc-efBctP kczoxk']";
        
    //functions
    navigator(url){
        cy.visit(url)
    }
    openFeedbackForm(){
        cy.get(this.openFeebackForm_locator)
            .should('contain', 'Feedback')
            .click();
        // cy.wait(3000);
    }
    submitFormWithEmptyFields(){
        cy.get(this.submitForm_locator)
            .should('have.attr', 'type', 'submit')
            .click();
    }
    emailWithValidationChecks(test1, test2, test3, test4){
        cy.get(this.emailWithValidationChecks_email_locator)    
            .type(test1)
                .clear();
        cy.focused().clear();
        cy.wait(2000);
        cy.get(this.emailWithValidationChecks_email_locator)
            .type(test2)
                .clear();
        cy.focused().clear();
        cy.wait(2000);
        cy.get(this.emailWithValidationChecks_email_locator)
            .type(test3)
                .clear();
        cy.focused().clear();
        cy.wait(2000);
        cy.get(this.emailWithValidationChecks_email_locator)
            .type(test4);
        cy.wait(2000);
        
        cy.contains('Email Address');
    }
    whoAreYou(){
        //first check
        cy.get(this.whoAreYou_developer_locator).click();
        cy.wait(2000);
        cy.get(this.whoAreYou_developer_locator).click();
        //second check
        cy.get(this.whoAreYou_cryptoEnthuiast_locator).click();
        cy.wait(2000);
        cy.get(this.whoAreYou_cryptoEnthuiast_locator).click();
        //third check
        cy.get(this.whoAreYou_retailInvestor_locator).click();
        cy.wait(2000);
        cy.get(this.whoAreYou_retailInvestor_locator).click();
        //fourth check
        cy.get(this.whoAreYou_other_locator).click();
        cy.wait(2000);
        cy.get(this.whoAreYou_other_locator).click();

        cy.wait(2000);
        cy.get(this.whoAreYou_developer_locator).click();
        cy.wait(1000);
        cy.get(this.whoAreYou_other_locator).click();
    }
    feedbackOn(){
        //first check
        cy.get(this.feedbackOn_warpDapp_locator)
            .click();
        cy.wait(2000);
        cy.get(this.feedbackOn_warpDapp_locator)
            .click();
        //second check
        cy.get(this.feedbackOn_tokenOptions_locator)
            .click();
        cy.wait(2000);
        cy.get(this.feedbackOn_tokenOptions_locator)
            .click();
        //third check
        cy.get(this.feedbackOn_chainOptions_locator)
            .click();
        cy.wait(2000);
        cy.get(this.feedbackOn_chainOptions_locator)
            .click();
        //fourth check
        cy.get(this.feedbackOn_methodOptions_locator)
            .click();
        cy.wait(2000);
        cy.get(this.feedbackOn_methodOptions_locator)
            .click();
        //fifth check
        cy.get(this.feedbackOn_applicationOptions_locator)
            .click();
        cy.wait(2000);
        cy.get(this.feedbackOn_applicationOptions_locator)
            .click();
        //fifth check
        cy.get(this.feedbackOn_instructions_locator)
            .click();
        cy.wait(2000);
        cy.get(this.feedbackOn_instructions_locator)
            .click();

        cy.wait(2000);
        cy.get(this.feedbackOn_warpDapp_locator)
            .click();
    }
    yourFeedback(){
        cy.get(this.yourFeedback_locator)
            .type("Testing Comments.")
        cy.wait(2000);
        cy.get(this.yourFeedback_locator)
            .clear();
        cy.wait(2000);
        cy.get(this.yourFeedback_locator)
            .type("Testing Comments.")
    }
    additionalComments(){
        cy.get(this.additionalComments_locator)
            .type("Additional Comments.")
        cy.wait(2000);
        cy.get(this.additionalComments_locator)
            .clear();
        cy.wait(2000);
    }
    submitFinalForm(){
        cy.get(this.submitForm_locator)
            .should('have.attr', 'type', 'submit')
            .click();
        cy.wait(9000);
    }
}
