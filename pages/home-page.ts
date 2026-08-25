import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly getStartedButton: Locator;
    readonly pageTitle: RegExp;
    readonly getLangsDrop: Locator;
    readonly getDotNetOption: Locator;
    readonly getSearchField: Locator;
    readonly getInflatedSearchField: Locator;
    readonly gettingStartedSearchResult: Locator;



    constructor(page: Page){
        this.page = page;
        this.getStartedButton = page.getByRole('link', {name: 'Get Started'});
        this.pageTitle = /Playwright/;
        this.getDotNetOption = page.getByText('.NET', { exact: true });
        this.getLangsDrop = page.getByRole('button', { name: 'Node.js' })
        this.getSearchField = page.getByRole('button', { name: 'Search' });
        this.getInflatedSearchField = page.getByRole('searchbox', { name: 'Search' });
        this.gettingStartedSearchResult = page.getByRole('link', { name: 'Getting Started', exact: true })

    }    

    async clickGetStarted(){
        await this.getStartedButton.click();
    }

    async assertPageTitle(){
        await expect(this.page).toHaveTitle(this.pageTitle);
    }
    async clickDotNetOption(){
        await this.getDotNetOption.first().click();
    }

    async hoverOverLangsMenu(){
        // Hover Over the Languages menu item to reveal the dropdown
        await this.getLangsDrop.hover();
    }
   
    async inflateSearchUsingMouse(){
        await this.getSearchField.click();
        
  }
    
    async inflateSearchUsingKeybord(){
        await this.getSearchField.press('Control+K')
        
  }


    async fillSearch(query: string){
        await this.getInflatedSearchField.fill(query);
    } 
    
    
    async selectSerchResult(order: number){
        for(let i = 0 ; i < order; i++){
        await this.getInflatedSearchField.press('ArrowDown');

        }

        await this.getInflatedSearchField.press('Enter');
        
    }  
}

export default HomePage;
