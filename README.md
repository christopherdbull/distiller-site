# New startups

Open a pull request, or send a Distiller admin the following files:

    source/startups/<your_startup_name>.md
    source/images/startups/<your_startup_name>/banner.jpg # 507 × 316 px banner image
    source/images/startups/<your_startup_name>/logo.png # 150 x 150 px logo
    source/images/startups/<your_startup_name>/logo-grey.png # 150 x 150 px greyscale logo

A good example for `<your-startup-name>.md` file is [pocketsmith.md](https://raw.githubusercontent.com/te-chris/distiller-site/master/source/startups/pocketsmith.md)

# Old startups

When a startup leaves The Distiller, delete their image folder, and their markdown blurb, and put their name in the `old_startups`
array in `config.rb`. This will put them into the Alumni section of the website.

# Developer setup

Details for developers:

## Setup

To setup,

* Install RVM from [rvm.io](http://rvm.io)
* Run `bundle install` to install the gems

## Development

To run a development server, run

    middleman

## Publishing

To publish to [GitHub pages](https://pages.github.com), run 

    rake publish

To check the build files first, run

    rake build 
