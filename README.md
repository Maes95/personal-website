# Javi Ramírez | personal website
AngularJS-powered on the front end and Ruby on Rails on the back end.

## Installation
To run the app, you will need to have ```ruby```, ```bundler```, ```npm``` and ```bower``` installed in your machine. Navigate to the project folder and

Make sure you have all Ruby gems dependencies installed:

    bundle install

Create and populate the dev db:

    rake db:setup

Get all bower dependencies:

    rake bower:install

You should now have everything you need. Fire up the rails server:

    rails s puma

## Deploying to Heroku
If you are deploying this to Heroku, make sure you run

    heroku config:set BUILDPACK_URL='git://github.com/qnyp/heroku-buildpack-ruby-bower.git#run-bower'

on your application before.
