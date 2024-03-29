import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PostHeader from "./PostHeader";
import Content from "../Main/Content";
import PostFooter from "./PostFooter";

const Post = props => {
  const { post, author, slug, isMdx } = props;
  const frontmatter = (post || {}).frontmatter;
  const title = ((post || {}).frontmatter || {}).title;
  const subTitle = ((post || {}).frontmatter || {}).subTitle;
  const date = ((post || {}).frontmatter || {}).date;
  const html = (post || {}).html;
  const htmlAst = (post || {}).htmlAst;
  const mdx = ((post || {}).code || {}).body;

  //console.log(htmlAst);

  return (
    <Article>
      <PostHeader title={title} subTitle={subTitle} date={date} />
      {isMdx ? <Content mdx={mdx} /> : <Content html={html} />}
      <PostFooter author={author} post={post} slug={slug} />
    </Article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  isMdx: PropTypes.bool,
};

Post.defaultProps = {
  isMdx: false,
};

export default Post;
