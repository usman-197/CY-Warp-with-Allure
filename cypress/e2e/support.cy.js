import { SupportPage } from './pages/supportPage';

const SupportPageObject= new SupportPage();
describe('Analog WARP dApp Support page.', ()=>{
    before(()=>{
        SupportPageObject.navigator('https://staging.warp.analog.one/');
        cy.wait(4000);
    })
    it('Click on Support link from header.', ()=>{
        SupportPageObject.supportLink();
    })
    it('Click on Quick guide option.', ()=>{
        SupportPageObject.quickGuide();
    })
    it('Click on Analog network link on quick guide page.', ()=>{
        SupportPageObject.analogNetworkLink();
    })
    it('Click on Unveil link.', ()=>{
        SupportPageObject.unveilLink();
    })
    it('Click on Here link.', ()=>{
        SupportPageObject.hereLink();
    })
    after(()=>{
        // SupportPageObject.navigator('https://staging.warp.analog.one/').end();
        cy.end();
    })
})
