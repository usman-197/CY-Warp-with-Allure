export class Main{
    //locators
    //chain-component-locators
    ethChain_locator= ':nth-child(1) > .sc-fmRtwQ > .sc-lkwKjF > .sc-gzzPqb > .sc-dUWWNf';
    polyChain_locator= ':nth-child(2) > .sc-fmRtwQ > .sc-lkwKjF > .sc-gzzPqb > .sc-dUWWNf';
    ethDeselector_locator= ':nth-child(1) > .sc-fmRtwQ > .ksBUng';
    polyDeselector_locator= '.ksBUng';
    ethPreselector_locator= 'Sushiswap';
    ethDEX_locator= 'DEX';
    ethUniswap_locator= 'Uniswap';
    enter_locator= '.sc-egNfGp';
    //attribut-component-locators
    //assets
    weth_locator= 'WETH';
    uni_locator= 'UNI';
    dai_locator= 'DAI';
    matic_locator= 'MATIC';
    cro_locator= 'CRO';
    mkr_locator= 'MKR';
    qnt_locator= 'QNT';
    wbtc_locator= 'WBTC';
    link_locator= 'LINK';
    //method
    price_locator= ':nth-child(2) > .sc-yeoIj > :nth-child(1) > .sc-bhVIhj';
    marketCap_locator= ':nth-child(2) > .sc-yeoIj > :nth-child(2) > .sc-bhVIhj';
    totalSupply_locator= ':nth-child(2) > .sc-yeoIj > :nth-child(3) > .sc-bhVIhj';
    circulatingSupply_locator= ':nth-child(2) > .sc-yeoIj > :nth-child(3) > .sc-bhVIhj';

    enter_attributes_locator= '.sc-egNfGp';
    //results-component-locators
    consumableDataTab_locator= '.tab-1';
    atomicDataTab_locator= '.tab-2';
    rawRequestTab_locator= '.tab-3';
    diagramTab_locator= '.fLDxaP';

    //functions
    navigator(url){
        cy.visit(url);
    }
    //chain-component-functions
    ethereumChainClicker(){
        cy.get(this.ethChain_locator)
            .should('contain', 'Ethereum')
            .click();
        cy.wait(3000);
    }
    ethChainDeClick(){
        cy.get(this.ethDeselector_locator)
            .click();
        cy.wait(2000);
    }
    polygonChainLocator(){
        cy.get(this.polyChain_locator)
            .should('contain', 'Polygon')
            .click();
        cy.wait(2000);
        //cy.get('.sidebar').scrollTo('bottom');
    }
    polyChainDeClick(){
        cy.get(this.polyDeselector_locator)
            .click();
        cy.wait(2000);
    }
    ethPreSelectFunction(){
        cy.contains(this.ethPreselector_locator).should('contain', 'Sushiswap')
            .click();
        
    }
    ethDexClicker(){
        cy.contains(this.ethDEX_locator).should('contain', 'DEX').should('be.visible')
            .click();
    }
    ethUniswapClicker(){
        cy.contains(this.ethUniswap_locator).should('contain', 'Uniswap')
            .click();
        cy.wait(2000);
    }
    enter(){
        cy.get(this.enter_locator)
            .click();
    }
    //attribute-component-functions
    //assets
    assetWeth(){
        cy.contains(this.weth_locator).should('contain', 'WETH')
            .click();
    }
    assetUni(){
        cy.contains(this.uni_locator).should('contain', 'UNI')
            .click();
    }
    assetDAI(){
        cy.contains(this.dai_locator).should('contain', 'DAI')
            .click();
    }
    assetMATIC(){
        cy.contains(this.matic_locator).should('contain', 'MATIC')
            .click();
    }
    assetCRO(){
        cy.contains(this.cro_locator).should('contain', 'CRO')
            .click();
    }
    assetMKR(){
        cy.contains(this.mkr_locator).should('contain', 'MKR')
            .click();
    }
    assetQNT(){
        cy.contains(this.qnt_locator).should('contain', 'QNT')
            .click();
    }
    assetWBTC(){
        cy.contains(this.wbtc_locator).should('contain', 'WBTC')
            .click();
    }
    assetLINK(){
        cy.contains(this.link_locator).should('contain', 'LINK')
            .click();
    }
    //methods
    methodPrice(){
        cy.get(this.price_locator)
            .click();
    }
    methodMarketCap(){
        cy.get(this.marketCap_locator)
            .click();
    }
    methodTotalSupply(){
        cy.get(this.totalSupply_locator)
            .click();
    }
    methodCirculatingSupply(){
        cy.get(this.circulatingSupply_locator)
            .click();
    }

    enterAttributes(){
        cy.get(this.enter_attributes_locator)
            .click();
        // cy.wait(7000);
    }
    //results-component-functions
    consumableDataTab(){
        cy.get(this.consumableDataTab_locator)
            .click();
        cy.wait(3000);
    }
    atomicDataTab(){
        cy.get(this.atomicDataTab_locator)
            .click();
        cy.wait(3000);
    }
    rawRequestTab(){
        cy.get(this.rawRequestTab_locator)
            .click();
        cy.wait(3000);
    }
    diagramTab(){
        cy.get(this.diagramTab_locator)
            .click();
        cy.wait(3000);
    }
}
