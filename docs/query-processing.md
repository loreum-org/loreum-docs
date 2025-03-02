# Query Processing in Loreum: Intent Recognition, Solver Assignment, Payment Mechanism, and Reputation-Weighted Execution

## Abstract
Loreum's decentralized inference network processes user queries by leveraging a combination of **Intent-Based Query Interpretation**, **Solver Selection**, **Retrieval-Augmented Generation (RAG)**, and **reputation-weighted query execution**. Each node in the network plays a role in identifying the intent behind a query, selecting the best solver, retrieving knowledge, synthesizing a response, and receiving **stablecoin payments** for successful query processing. Query distribution is determined by the reputation of participating nodes, ensuring high-quality, verifiable, and efficient results. This paper provides a technical overview of how queries are received, interpreted, routed, processed, and monetized in Loreum.

## Introduction
A fundamental challenge in decentralized AI inference is ensuring that responses are both **accurate and trustworthy** while maintaining **economic incentives** for participating nodes. Loreum addresses this by first **understanding the intent behind a query**, then assigning it to the most appropriate solver before leveraging **RAG and a reputation-driven execution model**. To sustain network participation and efficiency, nodes are **compensated in stablecoins** based on their contributions, expertise, and reputation.

## 1. Query Reception and Intent Recognition
Queries in Loreum arrive at a node via the **peer-to-peer (P2P) network** and are processed in multiple stages:

### **1.1 Query Parsing and Intent Extraction**
- The node first **parses** the incoming query, extracting key semantic and syntactic features.
- Using NLP models, the query's **intent** is classified into predefined categories such as factual retrieval, predictive modeling, or multi-step reasoning.
- Metadata such as **context type, domain-specific requirements, and confidence thresholds** are attached to the query.

### **1.2 Solver Identification and Assignment**
- Based on the detected intent, the system identifies the **best solver node** equipped to handle the query.
- The solver node is chosen based on **domain expertise, historical accuracy, and reputation scores**.
- If multiple solvers are relevant, the system distributes tasks across them in parallel.

## 2. Retrieval-Augmented Generation (RAG) in Query Processing
Once a solver is assigned, it enhances query resolution using RAG to retrieve external knowledge dynamically.

### **2.1 Knowledge Retrieval**
1. The solver searches its **local vector database** for relevant documents.
2. If insufficient context is found, it broadcasts a **retrieval request** to other nodes specializing in the same domain.
3. The responses from external nodes are ranked based on **semantic relevance** and **reputation scores**.

### **2.2 Augmentation and Contextualization**
- Retrieved documents are formatted and merged into the query context.
- The solver node generates an enriched response, incorporating both the retrieved knowledge and its **internal inference capabilities**.
- Additional **validation mechanisms** (e.g., cross-referencing with multiple sources) may be applied.

## 3. Reputation-Weighted Query Execution and Payments
Loreum employs a **reputation system** to determine the trustworthiness of nodes when routing queries and validating responses. Reputation is derived from:
- **Historical Accuracy:** Past correctness of responses.
- **Specialization:** Nodes with domain expertise receive higher scores for relevant queries.
- **Latency & Reliability:** Faster, more reliable nodes are prioritized.
- **Consensus Participation:** Nodes that successfully validate others' results gain reputation points.

### **3.1 Query Routing Based on Reputation**
- Queries are assigned to solver nodes with **high reputation in relevant domains**.
- Nodes with low reputation receive fewer critical tasks but may still process secondary queries.
- Malicious or frequently incorrect nodes see their **query privileges reduced or revoked**.

### **3.2 Stablecoin Payment Mechanism**
To incentivize participation, nodes receive **stablecoin payments** for processing queries:
1. **Query Quotation:** When a query is initiated, an estimated cost is calculated based on the **complexity of the query, required compute resources, and retrieval intensity**.
2. **Payment Allocation:**
The Cortex Node is responsible for executing the entire query resolution pipeline and receives payments accordingly:
    - As a Solver, the Cortex earns the highest portion of the payment for generating accurate and high-quality responses.
	- As a Retriever, the Cortex receives micropayments based on the quality and relevance of the data it fetches to support query resolution.
	- As a Validator, the Cortex earns a smaller portion for finalizing and attesting to the correctness of responses before they are delivered.
3. **Reputation-Weighted Compensation:** Higher-reputation nodes receive **preferential query assignments** and **higher payments per query**, ensuring that well-performing nodes are economically incentivized.
4. **Slashing Mechanism:** Nodes that submit incorrect, spam, or low-quality responses may have a portion of their earned fees **clawed back** as penalties, reinforcing trust in the network.

### **3.3 Finalization and Consensus**
1. **Virtual Voting Mechanism**: Multiple nodes independently process the query and compare outputs.
2. **Reputation-Weighted Validation**: Responses from highly reputable nodes are given greater weight in consensus.
3. **Threshold-Based Agreement**: If a sufficient number of high-reputation nodes agree, the response is finalized.
4. **Finalization and Ledger Storage**: The response is added to the network’s audit log for future reference.

## 4. Conclusion
Loreum’s **query processing pipeline** integrates **intent recognition, solver assignment, RAG augmentation, reputation-weighted execution, and stablecoin compensation** to ensure decentralized AI inference is **context-aware, efficient, and economically sustainable**. By dynamically routing queries to the most appropriate solver nodes and financially incentivizing participation, Loreum achieves **high-quality, scalable, and verifiable AI-driven decision-making**. Future research will focus on **optimizing solver selection, improving cross-node retrieval efficiency, and refining real-time payment mechanisms**.

## References
1. Lewis, P., et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.
2. Lamport, L. (1978). Time, Clocks, and the Ordering of Events in a Distributed System.
3. Loreum Technical Documentation (2025). Internal Whitepaper on Reputation Systems and Economic Incentives in Distributed AI.

