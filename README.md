# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:


### `react-card-flip` 

was used to get access to someones premade card component

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### `my app`

the idea for my app came from knowing that recently the band know as Paramore (which im a huge fan of) had recently removed their site from the internet. I decided to fill that void with a mock
version of my own. Inside you'll find my components i made for different aspects of a band/artist website.

Home: plays a looped muted video snippet of "Hard Times" a song from thier 5th album "After Laughter" while the name of the band is a neon-like font; below that but still over the video is the Navbar which i emulated from their site back when they promoted the album

Music: in my files i have thier entire disography i also have a json file that i fetch and use the data from their to iterate over and over again to display information on each such as: name of album, genre, label, cover and most importantly the music, each song is able to be listened to.

Store: store is simple and just host a small selection of merch the band sold in the past, nothing fancy but for this instead of using a json i just made my array to map in the function, saves file space i guess

Fan Discussion: in here i took a few comments from an actual comment section on Youtube (thier grammy award winning single "Aint it fun") to be exact. i put them into a json so i could later set up my post and form to add new comments or anyone for that matter

About: instead of doing a typical about and use having boring p tags of on and on reading, i wanted to make it fun so i decided to take the 3 main members and thier 4 touring band mates and make them into card that you can flip when clicked to read the back and learn more about the individual