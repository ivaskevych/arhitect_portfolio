import React, { Component } from "react";
import PropTypes from "prop-types";

class Logos extends Component {
  constructor(props) {
    super(props);
    this.icons = {
      icon_1: (
        <svg
          width={this.props.width}
          fill={this.props.fill}
          id="icon_1"
          version="1.0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <polygon points="146.7,93.6 146.7,84.2 139.7,84.2 139.7,90.4 114,78.8 66.1,100.4 68.9,106.8 77.4,103 77.4,114.2 20,114.2     20,121.2 98,121.2 98,114.2 84.4,114.2 84.4,99.8 114,86.5 159.1,106.8 161.9,100.4   " />
          </g>
        </svg>
      ),
      icon_2: (
        <svg
          width={this.props.width}
          fill={this.props.fill}
          id="icon_2"
          version="1.0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <polygon points="171,92.7 123,71.2 75.1,92.7 78,99.1 123,78.8 153.9,92.7 153.9,128.8 160.9,128.8 160.9,95.9 168.1,99.1    " />
              <polygon points="29,113.5 38.5,113.5 38.5,128.8 45.5,128.8 45.5,113.5 117,113.5 117,106.5 29,106.5    " />
            </g>
          </g>
        </svg>
      ),
      icon_3: (
        <svg
          width={this.props.width}
          fill={this.props.fill}
          id="icon_3"
          version="1.0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M166.9,93.5L152,67.6L137,93.5c-3.1,5.4-3.1,11.9,0,17.3c2.5,4.4,6.7,7.3,11.4,8.3v6.3h-33v-24.5l8.3,3.7l2.9-6.4    L78.7,76.7L30.7,98.3l2.9,6.4l8.3-3.7v31.5H112h3.5h40V119c4.8-1,8.9-3.9,11.4-8.3C170,105.4,170,98.9,166.9,93.5z M48.9,125.4    V97.8l29.8-13.4l29.8,13.4v27.6H48.9z M160.9,107.3c-1.2,2.1-3.1,3.7-5.4,4.5V100h-7v11.8c-2.2-0.8-4.1-2.4-5.4-4.5    c-1.9-3.2-1.9-7,0-10.3l8.9-15.4l8.9,15.4C162.7,100.2,162.7,104,160.9,107.3z" />
          </g>
        </svg>
      ),
      icon_4: (
        <svg
          width={this.props.width}
          fill={this.props.fill}
          id="icon_4"
          version="1.0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M147.9,93.7l-11.1-5V77h-7v8.6L100,72.1L52.1,93.7l2.9,6.4l8.3-3.7v31.5h73.6V96.4l8.3,3.7L147.9,93.7z M129.8,120.9H70.2    V93.2L100,79.8l29.8,13.4V120.9z" />
          </g>
        </svg>
      ),
      icon_5: (
        <svg
          width={this.props.width}
          fill={this.props.fill}
          id="icon_5"
          version="1.0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <polygon points="110.4,90.5 110.4,79.9 118.3,83.5 121.2,77.1 73.3,55.5 25.3,77.1 28.2,83.5 36.5,79.8 36.5,144.5 76.8,144.5      76.8,128.2 69.8,128.2 69.8,137.5 43.5,137.5 43.5,76.6 73.3,63.2 103.4,76.8 103.4,90.5 73.3,90.5 73.3,97.5 103.4,97.5      106.9,97.5 174.7,97.5 174.7,90.5    " />
              <path d="M154,135.1h4.2v-17.3h-2l-3-10.9h-29.3l-3,10.9h-2v17.3h4.2v2.3h-10.7v7h52.3v-7H154V135.1z M125.8,128.1v-3.3h25.3v3.3     H125.8z M129.2,113.9h18.7l1.1,3.9h-20.8L129.2,113.9z M130,135.1h17v2.3h-17V135.1z" />
            </g>
          </g>
        </svg>
      ),
      icon_6: (
        <svg
          width={this.props.width}
          fill={this.props.fill}
          id="icon_6"
          version="1.0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <polygon points="176.4,89.4 166.4,89.4 159.4,89.4 115.6,89.4 102.6,83.6 102.6,73.9 95.6,73.9 95.6,80.4 71.5,69.6 23.6,91.2      26.5,97.5 34.7,93.8 34.7,130.4 74.8,130.4 74.8,112.4 67.8,112.4 67.8,123.4 41.7,123.4 41.7,90.7 71.5,77.3 114.1,96.4      159.4,96.4 159.4,105.4 166.4,105.4 166.4,96.4 176.4,96.4    " />
              <polygon points="127.1,123.4 81.8,123.4 81.8,130.4 134.1,130.4 134.1,119.4 159.4,119.4 159.4,130.4 166.4,130.4 166.4,112.4      127.1,112.4    " />
            </g>
          </g>
        </svg>
      ),
      icon_7: (
        <svg
          width={this.props.width}
          fill={this.props.fill}
          id="icon_7"
          version="1.0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M173.5,107.9l-2.9-6.4l-22.2,10V92.1l11.5-5.2l-2.9-6.4l-8.6,3.9V56.6h-7v17.8l-8.6-3.9l-2.9,6.4l11.5,5.2v16.3l-22.2-10    l-2.9,6.4l25.1,11.3v30.4h-30.2V112l8.3,3.7l2.9-6.4L74.4,87.7l-47.9,21.6l2.9,6.4l8.3-3.7v31.5h70.1h3.5h37.2v-24.2L173.5,107.9z     M44.6,136.4v-27.6l29.8-13.4l29.8,13.4v27.6H44.6z" />
          </g>
        </svg>
      ),
      icon_8: (
        <svg
          width={this.props.width}
          fill={this.props.fill}
          id="icon_8"
          version="1.0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M23.5,115.5" />
            <g>
              <polygon points="56.7,91.9 86.6,78.5 131.6,98.8 134.5,92.4 118.8,85.3 118.8,76.7 111.8,76.7 111.8,82.2 86.6,70.8 38.6,92.4      41.5,98.8 49.7,95.1 49.7,129.2 86.6,129.2 86.6,122.2 56.7,122.2    " />
              <rect height="7" width="74.8" x="86.6" y="105.5" />
            </g>
          </g>
        </svg>
      ),
      icon_9: (
        <svg
          width={this.props.width}
          fill={this.props.fill}
          id="icon_9"
          version="1.0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <polygon points="152.3,117.2 142.7,105.7 109.7,105.7 102.1,115.1 89.5,117.4 89.5,133.9 96.5,133.9 96.5,123.3 106,121.6      113.1,112.7 139.4,112.7 148.5,123.5 161.9,126.2 161.9,133.9 168.9,133.9 168.9,120.5    " />
              <polygon points="49.2,87.2 79,73.8 124.1,94.1 127,87.7 79,66.1 31.1,87.7 34,94.1 42.2,90.4 42.2,133.9 82.5,133.9 82.5,126.9      49.2,126.9    " />
            </g>
          </g>
        </svg>
      ),
      icon_10: (
        <svg
          width={this.props.width}
          fill={this.props.fill}
          id="icon_10"
          version="1.0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M23.5,115.5" />
            <g>
              <path d="M147.9,87.7L100,66.1L52.1,87.7l2.9,6.4l8.3-3.7v43.5h33.3h7h33.3V90.4l8.3,3.7L147.9,87.7z M129.8,126.9h-26.3v-12.3h-7     v12.3H70.2V87.2L100,73.8l29.8,13.4V126.9z" />
              <rect height="7" width="17" x="91.5" y="93.5" />
            </g>
          </g>
        </svg>
      ),
      icon_11: (
        <svg
          width={this.props.width}
          fill={this.props.fill}
          id="icon_11"
          version="1.0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <polygon points="85.9,94.8 128.5,75.6 173.5,95.9 176.4,89.5 128.5,67.9 104.4,78.8 104.4,72.2 97.4,72.2 97.4,81.9 84.4,87.8      40.6,87.8 33.6,87.8 23.6,87.8 23.6,94.8 33.6,94.8 33.6,132.1 40.6,132.1 40.6,94.8    " />
              <polygon points="158.3,104 71.4,104 71.4,111 158.3,111 158.3,132.1 165.3,132.1 165.3,111 175.3,111 175.3,104 165.3,104    " />
            </g>
          </g>
        </svg>
      ),
      icon_12: (
        <svg
          width={this.props.width}
          fill={this.props.fill}
          id="icon_12"
          version="1.0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M23.5,115.5" />
            <polygon points="153.6,100.7 153.6,91.4 146.6,91.4 146.6,97.6 120.9,86 92.8,98.7 64.7,86 31.1,101.1 34,107.5 64.7,93.7     84.3,102.5 73,107.6 75.9,114 120.9,93.7 166,114 168.9,107.6   " />
          </g>
        </svg>
      )
    }
    this.state = {
      logo: this.icons['icon_5']
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  getRandom = items => {
    const keys = Object.keys(items)
    const randomElement = keys[Math.floor(Math.random() * keys.length)];

    return items[randomElement];
  };

  randomLogo = () => this.getRandom(this.icons);

  componentWillMount() {
    this.setState({
      logo: this.randomLogo()
    });
  }

  clickHandler() {
    this.setState({
      logo: this.randomLogo()
    });
  }

  render() {
    return (
      <div
        className="logo"
        onClick={this.clickHandler}
        onMouseLeave={this.clickHandler}
      >
        {this.state.logo}
      </div>
    );
  }
}

Logos.propTypes = {
  width: PropTypes.string,
  fill: PropTypes.string
};

Logos.defaultProps = {
  width: "50",
  fill: "#000"
};

export default Logos;
