import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { connect } from 'react-redux';

import { setNavigatorPosition, setNavigatorShape } from '../state/store';
import { moveNavigatorAside } from '../utils/shared';

import Main from '../components/Main/';
import Page from '../components/Page/';
import Footer from '../components/Footer/';
import Seo from '../components/Seo';

class PageTemplate extends React.Component {
  moveNavigatorAside = moveNavigatorAside.bind(this);

  componentDidMount() {
    if (this.props.navigatorPosition === 'is-featured') {
      this.moveNavigatorAside();
    }
  }

  render() {
    const { data } = this.props;

    return (
      <Main>
        <Page page={data.page} />
        <Footer footnote={data.footnote} />
        <Seo data={data.post} />
      </Main>
    );
  }
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
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
)(PageTemplate);

//eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
    footnote: markdownRemark(fileAbsolutePath: { regex: "/footnote/" }) {
      id
      html
    }
  }
`;
