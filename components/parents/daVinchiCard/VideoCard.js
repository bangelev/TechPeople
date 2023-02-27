import React from 'react'
import { Card, Text, Row, Button, Col, Modal, Input } from '@nextui-org/react'
import Image from 'next/image'

const VideoCard = ({ cardData }) => {
  const [visible, setVisible] = React.useState(false)
  const handler = () => setVisible(true)

  const closeHandler = () => {
    setVisible(false)
  }
  return (
    <>
      <Card css={{ w: '200px', h: '300px' }}>
        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
          <Col>
            <Text
              size={20}
              weight="bold"
              transform="uppercase"
              color="#ffffffAA"
            >
              {cardData.principleNo} PRINCIPLE
            </Text>
            <Text size={30} weight="normal" color="black">
              {cardData.principle}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Image
            src={cardData.imgUrl}
            width="100%"
            height="100%"
            objectFit="cover"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: 'absolute',
            bgBlur: '#ffffff66',
            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row justify="flex-end">
                <Button flat auto rounded color="secondary" onPress={handler}>
                  <Text
                    css={{ color: 'inherit' }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Watch video
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <>
        <Modal
          closeButton
          width="630px"
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              {cardData.principle}
            </Text>
          </Modal.Header>
          <Modal.Body>
            <div>
              <iframe
                width="560"
                height="315"
                src={cardData.videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
              Close
            </Button>
            <Button auto onPress={closeHandler}>
              Sign in
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    </>
  )
}

export default VideoCard
