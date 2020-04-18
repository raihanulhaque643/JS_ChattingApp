The HTML file includes all scripts required in this project.
Bootstap CDN has been included in index file to use it for styling.
A seperate styles.css file has also been used.

A new project called JS-ChatApp was created in Firebase. The Firebase SDK code snippet was collected from firebase and included in the index file. The entire firebase libary is not required for the project. Hence, only "firebase-app.js" and "firebase-store.js" was included. 
After initialization of the firebase the reference to the firebase was stored in a const called 'db'.

A chat collection was created in firebase database under this project in the website (firebase.google.com). The collection was initialzed with the following dummy data:

First collection:
Field: message with type: string and value: hey guys
Field: username with type: string and value: yoshi
Field: room with type: string and value: general
Field: created_at with type: timestamp and date set to current date

Second collection:
Field: message with type: string and value: yo yoshi
Field: username with type: string and value: mario
Field: room with type: string and value: general
Field: created_at with type: timestamp and date set to current date

