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

### 3) Even if everything is perfectly done, all exifreaders & metadata extractors react native packages might fail to pull exif geolocation on 13 <=Android version<11 but it works well with photo taken by the camera.

## IV) Environment
React-Native version: latest

### Table representing when the geolocation metadata are being pulled depending on the testing environment:

| ------------------- | photo taken from the app  | photo selected through image picker |
| ------------------- | --------------------------|-------------------------------|
| Android version 13  | :heavy_check_mark:        | :x:|
| Android version 11  | :heavy_check_mark:        | :heavy_check_mark:|

### Click on the image below to redirect to 20 seconds video demonstration with image picker on android 11.

[<img src="https://github.com/abdelhalim97/Photos-in-place/assets/47896397/129fceec-43c1-4b5d-987f-f63e872acad4" width="50%">](https://youtu.be/hG-x5iO3Bz8)

## V) TESTING
Using jest to unit test the application components and functions including mocking many libraries like react-native-config,react-native-image-picker and the libraries responsable of extracting the EXIF.

![image](https://github.com/abdelhalim97/Photos-in-place/assets/47896397/b4922991-04ab-4561-a526-7b984b32dbf5)
