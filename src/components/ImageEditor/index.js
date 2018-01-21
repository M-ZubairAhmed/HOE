import React from 'react'

import Uploader from './components/Uploader'
import Croper from './components/Croper'

export default class PhotoEditor extends React.Component {
  state = {
    photo: null,
    errorMessage: '',
    isCropping: false,
  }

  onImageUploaded = uploadedPhoto => {
    this.setState({
      photo: uploadedPhoto,
      errorMessage: '',
    })
  }

  onImageUploadError = errorMessage => {
    this.setState({
      errorMessage,
    })
  }

  saveUploadedPhoto = () => {
    this.props.onImageSave(this.state.photo)
  }

  clearUploadedPhoto = () => {
    this.setState({
      photo: null,
      errorMessage: '',
    })
  }

  toggleCropping = () => {
    this.setState({
      isCropping: !this.state.isCropping,
    })
  }

  getCroppedPhoto = croppedPhoto => {
    this.setState({ photo: croppedPhoto })
    this.toggleCropping()
  }

  render() {
    if (this.state.isCropping) {
      return (
        <Croper
          photo={this.state.photo}
          maxWidth={800}
          maxHeight={100}
          toggleCropping={this.toggleCropping}
          getCroppedPhoto={this.getCroppedPhoto}
        />
      )
    }
    return (
      <Uploader
        photo={this.state.photo}
        onImageUploaded={this.onImageUploaded}
        onImageUploadError={this.onImageUploadError}
        errorMessage={this.state.errorMessage}
        saveUploadedPhoto={this.saveUploadedPhoto}
        toggleCropping={this.toggleCropping}
        clearUploadedPhoto={this.clearUploadedPhoto}
      />
    )
  }
}
