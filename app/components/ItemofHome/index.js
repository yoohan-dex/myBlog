/**
*
* ItemofHome
*
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Panel, Row, Col, Thumbnail, Button, ButtonGroup, Popover, Overlay } from 'react-bootstrap';
import styles from './styles.css';

class ItemofHome extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      hover: false,
    };
    this.over = this.over.bind(this);
    this.out = this.out.bind(this);
    this.hidden = this.hidden.bind(this);
    this.hover = this.hover.bind(this);
    this.leave = this.leave.bind(this);
  }
  over() {
    this.setState({
      show: true,
    });
  }
  hover() {
    this.setState({ hover: true });
  }
  hidden() {
    if (!this.state.hover) {
      this.setState({
        show: false,
        hover: false,
      });
    }
  }
  leave() {
    this.setState({
      show: false,
      hover: false,
    });
  }
  out() {
    setTimeout(this.hidden
      , 300
    );
  }
  render() {
    const url = 'http://localhost:9091/duolaameng.jpg';
    let Pop = (
      <Popover
        id={this.props.id}
        onMouseOver={this.hover}
        onMouseLeave={this.leave}
      >

        <Thumbnail
          bsStyle={styles.thumbnail}
          src={url}
          alt="242x200"
        />
        <h3>Thumbnail label</h3>
        <p>Description</p>

        <Row>
          <Col md={6}>
            <Button bsStyle="primary" block>Follow</Button>
          </Col>
          <Col md={6}>
            <Button bsStyle="default" block>Message</Button>
          </Col>
        </Row>
      </Popover>
    );

    return (
      <Panel>
        <Row>
          <Col md={2} xs={2} >
            <Thumbnail
              ref={this.props.id}
              href="#"
              src={url}
              alt="alright"
              onMouseOver={this.over}
              onMouseLeave={this.out}
            />
            <Overlay
              show={this.state.show}
              placement="right"

              target={() => ReactDOM.findDOMNode(this.refs[this.props.id])}
            >
              {Pop}
            </Overlay>
          </Col>
          <Col md={10} xs={10}>
            <p><strong className={styles.strong}><a href="#">Yoohoo</a></strong><span className={styles.middle}>, 我喜欢一个人，我想给她一个好的结局。我喜欢一个人，我想给她一个好的结局。我喜欢一个人，我想给她一个好的结局。</span><small className={styles.right}>2 hours ago</small></p>
            <p>《one day》里的一句台词。“我无法控制自己对你的难以忘怀，可是我关于你的一切已经再也没有了期待。”</p>
            <p><small className={styles.fontsize}>latest post at 2016/08/08</small></p>
            <ButtonGroup justified>
              <Button href="#">Commend</Button>
              <Button href="#">Share</Button>
              <Button href="#">Like</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Panel>
    );
  }
}
ItemofHome.propTypes = {
  id: React.PropTypes.string.isRequired,
};
export default ItemofHome;
