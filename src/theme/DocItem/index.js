import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { useDoc } from '@docusaurus/theme-common/internal';
import DocItem from '@theme-original/DocItem';

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <DiscussionEmbed
        shortname="latinomads"
        config={{
          url: '/teste',
          identifier: '/teste',
          title: 'teste',
          language: 'en_US',
        }}
      />
    </>
  );
}
