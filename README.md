#Gulp Workflow
Front-End Gulp workflow

##Contents:
- Sass
- Source Maps
- Autoprefixer
- CSS Minification
- Notifications

##Getting Started:
Steps 1 and 2 are installed globally on your computer and will not need to be re-installed to use on other projects. Once you have the node modules installed you can move these files (`gulpfile.js`, `package.jason`, and `node_modules`) to whatever directory you need to use this workflow in.

1. **Install Node and NPM (Node Project Manager):** Here is a tutorial on how to [install node and NPM](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm).
2. **Install Gulp globally:** If you have not used Gulp before, you will need to install it globally with `npm install -g gulp`. If you have, you can ignore this step.
3. **Clone this repo** with `git clone https://github.com/benjamin-sweeney/gulp-workflow` (in terminal) or download the zip
4. In terminal, **change to this project's directory**. `cd <path-to-your-project-folder->` Alternatively, you can type `cd` and drag the location of the folder into your terminal and hit enter.
5. **Install the node_modules:** When inside the directory which contains this project in terminal, type `npm install`. If (and only if) you're having trouble with npm install, try `sudo npm install` -- this makes you act as a super user. This will install the node modules that are defined within your package.json file.
6. **Running Gulp:** In the terminal, enter `gulp`. To stop gulp, enter `ctrl + C`.

##Notes
- This workflow is set up to watch all files within a `sass` directory and compile to a `css` directory.