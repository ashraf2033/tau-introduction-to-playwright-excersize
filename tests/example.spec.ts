import { test, expect } from '@playwright/test';
import HomePage from '../pages/home-page';
import GettingStartedPage from '../pages/getting-started-page';
import DotNetPage from '../pages/dot-net-page';

let homePage : HomePage;
let gettingStartedPage : GettingStartedPage;
let dotNetPage : DotNetPage;

test.beforeEach(async ({page}) => {
await page.goto('/');
homePage = new HomePage(page);
});

test.describe('Home Page Scenarios',()=>{

    test('has title', async ({ page }) => {
     
      await homePage.assertPageTitle();
    });

    test('get started link', async ({ page }) => {
      
      await homePage.clickGetStarted();
      gettingStartedPage = new GettingStartedPage(page);
      await gettingStartedPage.assertPageHeading()
     
    });

    test('Check the .NET page', async ({ page }) => {
    await homePage.hoverOverLangsMenu();
    await homePage.clickDotNetOption();
     dotNetPage = new DotNetPage(page);
    await homePage.clickGetStarted();
     gettingStartedPage = new GettingStartedPage(page);
    await gettingStartedPage.assertDotNetTitle();
    })

})

