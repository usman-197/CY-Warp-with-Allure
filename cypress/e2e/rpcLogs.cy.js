
describe('Rpc Logs.', ()=>{
    before(()=>{
        cy.log('Rpc Logs Test Started');
        const url= 'https://staging.warp.analog.one/';
        cy.visit(url);
        cy.wait(2000);
    })
    it('Click on RPC Logs link in header section.', ()=>{
        cy.contains('RPC Logs').should('contain', 'RPC Logs')
            .click();
        cy.wait(2000);
    })
    it('Check Data Populated in Object.', ()=>{
        
    })
    it('Download RPC Logs', ()=>{
        cy.contains('Download').should('contain', 'Download')
            .click();
        cy.wait(4000);
    })
    it('Click again on RPC Logs link to check COPY functionality.', ()=>{
        cy.contains('RPC Logs').should('contain', 'RPC Logs')
            .click();
    })
    it('Copy RPC Logs', ()=>{
        cy.get('.fCQOHB')
            .click();
    })
    after(()=>{
        cy.log('Rpc Logs Test Finished');
        cy.end();
    })
})
