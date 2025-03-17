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
      id: 'litepaper',
      label: 'Litepaper',
    },
    // {
    //   type: 'doc',
    //   id: 'mission',
    //   label: 'Mission',
    // },
    {
      type: 'doc',
      id: 'architecture',
      label: 'Architecture',
    },
    // {
    //   type: 'doc',
    //   id: 'solution',
    //   label: 'Problem & Solution',
    // },
    // {
    //   type: 'doc',
    //   id: 'difference',
    //   label: 'Differentiation',
    // },      
    // {
    //   type: 'doc',
    //   id: 'customers',
    //   label: 'Customers & Users',
    // },  
    // {
    //     type: 'doc',
    //     id: 'monetization',
    //     label: 'Monetization',
    // },
    {
      type: 'category',
      label: 'Metrics',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'product-metrics',
          label: 'Product',
        },
        {
          type: 'doc',
          id: 'financial-metrics',
          label: 'Financial',
        },
        {
          type: 'doc',
          id: 'forecast',
          label: 'Forecast',
        }      
      ],
    },
    // {
    //   type: 'doc',
    //   id: 'risk',
    //   label: 'Risks',
    // },      

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
          id: 'reputation',
          label: 'Reputation'
        },
        {
          type: 'doc',
          id: 'slashing',
          label: 'Fraud Prevention'
        },        
      ],
    },
    {
      type: 'category',
      label: 'Cortex',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'cortex',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'rag',
          label: 'RAG',
        },
        {
          type: 'doc',
          id: 'query-processing',
          label: 'Query Processing',
        },
        {
          type: 'doc',
          id: 'agent-hub',
          label: 'Agent Hub'
        },
        {
          type: 'doc',
          id: 'sensor-hub',
          label: 'Sensor Hub'
        },          
      ],
    },    
    // {
    //   type: 'doc',
    //   id: 'landscape',
    //   label: 'Landscape',
    // },      
    // {
    //   type: 'doc',
    //   id: 'architecture',
    //   label: 'Architecture',
    // },
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
      type: 'doc',
      id: 'tokenomics',
      label: 'Tokenomics',
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

