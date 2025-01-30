
# Loreum Tokenomics
## Allocation Breakdown

```mermaid
pie title Total Supply: 100M
    "Air Drops" : 10
    "Public Sale" : 20
    "Team Allocation" : 20
    "Investors Allocation" : 20
    "Treasury" : 20
    "Liquidity Pools" : 10
```

## Token Distribution

- **Total Supply**: 100,000,000 LORE
- **Team Allocation**: 20,000,000 LORE (20%)
- **Investors Allocation**: 20,000,000 LORE (20%)
- **Treasury**: 20,000,000 LORE (20%)
- **Liquidity Pools**: 10,000,000 LORE (10%)
- **Public Distribution**: 20,000,000 LORE (20%)
  - Airdrops: 10,000,000 LORE (10%) 
  - TGE Sale: 10,000,000 LORE (10%)

### Team Allocation (20%)
Allocated to the founding team, developers, and key contributors. Vesting schedules may apply to ensure long-term alignment with the project.

### Investors Allocation (20%)
Reserved for seed, private, and strategic investors. These tokens are typically distributed based on funding rounds.

### Treasury (20%)
Reserved for protocol growth, ecosystem development, and long-term sustainability of the network.

### Liquidity Pools (10%)
Designated for decentralized exchange (DEX) liquidity to facilitate smooth token trading and minimize slippage.

### Public Distribution (30%)
Distributed through:
- **Airdrops**: 10% Designed to incentivize early community members and adopters.
- **TGE Sale**: 20% Token sales conducted to raise capital and promote widespread token adoption.

## Token Utility

- **Staking**: $LORE Tokens can be staked in Loreum Nodes for $veLORE to earn protocol rewards and participate in governance.
- **Governance**: $veLORE holders whom staked $LORE into Loreum Nodes can participate in DAO governance, voting on proposals and decisions that shape the ecosystem.
- **Incentives**: Used to reward active contributors, participants, and developers.
- **Market Transactions**: Facilitates transactions within the Loreum ecosystem, including marketplace activities or fee payments.

## Vesting Schedule

- **Team Tokens**: 50% fungible, 50% vested over 12 months.
- **Investor Tokens**: 50% fungible, 50% vested over 12 months.
- **Airdrops**: Distributed gradually in Seasons to avoid market disruption.

```mermaid
gantt
    title LORE Token Emissions Schedule
    dateFormat  YYYY-MM
    axisFormat  %Y-%m
    
    section Team (20M)
        .                       :done, gap, 2025-01, 0d
        Initial Unlock (10M)    :done, t1, 2025-06, 1M
        1-Year Vesting (10M)    :t2, 2025-06, 12M
    
    section Investors (20M)
        Initial Unlock (10M)    :done, i1, 2025-06, 1M
        1-Year Vesting (10M)    :i2, 2025-06, 12M
        
    section Treasury (20M)
        Protocol Growth         :tr1, 2025-06, 36M
        Ecosystem Rewards       :tr2, 2025-06, 36M
        
    section Public Sale (20M)
        TGE Sale                :done, p1, 2026-01, 1M

    section Airdrops (10M)
        Season 1 Airdrop        :p2, 2025-11, 6M
        Season 2 Airdrop        :p3, after p2, 6M
        Season 3 Airdrop        :p4, after p3, 6M
        Season 3 Airdrop        :p5, after p4, 6M
        
    section Liquidity (10M)
        DEX Pools              :l1, 2025-06, 1M
```

This tokenomics structure ensures fair distribution, long-term project sustainability, and alignment with the community and stakeholders.
