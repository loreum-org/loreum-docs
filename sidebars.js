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
      type: 'category',
      label: 'Consensus',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'dag-abft',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'dag',
          label: 'Directed Acyclic Graph',
        },
        {
          type: 'doc',
          id: 'abft',
          label: 'Asynchronous BFT',
        },
        {
          type: 'doc',
          id: 'slashing',
          label: 'Fraud Prevention'
        },        
      ],
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

