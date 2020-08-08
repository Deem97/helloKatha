**Instalation**
1) The app is designed to  Android OS Version - Android Lollipop from upward
2) To install the app you can download the apk file and install it on your android device

**System Requirements**
1) Android OS Version - Android Lollipop from upward
2) Internal Storage - Minimum 27mb

**Configuration**
1) Sometimes when you downloaded the apk and trying to install there may be system message "This APK file might contain unsafe content". If it occurs you have to give the permission to install it. Allow Unkown sources in device's security settings.

2) If the system prompts you "You may not have a proper app for viewing this content". You can go to device's file manger and view downloaded apk and intsall it.

**How to Use**

- After a successfull installation user can register to the app by providing user name,email and a password. 
- Then user redirect to the home screen and at there user can view all the users and by tapping on them user can chat with them. 
- At the home screen if user wants to update profile picture user can do it.
- If user wants to log out from the system user can do it from the home screen and if the user wants to log in again by providing email and password user can log in to the system.

**Set up the Project**

1) First you have to setting up the develoment environment for the project. In this project I used React Native CLI. In windows development OS and Android Target OS first you need to have Node,Python,JDk and Android Studio.

2) After that you can create the new app using **npx react-native init helloKatha** 

3) Then you can install required npm pakages.
- @react-native-community/async-storage
- @react-native-community/masked-view
- @react-navigation/native
- @react-navigation/stack
- firebase
- react-native-gesture-handler
- react-native-image-picker
- react-native-safe-area-context
- react-native-screens
- react-native-vector-icons

Above 1,2,3 steps are for setup the project from the begining.
If you set up the project by downloading from github you have to setup the environment and run **npm install**.

If you setup project from the begining you have to add firebase configurations in android folder.

4) Then can execute the project using **npx react-native run-android --port=8082** command.

**Special configuration**

1) When I setup the project I got some errors. 
Then I Changed the
- android\build.gradle
- android\gradle\wrapper\gradle-wrapper.properties

Added
- local.properties file to android folder

Those files are separately added with the submission.




