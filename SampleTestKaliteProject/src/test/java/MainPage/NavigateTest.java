package MainPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import java.util.concurrent.TimeUnit;

public class NavigateTest {

    static WebDriver driver;

    @Given("^Open Browser$")
    public static void open_Browser() {
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\src\\main\\resources\\Drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    }

    @When("^Navigate \"(.*?)\" URL$")
    public static void navigate_URL(String URL) {
        driver.navigate().to(URL);
    }

    @And("^Verify Current Page \"(.*?)\" URL$")
    public static void verify_Current_Page_URL(String URL) {
        Assert.assertEquals(driver.getCurrentUrl(), URL);
    }

    @Then("^Close Browser$")
    public static void close_Browser() {
        driver.close();
        driver.quit();
    }
}
