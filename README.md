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
In order to use this feature, you need to click on the button with text "Fleet Status Overview". Then you can choose between Inspect Drivers, Inspect Passengers, and Inspect Routes. The Inspect Drivers and Inspect Passengers allow you to sort the result list by entering the name of the Driver or Passenger. The Button with text "Show Drivers" will return all the list of active drives. And the button with text "Show Drivers with Name" will return the list of active drivers whose names contain the characters that you input. Partial Matching also allows. For example, if you input "s" then active drivers with name "s", "shaodi", "dsd" should all appear. (This is just an example, our current database does not have drivers named "dsd") Note that the whitespace is not allowed in the user input. It will not process your request if you input something like "s d". It will throw an error message like this "Cannot process the request because a whitespace exists".   
Examples of valid inputs: 
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

```bash
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
