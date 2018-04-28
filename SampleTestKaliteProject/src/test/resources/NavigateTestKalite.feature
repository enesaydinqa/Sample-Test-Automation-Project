Feature: Current Page Test

  Scenario: Navigate testkalite URL
    Given Open Browser
    When Navigate "http://testkalite.com/" URL
    And Verify Current Page "http://testkalite.com/" URL
    Then Close Browser