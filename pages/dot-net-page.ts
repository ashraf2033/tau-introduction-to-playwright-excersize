import { type Locator, type Page, expect } from '@playwright/test';

export class DotNetPage {
    readonly page: Page;
    


constructor(page: Page){
    this.page = page;
}    


async assertPageHeading(){
     // Expects page to have a heading with the name of Installation.
      await expect(this.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}
}

export default DotNetPage;
