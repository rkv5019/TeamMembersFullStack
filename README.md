# TeamMembersFullStack
A simple full stack app for managing Team Members using React and Django

## Backend setup

The backend is built with Django and PostgreSQL
To set up the backend, navigate into the backend folder and run:

`cd backend`

`pip3 install -r requirements.txt`

If you do not have PostgreSQL you can run:

`brew install postgresql`
`brew services start postgresql@14`

Finally run

`python3 manage.py runserver`

After testing you can stop PostgreSQL with

`brew services stop postgresql@14`

## Frontend setup

The frontend is a simple lightweight React app.
To set up the frontend, navigate intothe frontend folder and run:

`cd frontend`

`npm install`

`npm run dev`

You should then be able to navigate to your localhost to test the application.

## Areas of improvement / Not included

* CORS
* Client/DB Authentication
* UI Accessibility
* Team member alphabetize/sorting
* Implement a custom dialog for user messaging instead of using alerts and window
* Add server-side and client-side validation of phone #
* Extract member form into it's own component
* Clean up and centralize styling (most likely choosing a UI framework to use)

## Screenshots

![The main view](./main.png?raw=true "Main Page")

![The edit view](./edit.png?raw=true "Edit Page")

![The create view](./create.png?raw=true "Create Page")