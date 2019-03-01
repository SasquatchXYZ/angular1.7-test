# American Data Solutions Test

This project is an application developed for a programming test to serve data from an XML file into two different displays: a table view and a business card view.  The application requires the ability to run your own instance of a live server, such as with WebStorm or VSCode's Live Server Extension.  A live server will allow you to simply open the `index.html` file in the `/app` directory without needing Node.js or npm to install the dependencies and run the application.

## Getting Started

To get you started you can simply clone the repository and install the dependencies, unless you have your own means of running a local server...

### Prerequisites

We also use a number of Node.js tools to initialize the application. You must have Node.js
and its package manager (npm) installed.  Or your own way to create a local server running on your machine.

### Install Dependencies

The app is preconfigured `npm` to automatically copy the downloaded AngularJS files to `app/lib` so we
can simply do:

```
npm install
```

Behind the scenes this will also call `npm run copy-libs`, which copies the AngularJS files and
other front end dependencies. After that, you should find out that you have two new directories in
your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/lib` - contains the AngularJS framework files and other front end dependencies

*Note copying the AngularJS files from `node_modules` to `app/lib` makes it easier to serve the
files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [localhost:8000](http://localhost:8000).

### Running the App during Development

This project comes preconfigured with a local development web server. It is a Node.js
tool called [http-server][http-server]. You can start this web server with `npm start`, but you may
choose to install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from any folder by running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own web server, such as Apache or Nginx. Just
configure your server to serve the files under the `app/` directory.
