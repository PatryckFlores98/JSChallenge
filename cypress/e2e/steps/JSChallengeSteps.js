// cypress/e2e/duckduckgo.ts
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import JSChallengePage from '../pages/actions/JSChallengeActions'
const jschallengePage = new JSChallengePage


Given("I get the device data from server", () => {
    jschallengePage.getDevices();
});

When("access the UI", () => {
    jschallengePage.accessUI();
});

When("I click on Add Device button", () => {
    jschallengePage.clickSubmit();
});

Then("the informations from server should match with the UI", () => {
    jschallengePage.verifyDeviceInformations();
});

Given("I access the UI", () => {
    jschallengePage.accessUI();
});

Then("the {} {} {} of the device has to be showed in the menu", (name, type, gb) => {
    jschallengePage.verifyTheNewCreatedDevice(name, type, gb);
});

Given("I post a new {} {} {} for the first device", (name, type, gb) => {
    jschallengePage.putDevice(name, type, gb);
});

When("I refresh the page", () => {
    jschallengePage.accessUI();
});

Given("I delete the last device", () => {
    jschallengePage.deleteDevice();
});

Then("the device should not be shown", () => {
    jschallengePage.verifyTheDeletedDevice();
});