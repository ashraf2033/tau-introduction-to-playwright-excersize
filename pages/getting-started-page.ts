import { type Locator, type Page, expect } from '@playwright/test';

export class GettingStartedPage {
    readonly page: Page;
    


constructor(page: Page){
    this.page = page;
    
}    


async assertPageHeading(){
     // Expects page to have a heading with the name of Installation.
      await expect(this.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}


async assertDotNetTitle(){
        await expect(this.page.getByText('dotnet build')).toBeVisible();

}
}

export default GettingStartedPage;
