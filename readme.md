# Electron /r/Corgi Viewer

Built off of @jaredpalmer's https://github.com/jaredpalmer/electron-starter Electron Starter.

## Imgur and Electron
An electron application that fetches the top posts of the week from imgur.com/r/corgi, and displays them in a grid.

If you'd like to run the app, clone the project and get an Imgur API key: `https://api.imgur.com/#registerapp`
Then, put the client id in a file in /src/ called "imgur.json", call the client id variable "client_id".

Finally, you can run:

`npm i`

`npm start`

In the project root. An electron window should load and the corgis should appear if it works.
