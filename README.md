# Digital Spine Assessment

Thanks for the opportunity to work on a fun lil' assignment - it was a hoot 😁

## Frontend

The frontend is very simple and consists of a login button, which becomes a dashboard upon a successful login. Built with `AntD` this could be made prettier & easily expand the UI.

### Dashboard

Displays the number of elevators in each state. When clicked the card flips to display the specific elevators containted in that count.
The recently viewed elevators is limited to the five most recent.

### Charts

`Recharts` handles displaying the elevator data as a bar graph.

### Auth

Auth is handled by `Auth0` and is currently forcing the user to register with them to access the dashboard. This could easily be expanded to allow the user to login with socials.

## Backend

A simple `Express` server hosting one protected route. After login the frontend sends a request to `api/users`, where the user's unique Id from Auth0 is destructured and used to lookup their organization in Mongo Atlas. Currently, the the user's uniqueId is being manually added to the MongoDB along with a pointer to their organization. This can & should be automated for further expansion.

### Endpoint

I only wrote added one endpoint because more were not necessary for this assessment, however more could be added like one to fetch specific elevator information.

#### 'api/users'

This is called after a user is authenticated. Their uniqueId - stored in the auth object in the Access Token (auth.payload.sub) - is used to connect them to their organization's data.

### Schemas

#### User

Consists of the user's uniqueId assigned to them from `Auth0` & a reference to their organzation's data using a `ObjectId` from Mongo.

#### Client

Consists of the name of the Client/Organization (this should be renamed to Organization for consistency) & an array of all their elevators.

## Setup

Start the client:

```
cd client
npm install
npm start
```

In a separate terminal start the server in development mode:

```
cd server
npm install
npm run dev
```

## Assumptions

- I made a big assumption and that is that the styling for this assignment wasn't of the utmost importance so I didn't do a whole lot 🫥
- all of the data should be displayed & is correctly formatted

## Missing Bits

- Amazon CDK
  - While I do have experience working with the AWS CDK, I simply couldn't afford the time at the moment to set things up
- Backend Tests w/ Jest & Supertest
  - Yes, these tests are missing, and to be honest I tried to set them up but ran into auth issues that I wasted too much time on & simply decided to throw in the towel.
- The UI is very minimalistic, which I am a fan of, however I know that it is not acceptable to the majority of the public. Time could be invested to make it prettier.
- I simply uploaded the JSON files that were given to me to Mongo. All of the elevator data should be split into individual documents in a separate collection with more time.
- The step linking a user to an organization needs to be automated.
- The data should be validated & properly handled. I noticed some of the dates were in the future and a plan should be made for how to handle such situations.
- Internationalization should be added to this app, given we are in Germany and everything is written in English.
- The data in the chart could be displayed better. I simply wasn't sure what one wants to ascertain from this data.
