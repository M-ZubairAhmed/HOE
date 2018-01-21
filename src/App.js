import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import ImagePrinter from './components/ImagePrinter'
import ImageEditor from './components/ImageEditor'
import { PageTitleStyle } from './utils/CommonStyles'

export default class App extends React.Component {
  state = {
    savedImageURLfromServer: null,
  }

  onImageSave = async editedPhoto => {
    if (editedPhoto) {
      const resolveduploadedImageURL = await Promise.resolve(
        'http://lorempixel.com/800/100/cats/',
      )
      await this.setState({
        savedImageURLfromServer: resolveduploadedImageURL,
      })
    } else {
      this.setState({
        savedImageURLfromServer: ' ',
      })
    }
  }

  changeSavedImage = () => {
    this.setState({
      savedImageURLfromServer: null,
    })
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <h2 style={PageTitleStyle}>
              HOE <br />- image cropping tool
            </h2>
            <Col lg={10} lgOffset={1}>
              {this.state.savedImageURLfromServer ? (
                <ImagePrinter
                  imageSrc={this.state.savedImageURLfromServer}
                  changeSavedImage={this.changeSavedImage}
                />
              ) : (
                <ImageEditor onImageSave={this.onImageSave} />
              )}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
