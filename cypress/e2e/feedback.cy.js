import { FeedbackForm } from './pages/feedbackPage';

const FeedbackFormObject= new FeedbackForm();

describe('Analog WARP dApp Feedback form.', ()=>{
    before(()=>{
        FeedbackFormObject.navigator('https://staging.warp.analog.one/');
        cy.wait(4000);
    })
    it('Open feedback form.', ()=>{
        FeedbackFormObject.openFeedbackForm();
        cy.wait(3000);
    })
    it('Submit form with empty fields.', ()=>{
        FeedbackFormObject.submitFormWithEmptyFields();
        cy.wait(3000);
    })
    it('Email with validation checks.', ()=>{
        FeedbackFormObject.emailWithValidationChecks('test', 'test@test', 'test.com', 'test@test.com');
    })
    it('Who are you?', ()=>{
        FeedbackFormObject.whoAreYou();
    })
    it('What are you giving feedback on?', ()=>{
        FeedbackFormObject.feedbackOn();
    })
    it('What is your feedback?', ()=>{
        FeedbackFormObject.yourFeedback();
    })
    it('Additional comments?', ()=>{
        FeedbackFormObject.additionalComments();
    })
    it('Submit form.', ()=>{
        FeedbackFormObject.submitFinalForm();
    })
    after(()=>{
        console.log("Feedback Form test is completed.");
        cy.end();
    })
})
