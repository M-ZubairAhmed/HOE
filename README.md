## Goal:

Create a react input component that

* allows a user to upload an image
* crop it to a size determined by the user
* save the cropped image to an API
* view the saved image
* print the image

#### Requirements:

* [x] The maximum file size of the initial uploaded image should be 1mb _cond_
* [x] The maximum image dimensions after cropping should be 800x100 _cond_
* [x] upload the image so using the following code and use the returned URL for previewing the image: _cond_

  ```Javascript
  function saveImage(imageFile) {
    return Promise.resolve("http://lorempixel.com/800/100/cats/");  
  }
  ```

- [x] The input should be clearable _(drawn)_
- [x] no image is a valid value _(drawn)_
- [x] There should be a button called "Print Preview". When clicked it should open a new tab, print a page which has the new image centered at the top, and then close the tab after printing _(drawn)_
- [x] If no image has been saved then the print button should be disabled _(drawn)_
- [x] The displayed image in print preview should be no higher than 100px. _cond_
