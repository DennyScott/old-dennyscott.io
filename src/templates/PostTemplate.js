import React from 'react';
import PropTypes from 'prop-types';
import Main from '../components/Main/';
import { connect } from 'react-redux';
import { graphql } from 'gatsby';
require('core-js/fn/array/find');
require('prismjs/themes/prism.css');

import { setNavigatorPosition, setNavigatorShape } from '../state/store';
import { moveNavigatorAside } from '../utils/shared';
import Post from '../components/Post/';
import Footer from '../components/Footer/';
import Seo from '../components/Seo';

class PostTemplate extends React.Component {
  moveNavigatorAside = moveNavigatorAside.bind(this);

  componentDidMount() {
    if (this.props.navigatorPosition === 'is-featured') {
      this.moveNavigatorAside();
    }
  }

  render() {
    const { data, pageContext } = this.props;
    return (
      <Main>
        <Post post={data.post} slug={pageContext.slug} author={data.author} />
        <Footer footnote={data.footnote} />
        <Seo data={data.post} />
      </Main>
    );
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  setNavigatorPosition: PropTypes.func.isRequired,
  isWideScreen: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    isWideScreen: state.isWideScreen,
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostTemplate);

//eslint-disable-next-line no-undef
export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        subTitle
        date
        slug
        cover {
          childImageSharp {
            resize(width: 300) {
              src
            }
          }
        }
      }
    }
    author: markdownRemark(fileAbsolutePath: { regex: "/author/" }) {
      id
      html
    }
    footnote: markdownRemark(fileAbsolutePath: { regex: "/footnote/" }) {
      id
      html
    }
  }
`;
