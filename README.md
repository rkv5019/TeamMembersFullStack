# TeamMembersFullStack
A simple full stack app for managing Team Members using React and Django

## Backend setup

The backend is built with Django
To set up the backend, navigate into the backend folder and run:

`cd backend`

`pipnp r3 install -r requirements.txt`

`python3 manage.py runserver`

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
* Add server-side and client-side validation of phone #
* Extract member form into it's own component
* Clean up and centralize styling (most likely choosing a UI framework to use)

## Screenshots

![The main view](./main.png?raw=true "Main Page")

![The edit view](./edit.png?raw=true "Edit Page")

![The create view](./create.png?raw=true "Create Page")