import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import Logos from "../components/Logos";
import * as PropTypes from "prop-types"

import '../css/main.scss';

const propTypes = {
  children: PropTypes.func.isRequired,
}

class DefaultLayout extends React.Component {
  constructor () {
    super()

    this.element = null;
    this.calculateDistance = this.calculateDistance.bind(this);
    this.handleDistance = this.handleDistance.bind(this);
  }

  calculateDistance = (elem, mouseX, mouseY) => {
    const elemSizes = elem.getBoundingClientRect();

    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offsetLeft+(elemSizes.width/2)), 2) +
        Math.pow(mouseY - (elem.offsetTop+(elemSizes.height/2)), 2)
      )
    );
  };

  handleDistance = (e) => {
    const mX = e.clientX;
    const mY = e.clientY;
    const distance = this.calculateDistance(this.element, mX, mY);
    if(distance < 100) {
      this.element.style.opacity = (100 - distance)/100;
    } else if (distance > 100) {
      this.element.style.opacity = '0.05';
    }
  };

  componentDidMount () {
    this.element = document.querySelector('#lock');

    window.addEventListener('mousemove', this.handleDistance);
  }

  componentWillUnmount () {
    window.removeEventListener('mousemove', this.handleDistance);
  };

  render() {
    const categories = this.props.data.allContentfulCategory.edges
    return (
      <main className="container">
        <Helmet>
            <meta charSet="utf-8" />
            <title>{`Ustyna Hnes | Portfolio`}</title>
            <meta name="description" content="I am an architect. I work on architectural projects, interior design, 3D modelling and concept projects. I use Bentley Microstation for modelling and drawings, 3ds MAX for rendering and Photoshop for image processing."/>
            <link rel="canonical" href="https://ustyna-hnes.netlify.com/" />
        </Helmet>
        <a href="https://be.contentful.com/login" target="_blank" rel="noopener">
          <div id="lock">
            <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            version="1.1"
            fill="#000"
            width="15px"
            height="15px">
              <g>
                <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z "/>
              </g>
            </svg>
          </div>
        </a>
        <header className="header">
          {/* #26A69A, gold */}
          <Logos width="100" fill="#FFEB3B"/>
          <Link className="logo-title" to="/">
            Ustyna Hnes <sup>portfolio</sup>
          </Link>
        </header>
        {/* navigation */}
        <ul className="categories">
          <li>
            <Link activeClassName="active" exact to={`/`}>
              Всі
            </Link>
          </li>
          {
            categories.map(category =>
              <li key={category.node.id}>
                <Link activeClassName="active" to={`/categories/${category.node.id}/`}>
                  {category.node.title}
                </Link>
              </li>
            )
          }
        </ul>
        {this.props.children()}
      </main>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout

export const CategoriesQuery = graphql`
  query CategoriesQuery {
    allContentfulCategory {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
