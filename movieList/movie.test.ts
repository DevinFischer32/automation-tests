import { Builder, Capabilities, By } from "selenium-webdriver"
import { beforeAll, afterAll, test } from "@jest/globals"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async ()=>{
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async ()=>{
    await driver.quit()
})

test('Functionality', async () => {
    let searchBar = await driver.findElement(By.xpath('//input'))
    await driver.sleep(1500)
    await searchBar.sendKeys('Kung Fury\n')
    await driver.sleep(1000)
    await searchBar.sendKeys('Bee movie\n')
    await driver.sleep(1500)

   await driver.findElement(By.xpath('//li/span')).click()
   await driver.sleep(1000)
   await driver.findElement(By.xpath('//li/span')).click()
   await driver.sleep(1500)

   await driver.findElement(By.xpath('//li[2]/span')).click()
   await driver.sleep(1000)
   await driver.findElement(By.xpath('//li[2]/span')).click()
   await driver.sleep(1500)

   await driver.findElement(By.xpath('//li/button')).click()
   await driver.sleep(1000)
   await driver.findElement(By.xpath('//li/button')).click()
   await driver.sleep(1500)

})