# Photos In Place docummentation

## I: User interface

<img src="https://github.com/abdelhalim97/Photos-in-place/assets/47896397/ae84ba2f-c928-4452-ad76-b81ffe0d5ef6" width="400" height="1000">


## II: How does the application work based on different scenarios 
if u dont select a photo a map will be shown with the current user position. <br />
if u take/select a photo will be dispalyed in the screen and the position where that photo were taken will be displayed on the map with a marker. <br />
if the application fails to pull exif geolocation to whatever reason, the device curent position will be shown as a safety fall back.

## III: Why would the exif geolocation fail to be pulled?

### 1) The application is tested only in an android OS.
### 2) Kindly make sure to activate your gps.
### 3) The image has no geolocation metadata,this can happen for many reasons.For example If you have Samsung phone or any other smarthpone that require certain camera/gallery configuration from user side like the location tags below in my samsung Note 20 camera,found in the camera settings (we are not talking about permissions), please make sure to activate it. 

<img src="https://github.com/abdelhalim97/Photos-in-place/assets/47896397/1a0613bc-4e82-4146-9f6c-9d40775d9820" width="400" height="1000">

### 4)Even with everything is done perfectly it looks like the react native packages fails to pull exif geolocation from the gallery or on 13<=Android version<11 but it works well with photo taken by the camera.

## IV: Environment
React-Native version: latest

| ------------------- | photo taken from the app  | photo selected through gallery|
| ------------------- | --------------------------|-------------------------------|
| Android version 13  | :heavy_check_mark:        | :x:|
| Android version 11  | :heavy_check_mark:        | :heavy_check_mark:|



## : TESTING+
Using jest to unit test the application components and functions including mocking many libraries like react-native-config,react-native-image-picker and the libraries responsable of extracting the EXIF

![image](https://github.com/abdelhalim97/Photos-in-place/assets/47896397/08f45d32-fcfd-4e3b-a4d2-e498b8fcd4fe)
