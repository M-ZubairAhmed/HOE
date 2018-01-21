import React from 'react'
import Cropper from 'react-cropper'
import { Button, ButtonToolbar } from 'react-bootstrap'

import BaseContainer from '../../../../utils/BaseContainer'
import { BottomButtonToolbarStyle } from '../../../../utils/CommonStyles'
import 'cropperjs/dist/cropper.css'

let croppedPhotoData
const cropperStyle = {
  height: 400,
  width: 'auto',
  marginTop: '10px',
  marginBottom: '10px',
}

export default class ImageCropper extends React.Component {
  onCropChange() {
    croppedPhotoData = this.refs.cropper.getData([true])
    if (
      croppedPhotoData.width >= this.props.maxWidth &&
      croppedPhotoData.width !== this.props.maxWidth
    ) {
      croppedPhotoData.width = this.props.maxWidth
      this.refs.cropper.setData(croppedPhotoData)
    }
    if (
      croppedPhotoData.height >= this.props.maxHeight &&
      croppedPhotoData.height !== this.props.maxHeight
    ) {
      croppedPhotoData.height = this.props.maxHeight
      this.refs.cropper.setData(croppedPhotoData)
    }
  }

  onCropComplete = () => {
    this.props.getCroppedPhoto(this.refs.cropper.getCroppedCanvas().toDataURL())
  }

  render() {
    return (
      <BaseContainer>
        <Cropper
          ref="cropper"
          src={this.props.photo}
          style={cropperStyle}
          guides={true}
          crop={() => this.onCropChange()}
        />
        <div style={BottomButtonToolbarStyle}>
          <ButtonToolbar>
            <Button bsStyle="success" onClick={this.onCropComplete}>
              Done
            </Button>
            <Button
              bsStyle="danger"
              onClick={() => this.props.toggleCropping()}>
              Cancel
            </Button>
          </ButtonToolbar>
        </div>
      </BaseContainer>
    )
  }
}
