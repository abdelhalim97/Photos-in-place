# Photos In Place docummentation

## I: User interface

<img src="https://github.com/abdelhalim97/Photos-in-place/assets/47896397/ae84ba2f-c928-4452-ad76-b81ffe0d5ef6" width="400" height="1000">


## II: How does it work
if u dont select a photo a map will be shown with the current user position.
if u take/select a photo will be dispalyed in the screen and the position where that photo were taken will be displayed on the map with a marker.
if the application fails to pull exif geolocation to whatever reason, the device curent position will be shown as a safety fall back.

## III: Why would the exif geolocation fail to be pulled?

### 1) The application is tested only on the android device
### 2) Kindly make sure to activate your gps
### 3) If you have Samsung phone or any other smarthpone that require certain configuration from user side like the location tags below in my samsung Note, found in the camera settings (we are not talking about permissions), please make sure to activate it. 

<img src="https://github.com/abdelhalim97/Photos-in-place/assets/47896397/1a0613bc-4e82-4146-9f6c-9d40775d9820" width="400" height="1000">

### 4)Even with everything is done perfectly it looks like the react native packages fails to pull exif geolocation from the gallery or on 13<=Android version<11 but it works well with photo taken by the camera.

## IV: Environment

| ------------------- | photo taken from the app  | photo selected through gallery|
| ------------------- | --------------------------|-------------------------------|
| Android version 13  | :heavy_check_mark:        | :x:|
| Android version 11  | :heavy_check_mark:        | :heavy_check_mark:|



## : TESTING+
including mocking many libraries like react-native-config,react-native-image-picker and the libraries responsable of extracting the EXIF

![image](https://github.com/abdelhalim97/Photos-in-place/assets/47896397/08f45d32-fcfd-4e3b-a4d2-e498b8fcd4fe)


This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
