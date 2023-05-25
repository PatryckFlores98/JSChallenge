/// <reference types="Cypress" />


import NewDeviceElements from '../elements/NewDeviceElements'
const newdeviceElements = new NewDeviceElements


class NewDevicePage {

  fillSystemName(name) {
    cy.get(newdeviceElements.system_name_field()).type(name)
  }

  fillHddCapacity(gb) {
    cy.get(newdeviceElements.hdd_capacity_field()).type(gb)
  }

  clickSubmit() {
    cy.get(newdeviceElements.submitButton()).click()
  }

  clickType(type) {
    cy.get("#type").select(type)
  }

}


export default NewDevicePage;