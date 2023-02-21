
# Being Present | Daily Photo Journal App
An app to encourage you to be present with yourself and record those moments daily.

## Features
* Authentication and authorization features that allows users to sing in or create an account.
* Create a journal log saved to the local database.
* Save and attribute a photo to each journal prompt saved using the Cloudinary API.

### Tech Stack
* JavaScript
* React
* Bootstrap
* Python
* Flask

## Getting Started

### Requirements
- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql

See Environment Setup below for instructions on installing these tools if you
don't already have them.

### Install Dependencies
```bash
# This installs all gems to the system that are listed in Gemfile as well as their dependencies.
bundle install

# This installs all modules that are listed on the package.json file and their dependencies.
npm install --prefix client
```

### Local Servers Setup
You can use the following commands to run the application:

In one terminal, run:
```bash
# run the backend on http://localhost:3000
`rails s`
```

In another one, run:
```bash
# run the frontend on http://localhost:4000
npm start --prefix client
```

### Environment Setup

<details>
   <summary>If needed, here's some instruction on how to get the required technologies for this project.</summary>
   
#### Install Ruby Version 2.7.4

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```
If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

#### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

#### Install Postgresql

**Note**: if you prefer to use SQLite, you will need to make the following changes in the project files:

1. In the `Gemfile`, replace `gem 'pg', '~> 1.1'` with `gem 'sqlite3', '~>
   1.4'`.
2. In the `database.yml` file, change the line `adapter: postgresql` to
   `adapter: sqlite3`.

##### PostgreSQL Installation for WSL

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib libpq-dev
```

Then confirm that Postgres was installed successfully:

```sh
psql --version
```

Run this command to start the Postgres service:

```sh
sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```sh
whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```sh
sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```sh
createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

##### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```sh
brew services start postgresql
```
</details>
