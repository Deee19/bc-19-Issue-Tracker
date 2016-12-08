# bc-19-Issue-Tracker
Andela Bootcamp Project to build a simple issue tracker application

## Introduction
*  **`Issue-Tracker`** is a JavaScript application.
*  It has the following features;
  *  Login via email and Twitter.
  *  Users raise issue based on issue description, priority etc.
  *  When an issue is raised, an admin user based on the department gets notified and assigns the issue.
  *  The admin marks the issue based.

## Dependencies

### Back End Dependencies
*  This app's functionality depends on multiple packages including;
  *  **[JavaScript](https://www.javascript.com/)** - JavaScript (JS) is a lightweight, interpreted, programming language with first-class functions.
  *  **[Express](http://expressjs.com/)** - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  *  **[Firebase](https://firebase.google.com/)** - Firebase is a mobile and web application platform with tools and infrastructure designed to help developers build high-quality apps. 

## Front End Dependencies
*  **[CSS](http://css.com/)** - The app's login and dashboard templates have been styled using this CSS framework
*  **[BootStrap](https://angularjs.org/)** - This framework facilitates the dynamic aspects of this app. It enables the application of the Single Page Application philosophy and also has mechanisms to make calls to the backend to update the view with recent data.
*  **[JQuery](https://github.com/danialfarid/ng-file-upload)** - This library is an angular component that enables file (images in this case) upload and also features a service that enables posting of these uploads to the back end.
*  **[Font Awesome](https://fortawesome.github.io/Font-Awesome/)** - Iconic font and css toolkit.

## Installation and setup
*  Navigate to a directory of choice on `terminal`.
*  Clone this repository on that directory.
  *  Using SSH;

    >`git clone git@github.com:andela-lkabui/checkpoint4.git`

  *  Using HTTP;

    >`https://github.com/andela-lkabui/checkpoint4.git`

*  Navigate to the repo's folder on your computer
  *  `cd checkpoint4/`
*  Install the app's backend dependencies. For best results, using a [virtual environment](http://virtualenv.readthedocs.org/en/latest/installation.html) is recommended.
  *  `pip install -r requirements`
*  Install the app's database. The default `SQLite` was used for development.
*  Install the app's front end dependencies using bower.
  *  `./node_modules/bower/bin/bower install`

    >In order to use bower, you need to install it through **npm**. You also need to have **node** and **git** installed on your system.

*  Create and apply migrations
  *  `python manage.py makemigrations app`
  *  `python manage.py migrate app`
* Run the app
  *  `python manage.py runserver`
  *  Running the command above will produce output that's similar to the sample below.

  ```
    System check identified 1 issue (0 silenced).
    March 13, 2016 - 18:16:59
    Django version 1.9.2, using settings 'vistagrid.settings'
    Starting development server at http://127.0.0.1:8000/
    Quit the server with CONTROL-C.
  ```