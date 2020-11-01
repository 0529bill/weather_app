import React from 'react';
import { Card, Container, Row, Dropdown } from 'react-bootstrap';

import './Mainpage.scss';

function Mainpage(props) {
  function la() {
    if (props.targetData()) {
      if (
        props.targetData().weatherElement[9].time[0].elementValue.value > 80
      ) {
        return <i class="fas fa-cloud-rain"></i>;
      } else if (
        props.targetData().weatherElement[9].time[0].elementValue.value > 50
      ) {
        return <i className="fas fa-umbrella m-2"></i>;
      } else {
        return <i class="fas fa-sun m-2"></i>;
      }
    } else {
      return null;
    }
  }
  return (
    <Container className="mainpage  d-flex ">
      <Row className="justify-content-center align-items-center vh-100 ">
        <Card
          style={{ width: '18rem' }}
          className="mainpage__card rounded-lg "
          onMouseEnter={() => props.setBackground(true)}
          onMouseLeave={() => props.setBackground(false)}
        >
          <Card.Body>
            <Card.Title className="mainpage__title">
              Real-time Weather Forcast
            </Card.Title>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
                Pick a place
              </Dropdown.Toggle>

              <Dropdown.Menu className="mainpage__dropdown">
                <Dropdown.Item onClick={() => props.handleChange('連江縣')}>
                  連江縣
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('金門縣')}>
                  金門縣
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('宜蘭縣')}>
                  宜蘭縣
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('新竹縣')}>
                  新竹縣
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('苗栗縣')}>
                  苗栗縣
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('彰化縣')}>
                  彰化縣
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('南投縣')}>
                  南投縣
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('雲林縣')}>
                  雲林縣
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('嘉義縣')}>
                  嘉義縣
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('屏東縣')}>
                  屏東縣
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('臺東縣')}>
                  臺東縣
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('花蓮縣')}>
                  花蓮縣
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('澎湖縣')}>
                  澎湖縣
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('基隆市')}>
                  基隆市
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('新竹市')}>
                  新竹市
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('嘉義市')}>
                  嘉義市
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('臺北市')}>
                  臺北市
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('高雄市')}>
                  高雄市
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('新北市')}>
                  新北市
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('臺中市')}>
                  臺中市
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.handleChange('臺南市')}>
                  臺南市
                </Dropdown.Item>

                <Dropdown.Item onClick={() => props.handleChange('桃園市')}>
                  桃園市
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="d-flex">
              <Card.Title className="mt-2 ">
                {props.targetData().locationName
                  ? props.targetData().locationName
                  : null}
              </Card.Title>
              {/* {props.targetData() ? (
                <i className="fas fa-umbrella m-3"></i>
              ) : null} */}
              {la()}
            </div>

            <Card.Subtitle className="mt-2">
              Percipitation:{' '}
              {props.targetData()
                ? `${
                    props.targetData().weatherElement[9].time[0].elementValue
                      .value
                  }%`
                : null}
            </Card.Subtitle>
            <Card.Subtitle className="mt-2">
              Temperature: {''}
              {props.targetData().weatherElement
                ? `${
                    props.targetData().weatherElement[0].time[0].elementValue
                      .value
                  } 度`
                : null}
            </Card.Subtitle>
            <Card.Text className="mt-3">
              {props.targetData().weatherElement
                ? props.targetData().weatherElement[14].time[0].elementValue
                    .value
                : null}
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Mainpage;
