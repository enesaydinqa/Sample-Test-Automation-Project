$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NavigateTestKalite.feature");
formatter.feature({
  "line": 1,
  "name": "Current Page Test",
  "description": "",
  "id": "current-page-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Navigate testkalite URL",
  "description": "",
  "id": "current-page-test;navigate-testkalite-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate \"http://testkalite.com/\" URL",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Verify Current Page \"http://testkalite.com/\" URL",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "NavigateTest.open_Browser()"
});
formatter.result({
  "duration": 4313589689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://testkalite.com/",
      "offset": 10
    }
  ],
  "location": "NavigateTest.navigate_URL(String)"
});
formatter.result({
  "duration": 50800127319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://testkalite.com/",
      "offset": 21
    }
  ],
  "location": "NavigateTest.verify_Current_Page_URL(String)"
});
formatter.result({
  "duration": 18890054,
  "status": "passed"
});
formatter.match({
  "location": "NavigateTest.close_Browser()"
});
formatter.result({
  "duration": 792726835,
  "status": "passed"
});
});