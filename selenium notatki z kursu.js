Notes 

Ways to match text

Prefix						Substring

a[id^='id_prefix_']			a[is*='id_pattern']


Suffix						Extract Match

a[id$='_id_sufix']			a[id='id']
===========================================================================


By extra Match

<div id = "textField">

driver.findElement(By.cssSelector("div[id='textField']"));


by Prefix

< div id="textField_randomId">

driver.findElement(By.cssSelector("div[id^='textField']"));



by Suffix

< div id="textField_randomId">

driver.findElement(By.cssSelector("div[id$='textField']"));



by Substring

< div id="123_textField_randomId">

driver.findElement(By.cssSelector("div[id*='textField']"));

==============================================================================

Finding child element

<div id="parent">
<a id="child" href="/child"><Child</a></div> 

driver.findElement(By.cssSelector("div#parent a"));





Nth - child 
<ul id ="list">
	<li>One</li>
	<li>Two</li>
	<li>Three</li>
</ul>

driver.findElement(By.cssSelector("#list li:nth-child(n)"));

Li - list item 
N - # number of item 


Test dla checkbox - sprawdzić czy działa ..

///////////////////////////////////////////////////////////////////////////////////////////  for checkboxes

import org.openqa.selenium.chrome.ChromeDriver;
        import org.openqa.selenium.WebDriver;
        import org.openqa.selenium.WebElement;
        import org.openqa.selenium.By;

public class Radiobuttons {
    public static void main(String[] args) {

        System.setProperty("webdriver.chrome.driver", "C:\\apps\\chromedriver.exe");

        WebDriver driver = new ChromeDriver();

        driver.get("https://formy-project.herokuapp.com/checkbox");
// pytanie - jak mamy id = value to co wtedy ?  używamy po czym chcemy - w tym przypadku #
        WebElement radioButton1 = driver.findElement(By.cssSelector("input.#checkbox-1"));
        radioButton1.click();

        WebElement radioButton2 = driver.findElement(By.cssSelector("input[value='checkbox-2']"));
        radioButton2.click();

        WebElement radioButton3 = driver.findElement(By.cssSelector("input.#checkbox-3"));
        radioButton3.click();

        driver.quit();
    }
}


System.setProperty("webdriver.chrome.driver", "C:\\apps\\chromedriver.exe");