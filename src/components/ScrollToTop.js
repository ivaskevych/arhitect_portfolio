import React from 'react'
import Headroom from 'react-headroom'
import ScrollProgress from 'scrollprogress'

if (typeof window !== `undefined`) {
  require('smoothscroll-polyfill').polyfill();
  window.__forceSmoothScrollPolyfill__ = true;
}

const scrollUp = () => {
  // document.querySelector('.container').scrollIntoView({
  //   behavior: 'smooth',
  //   block: 'start'
  // });
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

class ScrollToTop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    this.progressObserver = new ScrollProgress((x, y) => {
      this.setState({
        progress: y * 100,
      });
    });
  }

  componentWillUnmount() {
    this.progressObserver.destroy();
  }

  render() {
    const progressStyle = {
      width: `${this.state.progress}%`
    };

    return (
      <div className="up-button" onClick={scrollUp}>
        <div className="progress" style={progressStyle} />
        <Headroom disableInlineStyles pinStart={300}>
          <div className="up-button__text">Back To Top</div>
        </Headroom>
      </div>
    );
  }

}

export default ScrollToTop
