
<p align="center">
  <img src="https://i.imgur.com/55xMnX3t.jpg"/>
</p>
<h1 align="center">HOE</h1>
<h4 align="center">An image cropping and printing tool</h4>

> Meaning :- verb :
> use a hoe to dig (earth) or thin out or dig up (plants).

#### Goal:

Create a react input component that

* allows a user to upload an image
* crop it to a size determined by the user
* save the cropped image to an API
* view the saved image
* print the image

#### Requirements:

* [x] The maximum file size of the initial uploaded image should be 1mb
* [x] The maximum image dimensions after cropping should be 800x100
* [x] upload the image so using the following code and use the returned URL for previewing the image:
  ```Javascript
  function saveImage(imageFile) {
    return Promise.resolve("http://lorempixel.com/800/100/cats/");  
  }
  ```

- [x] The input should be clearable
- [x] no image is a valid value
- [x] There should be a button called "Print Preview". When clicked it should open a new tab, print a page which has the new image centered at the top, and then close the tab after printing
- [x] If no image has been saved then the print button should be disabled
- [x] The displayed image in print preview should be no higher than 100px.

#### Flow Diagram :

![flow-1](https://user-images.githubusercontent.com/17708702/35199466-0245f4f2-ff24-11e7-9445-b5f5cd72b1c8.jpg)
