# NetflixCloneApplication
This is a application that is a clone of Netflix's main UI and functionality. This is an educational endeavour so I can get more familiar with React and Firebase.

Features: 
- Technologies Used: React, JavaScript, Node.js, npm, Webpack, Firebase

- Specific Libraries/Tools/Methodologies used: Styled Components, Compound Components, 
React Router, fuse.js, firestore

- This app replicates the Netflix home page, sign in, sign up, and browse page. It uses compound components and styled components to build this UI. 

To sign up and sign in, the app is connected to firebase and uses firestore to keep the data. It uses firebase authentication to keep a user signed in and automically bypass the signin if their data is stored. 

Once signed in, you click on your profile and can access films and series. You can search for films using live loading using the fuse.js library. Clicking on a film or series will open up a dropdown showing more information. 
