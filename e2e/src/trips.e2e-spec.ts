import { by, element, browser } from "protractor";
import { protractor } from 'protractor/built/ptor';

describe("Trip tests",()=> {

    it("test login and registertrip",() =>{
       // go to the home page to login
        browser.get('');
        element(by.id("homeLogin")).click();
       // browser.sleep(3000);
        
        // select the inputfields by id and test if logging in works
        element(by.id("username-input")).sendKeys("admin");
        //browser.sleep(3000);
        element(by.id("password-input")).sendKeys("admin");
        //browser.sleep(3000);
        element(by.id("login-botton")).click(); 
        //browser.sleep(3000);
    
    
        // go to find a lift to count number of trips
        element(by.id("find-a-lift-click")).click(); 
        //browser.sleep(2000);
        element.all(by.css('.trip-Count-css')).then(function(firstCount){
        
            var amountOfTripsStart = firstCount.length;
            console.log(firstCount.length);
            // when logged in go to the register trip page and register a new trip
            
            element(by.id("portal-registertrip-click")).click(); 
            //browser.sleep(2000);

            element(by.id("registertrip-origin")).sendKeys("Lyngby");
            //browser.sleep(2000);
            element(by.id("registertrip-destination")).sendKeys("Roskilde");
            //browser.sleep(2000);
            element(by.id("registertrip-available-seats")).sendKeys("2");
            //browser.sleep(2000);
            element(by.id("registertrip-departure-time")).sendKeys('01-30-2015'+protractor.Key.TAB+'02-2');
            //browser.sleep(2000);
            element(by.id("registerTrip")).click(); 
            //browser.sleep(2000);
        
            element.all(by.css('.trip-Count-css')).then(function(secondCount){
                var amountofTripEnd = secondCount.length;
                var check = amountOfTripsStart +1;
                console.log(amountofTripEnd);
                console.log(check);
                expect (amountofTripEnd).toEqual(check);
             });
        }); 
    });
        

    it("test delete trip functionality",() =>{
        
        browser.get('');
        element(by.id("homeLogin")).click();
        // browser.sleep(3000);
         
        // select the inputfields by id and test if logging in works
        element(by.id("username-input")).sendKeys("admin");
        //browser.sleep(3000);
        element(by.id("password-input")).sendKeys("admin");
        //browser.sleep(3000);
        element(by.id("login-botton")).click(); 
        //browser.sleep(3000);
        element(by.id("find-a-lift-click")).click(); 
        
        element.all(by.css('.trip-Count-css')).then(function(el) {
            const before = el.length;
            element.all(by.css(".delete-css")).get(0).click();
        
        element.all(by.css('.trip-Count-css')).then(function(el2) {
            const after = el2.length;
            element.all(by.css(".delete-css")).get(0).click();

            expect(before - 1).toEqual(after);
            
            });
            
        });
    });



});