# Loreum Cortex Overview

This document describes the structure and components of the **Loreum Cortex**, a node architecture within the Loreum AI Network.

![Cortex Node Architecture](../static/img/loreum-cortex.png)

## Cortex Node Structure
The **Cortex Node** consists of three primary layers:

### 1. Network Layer
- **API**: Facilitates external interactions, handling user queries and communication between nodes.
- **Consensus**: Manages node agreement, ensuring reliability and correctness of the data and operations across the network.

### 2. Business Layer
- **Agents**: AI-powered modules that process queries, execute specific functions, and collaborate with other agents.
- **Sensors**: Modules that ingest and provide real-time data, enhancing the context and accuracy of agent operations.

### 3. Data Layer
- **SQL**: Structured data storage for persistent and organized information.
- **Redis**: High-speed caching layer for quick data retrieval.
- **vDB (Vector Database)**: Supports AI operations, particularly Retrieval-Augmented Generation (RAG), enabling contextually relevant query processing.

## Agents – Agentic Capability
Agents include specialized modules with specific functions:
- **Broker, Parser, Retriever, Ranker, Solver, Slasher, Account**: Perform roles such as query parsing, data retrieval, ranking of responses, solution generation, fraud mitigation, and account management.
- Elective example Agentic services include models (GPT-4.5, Grok 3, Claude, Llama, DeepSeek) and blockchain/financial services (Ethereum, Bitcoin, Uniswap, Sky, Binance, Bloomberg, Franklin, Stripe, Visa).

## Sensors – Data and API Connectors
Sensors connect external data and APIs to the node, supplying vital information from sources like:
- **Indexer, DA, Resolver**: Specialized roles for indexing data, ensuring data availability, and resolving data dependencies.
- Elective example APIs and Data Sources: Ethereum, Bitcoin, Binance, Bloomberg, Twitter, Google, Graph, Space & Time, EigenDA.

## Key Takeaways
- **Modular Design**: Each Cortex Node is modular and extensible, capable of integrating new agents and sensors easily.
- **Advanced Integration**: Nodes leverage a variety of advanced AI models, financial services, and data connectors to offer comprehensive, real-time functionality.
- **Efficient Data Handling**: The combination of SQL, Redis, and vector databases provides rapid data processing essential for complex, real-time AI tasks.

