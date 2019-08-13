// @flow
import React, { Component } from 'react';
import * as S from './styled-elements';

// type ProjectT = {
//   title: string,
//   subtitle?: string,
//   link: {
//     url?: String,
//     title?: String,
//   },
//   summary: Array<string>,
//   stack: Array<string>
// }

class Project extends Component {
  static defaultProps = {
    title: '',
    subtitle: '',
    link: { url: undefined },
    summary: [],
    stack: []
  };

  constructor() {
    super();
    console.log('project props', this.props);
  }

  render() {
    const { title, link, subtitle, summary, stack } = this.props;
    const slug = title.replace(/\s/g, '');
    return !title ? null : (
      <S.Article
        {...(link.url
          ? { href: link.url, target: '_blank', title: link.title }
          : {})}
        $hasLink={!!link.url}
      >
        <S.Strong>{title}</S.Strong>
        <br />
        {subtitle && subtitle}
        {summary.map((paragraph, i) => (
          <S.P key={`${slug}-p-${i}`}>{paragraph}</S.P>
        ))}
        <S.Em>{stack.join(' / ')}</S.Em>
      </S.Article>
    );
  }
}

export default Project;
