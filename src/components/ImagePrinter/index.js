import React from 'react'
import { Button, ButtonToolbar, Image, Glyphicon } from 'react-bootstrap'

import BaseContainer from '../../utils/BaseContainer'
import {
  TopImagePreviewStyle,
  BottomButtonToolbarStyle,
} from '../../utils/CommonStyles'

const headerStyle = {
  minHeight: '400px',
  marginTop: '10px',
  marginBottom: '10px',
}
const loaderStyle = {
  color: '#BDBDBD',
  fontSize: '50px',
  paddingTop: '100px',
}
export default class ImgPrinter extends React.Component {
  state = {
    isLoading: true,
  }

  onPhotoLoad = () => {
    if (this.props.imageSrc) {
      this.setState({
        isLoading: false,
      })
    }
  }

  showPrintpreview = () => {
    const printPreviewTab = window.open('', '_blank')
    const printingDocument = `
    <html>
      <head>
        <link href="print.css" rel="stylesheet" type="text/css" media="print">
      </head>
      <body onload="window.print()">
        <div style="display: flex;justify-content: center">
          <img src=${this.props.imageSrc} />
        </div>
      </body>
    </html>`
    printPreviewTab.document.open()
    printPreviewTab.document.write(printingDocument)
    printPreviewTab.document.close()
    printPreviewTab.focus()
  }

  render() {
    return (
      <BaseContainer>
        <div style={headerStyle}>
          <Image
            style={TopImagePreviewStyle}
            src={this.props.imageSrc}
            onLoad={this.onPhotoLoad}
          />
          {this.state.isLoading ? (
            this.props.imageSrc.trim().length === 0 ? (
              <Glyphicon glyph="ban-circle" style={loaderStyle}>
                <h3>No photo uploaded</h3>
              </Glyphicon>
            ) : (
              <Glyphicon glyph="hourglass" style={loaderStyle}>
                <h3>Loading...</h3>
              </Glyphicon>
            )
          ) : null}
        </div>
        <div style={BottomButtonToolbarStyle}>
          <ButtonToolbar>
            <Button
              bsStyle="primary"
              onClick={this.showPrintpreview}
              disabled={this.state.isLoading}>
              Print
            </Button>
            <Button
              bsStyle="danger"
              onClick={() => this.props.changeSavedImage()}>
              Change
            </Button>
          </ButtonToolbar>
        </div>
      </BaseContainer>
    )
  }
}
