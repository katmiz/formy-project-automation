import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class DragAndDrop {
    public static void main(String[] args) {
// setting location for chrome driver
        System.setProperty("webdriver.chrome.driver", "C:\\apps\\chromedriver.exe");
// creating new instance of chrome driver
        WebDriver driver = new ChromeDriver();
//navigate to specyfic page where is drag and drop
        driver.get("https://formy-project.herokuapp.com/dragdrop");
//finding proper element on page
        WebElement image = driver.findElement(By.id("image"));

        WebElement box = driver.findElement(By.id("box"));
//find new instance of actions class
        Actions actions = new Actions(driver);
        actions.dragAndDrop(image,box).build().perform();

    s

        driver.quit();
    }
}

