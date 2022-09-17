# Robot-loging

Setup:
 - Env Requirements:
   1) Node 16.7.0
 - Startup:
   1) Open a terminal in the root folder and run "npm install"
   2) Run "npm start" in the root folder to start local server with POST endpoint
   3) Open another terminal in the CLIENT folder and run "npm start" to start local client server
   4) If your browser didn't open - go to http://localhost:3000
   
Summary:
 1) Created local dev server with REST POST endpoint using Node.js and Express
 2) Created responsive form layout with input validation using React, TypeScript interfaces and React-hook-form
 3) Sending POST request on form submit using http client Axios
 4) Logging response data into the console
 
Note:
 1) I decided not to use any state management solution because we are using simple form submit and don't need any states
 2) I'm not using props as well, because we don't need one
 3) to save time on synthetic events, handling input change, validation and useStates - I used useForm hook 
