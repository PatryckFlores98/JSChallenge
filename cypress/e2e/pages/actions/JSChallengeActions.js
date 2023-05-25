/// <reference types="Cypress" />


import JSChallengeElements from '../elements/JSChallengeElements'
const jschallengeElements = new JSChallengeElements
var desktop_smart
var mac_leader
var armando
var miguel_pc
var first_mac
var good_mac
var jack_guest
var home_one
var gilbert_computer
var moon_smart
var julio_mac_local
var ryann_host
var last_device


class JSChallengePage {

  getDevices() {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/devices',
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body[0].id).to.equal('e8okoP2l5')
      desktop_smart = response.body[0]
      mac_leader = response.body[1]
      armando = response.body[2]
      miguel_pc = response.body[3]
      first_mac = response.body[4]
      good_mac = response.body[5]
      jack_guest = response.body[6]
      home_one = response.body[7]
      gilbert_computer = response.body[8]
      moon_smart = response.body[9]
      julio_mac_local = response.body[10]
      ryann_host = response.body[11]

    })
  }
  accessUI() {
    cy.visit('http://localhost:3001/')
  }

  verifyDeviceInformations() {
    cy.get(jschallengeElements.desktop_smart()).children().should('have.text', desktop_smart.system_name + desktop_smart.type + desktop_smart.hdd_capacity + (' GBEditRemove')).and('have.class', 'device-edit').and('have.class', 'device-remove')
    cy.get(jschallengeElements.home_one()).children().should('have.text', home_one.system_name + home_one.type + home_one.hdd_capacity + (' GBEditRemove')).and('have.class', 'device-edit').and('have.class', 'device-remove')
    cy.get(jschallengeElements.first_mac()).children().should('have.text', first_mac.system_name + first_mac.type + first_mac.hdd_capacity + (' GBEditRemove')).and('have.class', 'device-edit').and('have.class', 'device-remove')
    cy.get(jschallengeElements.ryann_host()).children().should('have.text', ryann_host.system_name + ryann_host.type + ryann_host.hdd_capacity + (' GBEditRemove')).and('have.class', 'device-edit').and('have.class', 'device-remove')
    cy.get(jschallengeElements.armando()).children().should('have.text', armando.system_name + armando.type + armando.hdd_capacity + (' GBEditRemove')).and('have.class', 'device-edit').and('have.class', 'device-remove')
    cy.get(jschallengeElements.moon_smart()).children().should('have.text', moon_smart.system_name + moon_smart.type + moon_smart.hdd_capacity + (' GBEditRemove')).and('have.class', 'device-edit').and('have.class', 'device-remove')
    cy.get(jschallengeElements.jack_guest()).children().should('have.text', jack_guest.system_name + jack_guest.type + jack_guest.hdd_capacity + (' GBEditRemove')).and('have.class', 'device-edit').and('have.class', 'device-remove')
    cy.get(jschallengeElements.miguel_pc()).children().should('have.text', miguel_pc.system_name + miguel_pc.type + miguel_pc.hdd_capacity + (' GBEditRemove')).and('have.class', 'device-edit').and('have.class', 'device-remove')
    cy.get(jschallengeElements.good_mac()).children().should('have.text', good_mac.system_name + good_mac.type + good_mac.hdd_capacity + (' GBEditRemove')).and('have.class', 'device-edit').and('have.class', 'device-remove')
    cy.get(jschallengeElements.julio_mac_local()).children().should('have.text', julio_mac_local.system_name + julio_mac_local.type + julio_mac_local.hdd_capacity + (' GBEditRemove')).and('have.class', 'device-edit').and('have.class', 'device-remove')
    cy.get(jschallengeElements.gilbert_computer()).children().should('have.text', gilbert_computer.system_name + gilbert_computer.type + gilbert_computer.hdd_capacity + (' GBEditRemove')).and('have.class', 'device-edit').and('have.class', 'device-remove')
    cy.get(jschallengeElements.mac_leader()).children().should('have.text', mac_leader.system_name + mac_leader.type + mac_leader.hdd_capacity + (' GBEditRemove')).and('have.class', 'device-edit').and('have.class', 'device-remove')
  }

  clickSubmit() {
    cy.get(jschallengeElements.submit_button()).click()
  }

  verifyTheNewCreatedDevice(name, type, gb) {
    cy.get(jschallengeElements.list_devices()).contains(name + type + gb + (' GBEditRemove')).find('[class="device-edit"]').should('be.visible')
  }

  verifyTheDeletedDevice() {
    cy.get(jschallengeElements.list_devices()).contains(last_device.system_name + last_device.type + last_device.hdd_capacity + (' GBEditRemove')).should('not.exist')
  }

  deleteDevice() {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/devices',
    }).then((response) => {
      last_device = response.body[11]
      cy.request({
        method: 'DELETE',
        url: `http://localhost:3000/devices/${response.body[11].id}`,

      })

    })

  }

  putDevice(name, type, gb) {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/devices',
    }).then((response) => {
      cy.request({
        method: 'PUT',
        url: `http://localhost:3000/devices/${response.body[0].id}`,
        body: {
          "system_name": name,
          "type": type,
          "hdd_capacity": gb
        }

      })

    })

  }


}


export default JSChallengePage;