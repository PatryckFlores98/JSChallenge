Feature: Automation Challenge
  Scenario: Test 1 - Validate if the devices are being correctly displayed
    Given I get the device data from server
    When access the UI
    Then the informations from server should match with the UI

  Scenario: Test 2 - Validate the creation of a new device
    Given I access the UI
    And I click on Add Device button
    And I fill the system name with <name>
    And I fill the hdd capacity with <gb>
    And I change the <type>
    When I click on save button
    Then the <name> <type> <gb> of the device has to be showed in the menu
    Examples:
      | name        | gb  | type |
      | test system | 100 | MAC  |


  Scenario: Test 3 - Validate the edit of a device
    Given I post a new <name> <type> <gb> for the first device
    When I refresh the page
    Then the <name> <type> <gb> of the device has to be showed in the menu
    Examples:
      | name          | gb  | type |
      | RenamedDevice | 100 | MAC  |


  Scenario: Test 4 - Validate the delete of a device
    Given I delete the last device
    When I refresh the page
    Then the device should not be shown