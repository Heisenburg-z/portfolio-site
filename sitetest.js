// // <!DOCTYPE html>
// // <html lang="en">
// //   <head>
// //     <meta charset="utf-8" />
// //     <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
// //     <meta name="viewport" content="width=device-width, initial-scale=1" />
// //     <meta name="theme-color" content="#000000" />
// //     <meta
// //       name="description"
// //       content="Web site created using create-react-app"
// //     />
// //     <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
// //     <!--
// //       manifest.json provides metadata used when your web app is installed on a
// //       user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
// //     -->
// //     <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
// //     <!--
// //       Notice the use of %PUBLIC_URL% in the tags above.
// //       It will be replaced with the URL of the `public` folder during the build.
// //       Only files inside the `public` folder can be referenced from the HTML.

// //       Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
// //       work correctly both with client-side routing and a non-root public URL.
// //       Learn how to configure a non-root public URL by running `npm run build`.
// //     -->
// //     <title>React App</title>
// //   </head>
// //   <body>
// //     <noscript>You need to enable JavaScript to run this app.</noscript>
// //     <div id="root"></div>
// //     <!--
// //       This HTML file is a template.
// //       If you open it directly in the browser, you will see an empty page.

// //       You can add webfonts, meta tags, or analytics to this file.
// //       The build step will place the bundled scripts into the <body> tag.

// //       To begin the development, run `npm start` or `yarn start`.
// //       To create a production bundle, use `npm run build` or `yarn build`.
// //     -->
// //   </body>
// // </html>


// ===========================================================================
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>Welcome to Firebase Hosting</title>

//     <!-- update the version number as needed -->
//     <script defer src="/__/firebase/11.1.0/firebase-app-compat.js"></script>
//     <!-- include only the Firebase features as you need -->
//     <script defer src="/__/firebase/11.1.0/firebase-auth-compat.js"></script>
//     <script defer src="/__/firebase/11.1.0/firebase-database-compat.js"></script>
//     <script defer src="/__/firebase/11.1.0/firebase-firestore-compat.js"></script>
//     <script defer src="/__/firebase/11.1.0/firebase-functions-compat.js"></script>
//     <script defer src="/__/firebase/11.1.0/firebase-messaging-compat.js"></script>
//     <script defer src="/__/firebase/11.1.0/firebase-storage-compat.js"></script>
//     <script defer src="/__/firebase/11.1.0/firebase-analytics-compat.js"></script>
//     <script defer src="/__/firebase/11.1.0/firebase-remote-config-compat.js"></script>
//     <script defer src="/__/firebase/11.1.0/firebase-performance-compat.js"></script>
//     <!-- 
//       initialize the SDK after all desired features are loaded, set useEmulator to false
//       to avoid connecting the SDK to running emulators.
//     -->
//     <script defer src="/__/firebase/init.js?useEmulator=true"></script>

//     <style media="screen">
//       body { background: #ECEFF1; color: rgba(0,0,0,0.87); font-family: Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; }
//       #message { background: white; max-width: 360px; margin: 100px auto 16px; padding: 32px 24px; border-radius: 3px; }
//       #message h2 { color: #ffa100; font-weight: bold; font-size: 16px; margin: 0 0 8px; }
//       #message h1 { font-size: 22px; font-weight: 300; color: rgba(0,0,0,0.6); margin: 0 0 16px;}
//       #message p { line-height: 140%; margin: 16px 0 24px; font-size: 14px; }
//       #message a { display: block; text-align: center; background: #039be5; text-transform: uppercase; text-decoration: none; color: white; padding: 16px; border-radius: 4px; }
//       #message, #message a { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }
//       #load { color: rgba(0,0,0,0.4); text-align: center; font-size: 13px; }
//       @media (max-width: 600px) {
//         body, #message { margin-top: 0; background: white; box-shadow: none; }
//         body { border-top: 16px solid #ffa100; }
//       }
//     </style>
//   </head>
//   <body>
//     <div id="message">
//       <h2>Welcome</h2>
//       <h1>Firebase Hosting Setup Complete</h1>
//       <p>You're seeing this because you've successfully setup Firebase Hosting. Now it's time to go build something extraordinary!</p>
//       <a target="_blank" href="https://firebase.google.com/docs/hosting/">Open Hosting Documentation</a>
//     </div>
//     <div id="root"></div>
//     <p id="load">Firebase SDK Loading&hellip;</p>

//     <script>
//       document.addEventListener('DOMContentLoaded', function() {
//         const loadEl = document.querySelector('#load');
//         // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//         // // The Firebase SDK is initialized and available here!
//         //
//         // firebase.auth().onAuthStateChanged(user => { });
//         // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
//         // firebase.firestore().doc('/foo/bar').get().then(() => { });
//         // firebase.functions().httpsCallable('yourFunction')().then(() => { });
//         // firebase.messaging().requestPermission().then(() => { });
//         // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
//         // firebase.analytics(); // call to activate
//         // firebase.analytics().logEvent('tutorial_completed');
//         // firebase.performance(); // call to activate
//         //
//         // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

//         try {
//           let app = firebase.app();
//           let features = [
//             'auth', 
//             'database', 
//             'firestore',
//             'functions',
//             'messaging', 
//             'storage', 
//             'analytics', 
//             'remoteConfig',
//             'performance',
//           ].filter(feature => typeof app[feature] === 'function');
//           loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
//         } catch (e) {
//           console.error(e);
//           loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
//         }
//       });
//     </script>
//   </body>
// </html>

