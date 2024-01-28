# Photos In Place documentation

## I) User interface

<img src="https://github.com/abdelhalim97/Photos-in-place/assets/47896397/ae84ba2f-c928-4452-ad76-b81ffe0d5ef6" width="400" height="1000">

## II) How does the application work based on different scenarios 
If u take/select a photo,it will be dispalyed in the screen and the position where that photo were taken will be displayed on the map with a marker. <br />
If the application fails to pull exif geolocation to whatever reason, the device current position will be shown as a safety fall back.

## III) Why would the exif geolocation fail to be pulled?

### 1) The application is tested only in an android OS.
### 2) The image has no geolocation metadata,this can happen for many reasons.For example If you have Samsung phone or any other smarthpone that require certain camera/gallery configuration from user side like the location tags below in my samsung Note 20 camera,found in the camera settings, please make sure to activate it. 

<img src="https://github.com/abdelhalim97/Photos-in-place/assets/47896397/1a0613bc-4e82-4146-9f6c-9d40775d9820" width="400" height="1000">

### 3)Even with everything is done perfectly it looks like the react native packages fails to pull exif geolocation from the gallery application(not google photos) or on 13<=Android version<11 but it works well with photo taken by the camera.
### personaly i think the problem with samsung gallery and not android version.

## IV) Environment
React-Native version: latest

### Table representing when the geolocation metadata are being pulled depending on the testing environment

| ------------------- | photo taken from the app  | photo selected through gallery| photo selected through google photos|
| ------------------- | --------------------------|-------------------------------|-------------------------------|
| Android version 13  | :heavy_check_mark:        | :x:| :question:|
| Android version 11  | :heavy_check_mark:        | :question:|:heavy_check_mark:|

### Click on the image below to redirect to 15 seconds video demonstration with google photos as image picker and android 11

[<img src="https://github.com/abdelhalim97/Photos-in-place/assets/47896397/51b8ea8d-2690-4757-a0db-2d8a8518e56c" width="50%">](https://www.youtube.com/watch?v=cC2uVT_AFqA&ab_channel=Abdelhalimbenoun)

## V) TESTING
Using jest to unit test the application components and functions including mocking many libraries like react-native-config,react-native-image-picker and the libraries responsable of extracting the EXIF

![image](https://github.com/abdelhalim97/Photos-in-place/assets/47896397/b4922991-04ab-4561-a526-7b984b32dbf5)
