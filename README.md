# MacReact
A React front end and Firebase back end web app to simulate MacOS

![MacReact](https://i.imgur.com/3OOQrUg.png)

### Front-End (React)

This project was created as an experiment to test out the abilities of React and as a learning experience for myself. I was trying to come up with an application I could try to simulate on the web, and thought, why not an entire OS!

The beauty of React is its statefulness, which works out perfectly for rendering a complex system like this. The state of the OS is managed in the Desktop component, where only currently-running apps are being rendered by the browser as opposed to just hiding currently-disabled apps. This makes the entire application more efficient.

Beyond that, React is intuitive and relatively easy to learn, making it fun to work with and experiment with building progressive web apps. The largest improvement that could be made with this application is incorporating a state manager, and specifically Redux. I have yet to learn this system, but the benefits of using this, especially with something as complex as this application would make sense.

### Back-End (Firebase)
React and Firebase are a match made in heaven, with React's state abilities and Firebase's real-time database, updates between the two happen nearly instantly. Additionally, the API for Firebase is unbelievably easy to use. This is the first project I've used Firebase in, and it took perhaps an hour to set up a new database project, get user authentication and data persistence functioning, and when the project was ready for deployment, Firebase made that happen in about five minutes.

## Currently-function apps
* [Notes](#notes)
* [Preferences](#preferences)

### Notes
This app is based on the Notes app found in MacOS. It allows you to create, edit, save, and delete notes. Features include:
* Note creation
* Note editing/saving
* Note deletion
* Sidebar sorted by last edit
* Title and subtitle are the first and second lines of the note (same in actual Notes app)

### Preferences
This app allows you to control basic operations of the "operating system". Currently this includes:
* Changing the desktop background
* Logging out
