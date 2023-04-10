# SportSee

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setting Up

- Clone this repo `git clone https://github.com/milonte/SportSee.git`
- Navigate into project folder `cd SportSee/`
- Install dependancies `npm i`

## Run Application

### In Developement Mode

- No prerequisites are needed for development, all datas are mocked. 
- Just start server `npm start`

- And render application into a web browser.
- Two routes are avaiables, corresponding to users in mocked datas :
### `http://localhost:3000/12`
### `http://localhost:3000/18`
- All other routes return an Error page


### In Production Mode

- This project need (in production) an other [API backend project](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard). Follow instructions on this API project & run API server

- Copy the `.env.production` file into a `.env.production.local` file
- Replace the URL with the API server URL (by default: `REACT_APP_API_URL = "http://localhost:3000"`)

- Build project in with the command `npm run build` and `serve -s build`. Render URL should be displayed.
### `http://localhost:{serverPort}/{userId}`
