import { Main } from './pages/main';

const MainObject= new Main();
describe('All components testcases.', ()=>{
    //Before Block
    before(()=>{
        MainObject.navigator('https://staging.warp.analog.one/');
        cy.wait(3000);
    })
    //Chain Component
    it('Click on Ethereum Chain drawer.', ()=>{
        MainObject.ethereumChainClicker();
    })
    it('Click on Polygon Chain drawer', ()=>{
        MainObject.polygonChainLocator();
    })
    it('Ethereum Drawer deselector.', ()=>{
        MainObject.ethChainDeClick();
    })
    it('Polygon Drawer deselector.', ()=>{
        MainObject.polyChainDeClick();
    })
    it('Open Ethereum Drawer again for category and application selection.', ()=>{
        MainObject.ethereumChainClicker();
    })
    it('Check pre-select category functionality.', ()=>{
        MainObject.ethPreSelectFunction();
        cy.wait(2000);
    })
    it('Unselect after pre-select.', ()=>{
        MainObject.ethDexClicker();
        cy.wait(2000);
        MainObject.ethPreSelectFunction();
    })
    it('Click on Ethereum DEX category for selection.', ()=>{
        MainObject.ethDexClicker();
        cy.wait(3000);
        //again click to check deselect functionaltiy
        MainObject.ethDexClicker();
        cy.wait(2000);

        MainObject.ethDexClicker();
        cy.wait(2000);
    })
    it('Click Uniswap application for selection.', ()=>{
        MainObject.ethUniswapClicker();
    })
    it('Click on Enter button on Chain component after all selections.', ()=>{
        MainObject.enter();
    })
    //Attributes Component
    //A.S.S.E.T.S
    //Check for 4 asset checks 
    it('Check whether user can select only 4 assets.', ()=>{
        MainObject.assetWeth();
        cy.wait(1000);
        MainObject.assetMKR();
        cy.wait(1000);
        MainObject.assetDAI();
        cy.wait(1000);
        MainObject.assetQNT();
        cy.wait(1000);
        MainObject.assetLINK();
        cy.wait(1000);

        MainObject.assetWeth();
        cy.wait(1000);
        MainObject.assetMKR();
        cy.wait(1000);
        MainObject.assetDAI();
        cy.wait(1000);
        MainObject.assetQNT();
    })
    //Assets
    it('Select and Deselect and WETH asset.', ()=>{
        MainObject.assetWeth();
        cy.wait(1000);

        MainObject.assetWeth();
        cy.wait(1000);
    })
    it('Select and Deselect and UNI asset.', ()=>{
        MainObject.assetUni();
        cy.wait(1000);

        MainObject.assetUni();
        cy.wait(1000);
    })
    it('Select and Deselect and DAI asset.', ()=>{
        MainObject.assetDAI();
        cy.wait(1000);

        MainObject.assetDAI();
        cy.wait(1000);
    })
    it('Select and Deselect and MATIC asset.', ()=>{
        MainObject.assetMATIC();
        cy.wait(1000);

        MainObject.assetMATIC();
        cy.wait(1000);
    })
    it('Select and Deselect and CRO asset.', ()=>{
        MainObject.assetCRO();
        cy.wait(1000);

        MainObject.assetCRO();
        cy.wait(1000);
    })
    it('Select and Deselect and MKR asset.', ()=>{
        MainObject.assetMKR();
        cy.wait(1000);

        MainObject.assetMKR();
        cy.wait(1000);
    })
    it('Select and Deselect and QNT asset.', ()=>{
        MainObject.assetQNT();
        cy.wait(1000);

        MainObject.assetQNT();
        cy.wait(1000);
    })
    it('Select and Deselect and WBTC asset.', ()=>{
        MainObject.assetWBTC();
        cy.wait(1000);

        MainObject.assetWBTC();
        cy.wait(1000);
    })
    it('Select and Deselect and LINK asset.', ()=>{
        MainObject.assetLINK();
        cy.wait(1000);

        MainObject.assetLINK();
        cy.wait(1000);
    })
    //M.E.T.H.O.D.S
    //Check for 2 method check.
    it('Check whether user can select only 2 methods.', ()=>{
        MainObject.methodPrice();
        cy.wait(1000);
        MainObject.methodTotalSupply();
        cy.wait(1000);
        MainObject.methodMarketCap();
        cy.wait(1000);
    })
    //Methods
    it('Select and Deselect and PRICE method.', ()=>{
        MainObject.methodPrice();
        cy.wait(1000);

        MainObject.methodPrice();
    })
    it('Select and Deselect and MARKET CAP method.', ()=>{
        MainObject.methodMarketCap();
        cy.wait(1000);

        MainObject.methodMarketCap();
    })
    it('Select and Deselect and TOTAL SUPPLY method.', ()=>{
        MainObject.methodTotalSupply();
        cy.wait(1000);

        MainObject.methodTotalSupply();
    })
    it('Select and Deselect and CIRCULATING SUPPLY method.', ()=>{
        MainObject.methodCirculatingSupply();
        cy.wait(1000);

        MainObject.methodCirculatingSupply();
    })

    it('Check main flow of attributes by selecting atleast one asset and one method.', ()=>{
        //asset
        MainObject.assetMATIC();
        cy.wait(2000);
        //method
        MainObject.methodCirculatingSupply();
        cy.wait(2000);
    })
    it('Enter after Attributes selection', ()=>{
        MainObject.enterAttributes();
        cy.request('https://staging.timegraph.analog.one/result/*').as('apiResponse')
        cy.get('@apiResponse').its('status').should('equal', 200);
    })
    //R.E.S.U.L.T.S
    it('Click on Consumable Data tab.', ()=>{
        MainObject.consumableDataTab();
    })
    it('Click on Atomic Data tab.', ()=>{
        MainObject.atomicDataTab();
    })
    it('Click on Raw Request tab.', ()=>{
        MainObject.rawRequestTab();
    })
    it('Click on Diagram tab.', ()=>{
        MainObject.diagramTab();
    })
    //After Block
    after(()=>{
        cy.log('End of all components testcases.');
        cy.end();
    })
})
//test
