// Sidebar configuration for Loreum Docs
// Organizes the categories and pages for the documentation site.

module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'mission',
      label: 'Mission',
    },  
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'network',
      label: 'Network',
    },
    {
      type: 'doc',
      id: 'consensus',
      label: 'Consensus',
    },
    {
      type: 'doc',
      id: 'slashing',
      label: 'Slashing'
    },
    {
      type: 'doc',
      id: 'tokenomics',
      label: 'Tokenomics',
    },
    {
      type: 'doc',
      id: 'architecture',
      label: 'Architecture',
    },
    {
      type: 'doc',
      id: 'roadmap',
      label: 'Roadmap',
    },
    {
      type: 'doc',
      id: 'governance',
      label: 'Governance',
    },    
    {
      type: 'category',
      label: 'Agreements',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'finders-agreement',
          label: 'Finders Agreement',
        },
      ],
    },
  ],
};

