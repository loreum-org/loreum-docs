---
marp: true
theme: default
paginate: true
style: |
  section {
    background-color: #ffffff;
  }
  h1 {
    color: #2c3e50;
    font-size: 2.5em;
  }
  h2 {
    color: #34495e;
    font-size: 1.8em;
  }
  ul {
    font-size: 1.2em;
  }
  li {
    margin: 0.5em 0;
  }
  strong {
    color: #2980b9;
  }

---

# Loreum Network
## Decentralized Super-Intelligence Ecosystem

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 0.5em;
}
h2 {
  text-align: center;
  color: #7f8c8d;
}
</style>

---

# The Problem

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  position: relative;
  padding-left: 1.5em;
  margin: 1em 0;
}
li:before {
  content: "⚠️";
  position: absolute;
  left: 0;
}
</style>

- Centralized AI systems control access, data flow, and inference models
- Limited privacy and data sovereignty
- High costs and barriers to entry
- Lack of trust in AI outputs

---

# The Solution

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  position: relative;
  padding-left: 1.5em;
  margin: 1em 0;
}
li:before {
  content: "✨";
  position: absolute;
  left: 0;
}
</style>

- **Decentralized Inference Network**: P2P AI processing
- **Privacy-Preserving**: MPC and homomorphic encryption
- **Reputation-Based**: Trust through performance
- **Stablecoin Payments**: USDC/USDT for predictable costs

---

# Core Components

<style scoped>
ol {
  list-style-type: none;
  padding-left: 0;
}
li {
  position: relative;
  padding-left: 1.5em;
  margin: 1em 0;
  font-size: 1.3em;
}
li:before {
  content: "🔷";
  position: absolute;
  left: 0;
}
</style>

1. **Sensor Hub**: Real-time data ingestion
2. **Agent Hub**: AI model execution
3. **RAG System**: Knowledge retrieval
4. **DAG Consensus**: Scalable validation

---

# Key Differentiators

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  position: relative;
  padding-left: 1.5em;
  margin: 1em 0;
  font-size: 1.3em;
}
li:before {
  content: "💫";
  position: absolute;
  left: 0;
}
</style>

- Privacy-preserving AI inference
- Advanced query routing
- Stablecoin-based monetization
- Structured governance model

---

# Market Opportunity

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  position: relative;
  padding-left: 1.5em;
  margin: 1em 0;
  font-size: 1.3em;
}
li:before {
  content: "📈";
  position: absolute;
  left: 0;
}
</style>

- AI compute market: $500B+ by 2030
- Decentralized AI: 10-15% market share
- Expected TVL: $500M-$2B+ in 5 years

---

# Revenue Streams

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  position: relative;
  padding-left: 1.5em;
  margin: 1em 0;
  font-size: 1.3em;
}
li:before {
  content: "💰";
  position: absolute;
  left: 0;
}
</style>

- AI Query Processing Fees
- Data Retrieval & Aggregation
- Compute Resource Monetization
- Enterprise API Access
- Premium Services

---

# System Overview

<div class="mermaid">
graph LR
    subgraph Core
        CH[Cortex Hub]
        SH[Sensor Hub]
        AH[Agent Hub]
        RAG[RAG System]
    end

    subgraph Network
        DAG[DAG Consensus]
        REP[Reputation]
        P2P[P2P Network]
    end

    subgraph Data
        VDB[Vector DB]
        MPC[MPC Layer]
    end

    subgraph Economic
        STABLE[Stablecoins]
        STAKING[Staking]
    end

    %% Core Connections
    CH --> SH
    CH --> AH
    CH --> RAG

    %% Network Connections
    DAG --> REP
    P2P --> CH
    REP --> CH

    %% Data Connections
    VDB --> CH
    MPC --> CH

    %% Economic Connections
    STABLE --> CH
    STAKING --> REP

    %% External
    P2P --> External[External Nodes]
    External --> P2P

    classDef core fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    classDef network fill:#bfb,stroke:#333,stroke-width:2px,color:#000
    classDef data fill:#fbb,stroke:#333,stroke-width:2px,color:#000
    classDef economic fill:#fbf,stroke:#333,stroke-width:2px,color:#000

    class CH,SH,AH,RAG core
    class DAG,REP,P2P network
    class VDB,MPC data
    class STABLE,STAKING economic
</div>

---

# Query Processing Flow

<div class="mermaid">
graph TD
    subgraph Query Reception
        Q[User Query]
        IP[Intent Parser]
        Q --> IP
    end

    subgraph Intent Analysis
        IP --> IA[Intent Analysis]
        IA -->|Factual| F[Factual Retrieval]
        IA -->|Predictive| P[Predictive Modeling]
        IA -->|Reasoning| R[Multi-step Reasoning]
    end

    subgraph Node Selection
        F --> NS[Node Selection]
        P --> NS
        R --> NS
        NS -->|High Reputation| HN[High Reputation Nodes]
        NS -->|Medium Reputation| MN[Medium Reputation Nodes]
        NS -->|Low Reputation| LN[Low Reputation Nodes]
    end

    subgraph Query Execution
        HN --> QE[Query Execution]
        MN --> QE
        LN --> QE
        QE -->|RAG| KB[Knowledge Base]
        QE -->|MPC| PR[Privacy Layer]
        QE -->|Consensus| CS[Consensus]
    end

    subgraph Response
        CS --> RF[Response Finalization]
        RF -->|Stablecoin Payment| PAY[Payment Distribution]
        RF -->|Reputation Update| RU[Reputation Update]
        RF -->|Final Response| RES[User Response]
    end

    classDef reception fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    classDef analysis fill:#bfb,stroke:#333,stroke-width:2px,color:#000
    classDef selection fill:#fbb,stroke:#333,stroke-width:2px,color:#000
    classDef execution fill:#fbf,stroke:#333,stroke-width:2px,color:#000
    classDef response fill:#bbf,stroke:#333,stroke-width:2px,color:#000

    class Q,IP reception
    class IA,F,P,R analysis
    class NS,HN,MN,LN selection
    class QE,KB,PR,CS execution
    class RF,PAY,RU,RES response
</div>

---

# Development Roadmap

<style scoped>
ol {
  list-style-type: none;
  padding-left: 0;
}
li {
  position: relative;
  padding-left: 1.5em;
  margin: 1em 0;
  font-size: 1.3em;
}
li:before {
  content: "🎯";
  position: absolute;
  left: 0;
}
</style>

1. Foundation & Infrastructure (Q1-Q2 2025)
2. Consensus Implementation (Q3-Q4 2025)
3. Testnet & Refinement (Q1 2026)
4. Mainnet & Governance (Q2-Q3 2026)

---

# Team & Structure

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  position: relative;
  padding-left: 1.5em;
  margin: 1em 0;
  font-size: 1.3em;
}
li:before {
  content: "👥";
  position: absolute;
  left: 0;
}
</style>

- Decentralized development
- Community-driven governance
- Professional legal entities
- Clear separation of concerns

---

# Investment Opportunity

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  position: relative;
  padding-left: 1.5em;
  margin: 1em 0;
  font-size: 1.3em;
}
li:before {
  content: "💎";
  position: absolute;
  left: 0;
}
</style>

- Early-stage decentralized AI
- Clear monetization strategy
- Strong technical foundation
- Professional governance

---

# Thank You

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 0.5em;
}
h2 {
  text-align: center;
  color: #7f8c8d;
}
</style>

## Questions?