import { test, expect } from '@playwright/test';
import HomePage from '../pages/home-page';
import GettingStartedPage from '../pages/getting-started-page';

let homePage : HomePage;
let gettingStartedPage : GettingStartedPage;

test.beforeEach(async ({page}) => {
await page.goto('/');
homePage = new HomePage(page);
});

test.describe('Search Scenarios',()=>{

    test('Navigate to getting started from search ', async ({ page }) => {
     
      await homePage.inflateSearchUsingMouse();
      await homePage.fillSearch('getting started');
      await console.log("Search result visibe : "+ homePage.gettingStartedSearchResult.isVisible());        

      

      await homePage.selectSerchResult(1);
            gettingStartedPage = new GettingStartedPage(page);
      await gettingStartedPage.assertPageHeading();
       
      
    });

  

})

