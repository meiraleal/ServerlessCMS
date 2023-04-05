import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import DocItem from '@theme-original/DocItem';

export default function DocItemWrapper(props) {
  const { content, location } = props;

  return (
    <>
      <DocItem {...props} />
      <DiscussionEmbed
        shortname="latinomads"
        config={{
          url: `https://latinomads.com${location.pathname}`,
          identifier: location.pathname,
          title: content?.contentTitle,
        }}
      />
    </>
  );
}
