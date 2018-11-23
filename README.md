# Intercity Ride Sharing System Web Frontend (For Administrator)

The intercity Ride Sharing System Web Frontend is for administrator's use to get an overview of the whole system.

### Preliminary steps

In order to run the Web frontend, please make sure that the port 8087 is available on your machine. That is, there is no other processes running on that port. If the port is already allocated, for example, if jenkins is running on 8087, just use the following command to kill it: 
```
sudo systemctl stop jenkins 
```

## Frontend Services

Use git clone command to have a local working copy of the system. Then running the following command to lanuch the system. And it will automatically bring up a web page running on localhost:8087. 

```bash
cd t04-web/interCityRideSharingSystem-Web
npm install 
npm run dev
```

## Usage for fleet status overview 
In order to use this feature, you need to click on the button with text "Fleet Status Overview" on home page. Then you can choose between Inspect Drivers, Inspect Passengers, and Inspect Routes. The Inspect Drivers and Inspect Passengers allow you to sort the result list by entering the name of the Driver or Passenger. The Button with text "Show Drivers" will return all the list of active drives. And the button with text "Show Drivers with Name" will return the list of active drivers whose names contain the characters that you input. Partial Matching also allows. For example, if you input "s" then active drivers with name "s", "shaodi", "dsd" should all appear. (This is just an example, our current database does not have drivers named "dsd") Note that the whitespace is not allowed in the user input. It will not process your request if you input something like "s d". It will throw an error message like this "Cannot process the request because a whitespace exists".   
Examples of valid inputs (Same for all three features): 
```bash
With Button "Show Drives with Name"
1. s ---- List the active drivers with names containing letter s 
2. s d ---- Throws exception because a whitespace exists
3. sd ----List the active drivers with name containing string sd

With Button "Show Drivers"
Do not need to input anything, that will list all active drivers 

With Button "Clear"
Do not need to input anything, that will refresh the page. 
You may want to clear the page first before starting a new search

```
## Usage for ranking overview
In order to use this feature, you will need to click the button with text "Rankings Overview" on home page. Then you will be directed to the rankings overview page. Then you can choose between Passenger Ranking, Driver Ranking, and Route Ranking. Both the Passenger Ranking and Driver Ranking takes two inputs in certain format. First, user will input start date and end date in the format of dd-MMM-yyyy-HH:mm:ss. Then the system will first have all the active journeys that are within the timeframe. And then rank only the drivers and passengers that are associated with those journeys. The output will be in this format :
```bash

Chaima : 12
Chaimae : 1

```
The left hand side is the driver's or passenger's name, and followed by colon is the number of journeys that he or she participated in. The one with most number of completed journeys will go at the top. 

For the Route Rankings, the method also takes two input, the start date and the end date in the format of  dd-MMM-yyyy-HH:mm:ss. Then the system will return all routes and rank them with popularity. The popularity depends on the number of occurrences of all the active journeys within the timeframe that user inputs. For example, if I have 3 jouneys total: 
```bash
1. Montreal_Ottawa_Toronto
2. Montreal_Ottawa
3. Montreal_Toronto
```
The output will be in following format: 

```bash
Montreal_Ottawa : 2
Montreal_Toronto : 1
Montreal_Ottawa_Toronto : 1
```
It starts with two-stops routes first, and then increment to three stops, and so on. The left hand side is the stops in the route, and followed by the colon is the number of active journeys (within the timeframe that user inputs) which contains this route. The route with most active journeys goes at the top. 

The clear button is used to refresh the current page. You may want to clear the page first before starting a new ranking. 

Examples of valid inputs: 
```bash
With Button "Rank the Drivers"
1. In the input field under "Start Date" , input 01-Jan-2016-09:00:00 
2. In the input field under "End Date" , input 01-Jan-2021-09:00:00 
----This list the drivers who participated with active journeys in that period. 
----Drivers associated with most journeys go at top.

With Button "Rank the passengers"
1. In the input field under "Start Date" , input 01-Jan-2016-09:00:00 
2. In the input field under "End Date" , input 01-Jan-2021-09:00:00 
----This list the passengers who participated with active journeys in that period.
----Passengers associated with most journeys go at top.

With Button "Rank the routes"
1. In the input field under "Start Date" , input 01-Jan-2016-09:00:00 
2. In the input field under "End Date" , input 01-Jan-2021-09:00:00 
----This first go through all the active journeys in that period.
----Then it list all the routes and subroutes that those journeys contained. 
----The route with the most number of journeys contained will go at top.

With Button "Clear"
Do not need to input anything, that will refresh the page. 
You may want to clear the page first before starting a new search

```
## Development with
* [npm](https://www.npmjs.com)
* [Vue.js](https://vuejs.org)

## Programming languages
* JavaScript 
* CSS 
* HTML 

## Deployment 
[Heroku](https://www.heroku.com/)
