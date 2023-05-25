// cypress/e2e/duckduckgo.ts
import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import NewDevicePage from '../pages/actions/NewDeviceActions'
const newdevicePage = new NewDevicePage


When("I fill the system name with {}", (name) => {
    newdevicePage.fillSystemName(name);
});

When("I fill the hdd capacity with {}", (gb) => {
    newdevicePage.fillHddCapacity(gb);
});

When("I click on save button", () => {
    newdevicePage.clickSubmit();
});

When("I change the {}", (type) => {
    newdevicePage.clickType(type);
});