export class SupportPage{
    //locators
    supportLink_locator= 'Support';
    quickGuide_locator= '.sc-gFGZVQ > .sc-fbPSWO > :nth-child(1)';
    analogNetworkLink_locator= 'Analog network';
    cancelDialog_locator= '.sc-olbas';
    unveilLink_locator= 'which we will unveil shortly';
    hereLink_locator= 'here';
    //functions
    navigator(url){
        cy.visit(url)
    }
    supportLink(){
        cy.contains(this.supportLink_locator)
            .click();
            cy.wait(2000);
    }
    quickGuide(){
        cy.get(this.quickGuide_locator)
            .click();
        cy.wait(2000);
        cy.get(this.cancelDialog_locator)
            .click();
    }
    analogNetworkLink(){
        cy.contains(this.analogNetworkLink_locator)
            .click();
        // cy.go(-1);
    }
    unveilLink(){
        cy.contains(this.unveilLink_locator)
            .click();
        cy.wait(2000);
    }
    hereLink(){
        cy.contains(this.hereLink_locator)
            .click();
        cy.wait(2000);
    }

}
