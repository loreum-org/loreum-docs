# Directed Acyclic Graph (DAG) Structure in Loreum
## **A Scalable, Leaderless Framework for Decentralized AI Consensus**

---

## **Abstract**

This paper details the **Directed Acyclic Graph (DAG) structure** used in **Loreum's decentralized intelligence network**. Unlike traditional **blockchain-based ledgers**, DAG provides a **scalable, non-linear transaction processing model** where each transaction is a **vertex**, referencing multiple parents to ensure **parallel processing and rapid confirmation**. Through **gossip-based propagation and parent validation mechanisms**, Loreum achieves a **leaderless, high-throughput consensus model** that enabl...

---

## **1. Introduction**

As decentralized AI and inference networks expand, traditional consensus mechanisms like **Proof-of-Work (PoW)** and **Proof-of-Stake (PoS)** become inefficient due to **sequential transaction validation** and **leader-dependent bottlenecks**. Loreum's DAG structure resolves these issues by:

- Allowing **concurrent transaction validation** without waiting for a miner or validator.
- Utilizing a **non-sequential data structure**, reducing latency for AI-driven applications.
- Enabling **fault-tolerant and asynchronous Byzantine agreement**, ideal for decentralized inference.

DAG structures have been adopted in various **high-performance distributed systems**, including **IOTA (Tangle), Hedera Hashgraph, and Aleph Zero**, demonstrating their **scalability and adaptability**.

---

## **2. DAG Fundamentals in Loreum**

A **Directed Acyclic Graph (DAG)** is a **non-circular graph** where **each transaction (vertex) references multiple parent transactions (edges)**. In the Loreum Cortex, DAG structures are used to:

1. **Optimize Query Processing**: Queries are represented as transactions, processed **in parallel**.
2. **Reduce Confirmation Latency**: Instead of waiting for a block interval, transactions are **individually validated**.
3. **Enhance Scalability**: AI inference requests can be **verified asynchronously**, without leader selection.

### **2.1. Transaction Structure in DAG**
Each transaction in the Loreum DAG contains:

| **Field** | **Description** |
|-----------|----------------|
| **Transaction ID** | Unique hash identifier. |
| **Timestamp** | Creation time for ordering. |
| **Data Payload** | AI query, inference request, or computational result. |
| **Parent References** | Hashes of previous transactions to ensure **DAG integrity**. |
| **Digital Signature** | Ed25519 signature for validation. |
| **Finality Status** | Boolean flag for **DAG-aBFT confirmation**. |

A transaction references **two or more parent transactions**, ensuring that new transactions **confirm and validate past data**, securing the DAG without requiring **PoW or PoS incentives**.

---

## **3. Transaction Propagation and Gossip-Based Communication**

### **3.1. The Gossip Protocol**
To ensure **efficient transaction propagation**, Loreum employs a **gossip-based peer-to-peer (P2P) model**, where:

1. **A node creates a transaction** referencing multiple valid parents.
2. **The node signs the transaction** and sends it to a random subset of its connected peers.
3. **Peers validate the transaction** by checking **signature integrity** and **parent existence**.
4. **Validated transactions are further gossiped**, ensuring rapid network-wide propagation.

This model achieves:

✅ **Redundancy** – Transactions spread across multiple paths, preventing loss.  
✅ **Scalability** – No need for centralized coordination, increasing throughput.  
✅ **Low Latency** – Transactions are confirmed as soon as enough references exist.  

### **3.2. DAG Growth and Confirmation Process**
- Each node **stores a local copy of the DAG**, updating it with **new incoming transactions**.
- Transactions referencing a **higher number of parents** receive **faster confirmations**.
- A transaction is **finalized** once it is referenced by **sufficiently many new transactions**, eliminating re-orgs.

---

## **4. Security Considerations**

DAG-based consensus must ensure **Byzantine resistance, Sybil attack prevention, and transaction consistency**. Loreum achieves this by:

| **Security Threat** | **DAG-Based Mitigation** |
|----------------|--------------------------|
| **Double-Spending** | Multi-parent referencing ensures conflicting transactions are rejected. |
| **Sybil Attack** | Stake-based reputation and **cryptographic weight scoring**. |
| **Eclipse Attack** | Nodes connect to diverse peers, preventing isolation. |
| **Byzantine Behavior** | DAG-aBFT consensus finality prevents malicious reordering. |

---

## **5. Performance Benchmarks**

DAG-based structures significantly **outperform traditional blockchains** in terms of **throughput and finality**.

| **Metric** | **Loreum DAG** | **Traditional Blockchain** |
|-----------|-------------|------------------|
| **Finality Time** | **Milliseconds** | Minutes |
| **Transactions per Second (TPS)** | **100,000+** | ~30 |
| **Leaderless?** | ✅ Yes | ❌ No |
| **Scalability** | ✅ Linear | ❌ Bottlenecked |

---

## **6. Implementation in Golang**

DAG transactions are implemented in **Golang** using **libp2p** for P2P communication and **Ed25519 cryptography** for validation.

### **Example: Creating a DAG Transaction**

```go
type Transaction struct {
    ID        string
    Timestamp time.Time
    Data      string
    Parents   []string
    Signature []byte
}

func CreateTransaction(data string, parents []string, privKey ed25519.PrivateKey) Transaction {
    hash := sha256.Sum256([]byte(data + fmt.Sprint(time.Now().UnixNano())))
    signature := ed25519.Sign(privKey, hash[:])

    return Transaction{
        ID: hex.EncodeToString(hash[:]),
        Timestamp: time.Now(),
        Data: data,
        Parents: parents,
        Signature: signature,
    }
}
```

---

## **7. Use Cases in Loreum**

The DAG structure enables **real-time, parallel AI processing** in the Loreum Cortex:

- **Decentralized AI Inference** – Query-based agent coordination.  
- **High-Throughput Financial Transactions** – Real-time DeFi settlements.  
- **IoT & Sensor Data Aggregation** – Asynchronous real-world event tracking.  

---

## **8. Conclusion & Future Optimizations**

DAG provides **instantaneous transaction finality, high throughput, and decentralization**, making it the optimal choice for **Loreum's AI-driven consensus**. Future improvements include:

- **Adaptive DAG Pruning** to optimize storage usage.
- **Zero-Knowledge Proof (ZKP) Enhancements** for privacy.
- **Cross-chain interoperability** with Ethereum rollups.

---

## **9. References**
1. S. Popov, *The Tangle: A Scalable DAG-Based Ledger* (2017).  
2. Baird, L., *Hashgraph Consensus Algorithm* (2016).  
3. Nakamoto, S., *Bitcoin: A Peer-to-Peer Electronic Cash System* (2008).  

---

## **🔗 Links & Contributions**

📜 **Code**: [GitHub Repository](https://github.com/loreum-org/cortex)  
💡 **Builders**: Join the discussion on [Telegram](https://t.me/loreum_dao)  
🌐 **Website**: [Loreum.org](https://www.loreum.org)  
