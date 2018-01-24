import React from 'react'
import { Glyphicon, Image, ButtonToolbar, Button } from 'react-bootstrap'
import FileInput from '../../../../components/FileInput'

import BaseContainer from '../../../../utils/BaseContainer'
import {
  TopImagePreviewStyle,
  BottomButtonToolbarStyle,
} from '../../../../utils/CommonStyles'

let uploadedPhoto
const fileReader = new FileReader()
const defaultStyle = {
  ...{
    height: '400px',
  },
  ...TopImagePreviewStyle,
}
const uploadSpaceStyle = {
  root: {
    width: '100%',
    height: '400px',
    marginTop: '10px',
    marginBottom: '10px',
  },
  innerDiv: {
    paddingTop: '150px',
    textAlign: 'center',
    color: '#BDBDBD',
  },
  icon: {
    fontSize: '50px',
  },
}

export default class Uploader extends React.Component {
  onInputChange = e => {
    uploadedPhoto = e.target.files[0]
    if (uploadedPhoto.size <= 1000000) {
      if (
        uploadedPhoto.type === 'image/png' ||
        uploadedPhoto.type === 'image/jpeg'
      ) {
        fileReader.readAsDataURL(uploadedPhoto)
        fileReader.onloadend = async () => {
          await this.props.onImageUploaded(fileReader.result)
        }
      } else {
        this.props.onImageUploadError(
          'Error! Photos of type JPEG and PNG can only be uploaded',
        )
      }
    } else {
      this.props.onImageUploadError(
        'Error! Photos of type JPEG and PNG less than 1MB can only be uploaded',
      )
    }
  }

  render() {
    return (
      <BaseContainer>
        {this.props.photo ? (
          <Image src={this.props.photo} style={defaultStyle} />
        ) : (
          <FileInput
            name="photoUploaderInput"
            accept="image/*"
            onChange={this.onInputChange}
            style={uploadSpaceStyle.root}>
            <div style={uploadSpaceStyle.innerDiv}>
              <Glyphicon glyph="picture" style={uploadSpaceStyle.icon} />
              <h3>Click to Upload</h3>
            </div>
            {this.props.errorMessage}
          </FileInput>
        )}
        <div style={BottomButtonToolbarStyle}>
          <ButtonToolbar>
            <Button
              bsStyle="success"
              onClick={() => this.props.saveUploadedPhoto()}>
              Save
            </Button>
            {this.props.photo ? (
              <Button
                bsStyle="primary"
                onClick={() => this.props.toggleCropping()}>
                Crop
              </Button>
            ) : null}
            {this.props.photo ? (
              <Button
                bsStyle="danger"
                onClick={() => this.props.clearUploadedPhoto()}>
                Clear
              </Button>
            ) : null}
          </ButtonToolbar>
        </div>
      </BaseContainer>
    )
  }
}
