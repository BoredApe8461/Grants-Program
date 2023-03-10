/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const sidebars = {
  docs: [
    {
      type: 'category',
      label: '👋 Introduction',
      link: {type:'doc', id:'docs/introduction'},
      items: [{type: 'autogenerated', dirName: 'docs/Introduction'}]
    },
    {
      type: 'category',
      label: '📝 Application Process',
      link: {type:'doc', id:'docs/process'},
      items: [{type: 'autogenerated', dirName: 'docs/Process'}]
    },
    {
      type: 'doc',
      id:'docs/maintenance'
    },
    {
      type: 'html',
      value: '<span class="sidebar-divider" />',
    },
    {
      type: 'doc',
      id:'docs/help'
    },
    {
      type: 'doc',
      id:'docs/faq'
    },
    {
      type: 'doc',
      id:'docs/suggesting'
    },
    {
      type: 'doc',
      id:'docs/referral-program'
    },
    {
      type: 'html',
      value: '<span class="sidebar-divider" />',
    },
    {
      type: 'doc',
      id:'docs/funding'
    },
    {
      type: 'doc',
      id:'docs/contribute'
    },
    {
      type: 'doc',
      label: '📜 List of Grants',
      id:'applications/index'
    },
    {
      type: 'category',
      label: '🪧 Requests for Proposal',
      link: {type:'doc', id:'docs/rfps'},
      items: [{type: 'autogenerated', dirName: 'docs/RFPs'}]
    },
    {
      type: 'category',
      label: '🦮 Supporting Documents',
      items: [{type: 'autogenerated', dirName: 'docs/Support Docs'}]
    },
  ]
};

module.exports = sidebars;
