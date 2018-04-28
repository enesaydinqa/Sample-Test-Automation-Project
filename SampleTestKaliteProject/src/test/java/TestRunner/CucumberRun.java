package TestRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src\\test\\resources",
        glue = {"MainPage"},
        plugin = {"pretty", "html:target/cucumber-html-report", "junit:target/cucumber-reports/Cucumber.xml", "json:target/Destination/cucumber.json"})
public class CucumberRun {
}