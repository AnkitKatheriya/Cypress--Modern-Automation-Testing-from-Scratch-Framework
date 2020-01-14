# Cypress--Modern-Automation-Testing-from-Scratch-Framework
by Rahul Shetty

# What is Cypress ?
Cypress is a next generation front end Automation testing tool built for morder web applications.

How Cypress is unique from other Automation tools:
1) Cypress automatically waits for commands and assertions before moving on. No more async hell ( default time for wait is 4 second).
2) Ability to test Edge Testcases by Mocking the server response.
3) Cypress takes smapshots as your tests run. We can hover over each commands in the Command Log to see exatly what happend at each step.
4) Because of Architectural design, Cypress delivers fast, conistent and reliable test execution compared to other Automation tools.
5) View video of your entire tests execution When run from Cypress dashboard.
==========================================================

Cypress bults on Node.js and comes packaged as an npm module.

As it is built on Node.js, It uses JavaScript for writing tests. But 90% of coding can be done using Cypress inbuilt commands which are easy to understand.

Cypress also bundles with jQuery and inherits many of jQuery methods for UI components identifications.


## Cypress Architecture
Most testing tools (like Selenium) operates by running outside of the browser and exucuting remote commands across the network. But Cypress engine directly operates inside the browser. In other words, it is the browser that is executing your test code.
This enables Cypress to listen and modify the browser behaviour at run time by manipulating DOM and altering Network requests and responses on the fly.
Cypress opens the door to new kind of testing with Having ultimate control over your application (front and back)

# Cypress Browsers Supprts
Chrome
Electron
Firefox & IE (Under Cunstruction)

# Cypress Components
Test Runner
Dash Board Service

Note: uses npm trends to show the trend of any npm package past

# Cypress Installation
Download Node and install
Set NODE_HOME environment variable -: C:\Program Files\nodejs
Create project directory and navigate to it using cmd
run command : npm init -y
  npm install cypress  --save-dev
  

# What is Cypress test runner


## Fixtures folder in cypress
    This folder is used to store data to test our testcases.
    command is > fixture

## Integration folder in cypress
    This folder is used to store all the test files that contains the testcases.

## Plugins folder in cypress
    Used to handle cypress event handlers and your custom code.

## Support folder in cypress
    Used to store common code and comman methods, which we can use throughout the framework without any import statement related to this folder.

## videos folder in cypress

## cypress.json
    This file can we used to overwrite the default configurations provided by cypress


## Important:
    ChroPath chrome extension can be used to know the CSS or Xpath of any element.
    Cypress test runner also has a inbuilt plugin in it to generate locators.
    For intelligent code completion just add line ( /// <reference types="Cypress" /> ) into the head of the spec (test) js or typscript file.
    We can see what happened on every step with screenshot and error message in cypress.
    Cypress commands yields jQuery objects, so you can call jQuery methods on it.
    Non-Cypress commands cannot resolve promise by themselves. We need to manually resolve it by then() . 
    We can resolve the chrome cross-origin security issue during testing by just providing the configuration setting
        { chromeWebSecurity:false} // It is a chrome bug


Notes: 
1)  By default ./node_modules/.bin/cypress run commands executes all test cases inside cypress/integration folder.
    If you wants to run testcases only specific to a test file then we would require to run below command.


2)  Through command line, Cypress runs in headless mode by default and also uses electron browser to run testcases.
    If we wants to run tesetcases through command line but in a headed mode, we need to run below command
        ./node_modules/.bin/cypress run --headed

3)  Select a browser to run testcases
        /node_modules/.bin/cypress run --browser chrome

4) Cypress only supports CSS selectors to locate any element

5) Many practice sites are available at below url.
    https://www.rahulshettyacademy.com/#/practice-project

6) Cypress is Asynchronous in nature and there is no guarantee in sequence of execution, but Cypress takes care of it.

7) Promise comes with resolved, reject and pending.

8) for cypress logging ( cy.log() ).

9) Aliasing to reuse Locators.

10) Cypress auto accepts alerts and pop ups.

11) Cypress also have a capability to listen browser events.











