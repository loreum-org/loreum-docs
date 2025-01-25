import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import matplotlib.pyplot as plt

# Constants
TOTAL_SUPPLY = 100_000_000
START_DATE = datetime(2025, 6, 1)
END_DATE = datetime(2027, 6, 1)

# Token Allocations
ALLOCATIONS = {
    'team': {
        'amount': 20_000_000,
        'initial_unlock': 0.5,  # 50% initial unlock
        'vesting_months': 12,   # Rest vests over 12 months
        'estimated_sell': {
            'initial': 0.05,    # 5% of initial unlock likely to sell
            'monthly': 0.10,    # 10% of monthly unlocks likely to sell
            'long_term': 0.20   # 20% might sell after full vesting
        }
    },
    'investors': {
        'amount': 20_000_000,
        'initial_unlock': 0.5,  # 50% initial unlock
        'vesting_months': 12,   # Rest vests over 12 months
        'estimated_sell': {
            'initial': 0.15,    # 15% of initial unlock likely to sell
            'monthly': 0.20,    # 20% of monthly unlocks likely to sell
            'long_term': 0.30   # 30% might sell after full vesting
        }
    },
    'treasury': {
        'amount': 20_000_000,
        'vesting_months': 36,   # Linear release over 36 months
        'estimated_sell': {
            'monthly': 0.05     # 5% of monthly unlocks might be used/sold
        }
    },
    'public_sale': {
        'amount': 20_000_000,
        'unlock_date': datetime(2026, 1, 1),
        'estimated_sell': {
            'initial': 0.30,    # 30% might sell at TGE
            'monthly': 0.10     # 10% monthly sell pressure after
        }
    },
    'airdrops': {
        'amount': 10_000_000,
        'seasons': 4,           # 4 seasons of airdrops
        'season_length': 6,     # 6 months per season
        'start_date': datetime(2025, 11, 1),
        'estimated_sell': {
            'initial': 0.20,    # 20% might sell immediately
            'monthly': 0.10     # 10% monthly sell pressure
        }
    },
    'liquidity': {
        'amount': 10_000_000,
        'locked': True          # Cannot be sold
    }
}

def calculate_detailed_emissions():
    # Create date range
    dates = pd.date_range(start=START_DATE, end=END_DATE, freq='ME')  # Changed from 'M' to 'ME'
    df = pd.DataFrame(index=dates)
    
    # Initialize columns
    categories = ['unlocked', 'sell_pressure', 'cumulative_unlock', 'available_float']
    for category in ALLOCATIONS.keys():
        for col in categories:
            df[f'{category}_{col}'] = 0

    # Calculate emissions for each category
    for category, params in ALLOCATIONS.items():
        if category == 'liquidity':
            continue  # Skip liquidity tokens as they're locked
            
        if category in ['team', 'investors']:
            # Initial unlock
            initial_amount = params['amount'] * params['initial_unlock']
            df.loc[START_DATE, f'{category}_unlocked'] = initial_amount
            df.loc[START_DATE, f'{category}_sell_pressure'] = (
                initial_amount * params['estimated_sell']['initial']
            )
            
            # Monthly vesting
            monthly_amount = (params['amount'] * (1 - params['initial_unlock']) 
                            / params['vesting_months'])
            for i in range(params['vesting_months']):
                date = START_DATE + pd.DateOffset(months=i)
                if date in df.index:
                    df.loc[date, f'{category}_unlocked'] += monthly_amount
                    df.loc[date, f'{category}_sell_pressure'] += (
                        monthly_amount * params['estimated_sell']['monthly']
                    )
                    
        elif category == 'treasury':
            monthly_amount = params['amount'] / params['vesting_months']
            for i in range(params['vesting_months']):
                date = START_DATE + pd.DateOffset(months=i)
                if date in df.index:
                    df.loc[date, f'{category}_unlocked'] = monthly_amount
                    df.loc[date, f'{category}_sell_pressure'] = (
                        monthly_amount * params['estimated_sell']['monthly']
                    )
                    
        elif category == 'public_sale':
            df.loc[params['unlock_date'], f'{category}_unlocked'] = params['amount']
            df.loc[params['unlock_date'], f'{category}_sell_pressure'] = (
                params['amount'] * params['estimated_sell']['initial']
            )
            
        elif category == 'airdrops':
            season_amount = params['amount'] / params['seasons']
            for i in range(params['seasons']):
                date = params['start_date'] + pd.DateOffset(months=i*params['season_length'])
                if date in df.index:
                    df.loc[date, f'{category}_unlocked'] = season_amount
                    df.loc[date, f'{category}_sell_pressure'] = (
                        season_amount * params['estimated_sell']['initial']
                    )

    # Calculate cumulative metrics
    for category in ALLOCATIONS.keys():
        if category != 'liquidity':
            df[f'{category}_cumulative_unlock'] = df[f'{category}_unlocked'].cumsum()
            df[f'{category}_available_float'] = (
                df[f'{category}_cumulative_unlock'] - df[f'{category}_sell_pressure'].cumsum()
            )

    # Calculate totals
    df['total_unlocked'] = sum(df[f'{cat}_unlocked'] 
                              for cat in ALLOCATIONS.keys() if cat != 'liquidity')
    df['total_sell_pressure'] = sum(df[f'{cat}_sell_pressure'] 
                                   for cat in ALLOCATIONS.keys() if cat != 'liquidity')
    df['cumulative_unlocked'] = df['total_unlocked'].cumsum()
    df['cumulative_sell_pressure'] = df['total_sell_pressure'].cumsum()
    
    return df

def plot_detailed_emissions(df):
    plt.style.use('default')  # Use default style instead of seaborn
    
    # Set figure style
    plt.rcParams['figure.figsize'] = [15, 20]
    plt.rcParams['figure.dpi'] = 300
    plt.rcParams['axes.grid'] = True
    plt.rcParams['grid.alpha'] = 0.3
    
    fig, (ax1, ax2) = plt.subplots(2, 1)
    
    # Color palette
    colors = ['#2B547E', '#4169E1', '#6495ED', '#87CEEB', '#B0E0E6', '#F0F8FF']
    
    # Plot 1: Cumulative Unlocks by Category
    for i, category in enumerate(ALLOCATIONS.keys()):
        if category != 'liquidity':
            ax1.plot(df.index, df[f'{category}_cumulative_unlock'], 
                    label=f'{category.title()} ({ALLOCATIONS[category]["amount"]:,} LORE)',
                    linewidth=2, color=colors[i % len(colors)])
    
    ax1.set_title('Cumulative Token Unlocks by Category', pad=20)
    ax1.set_xlabel('Date')
    ax1.set_ylabel('Tokens Unlocked')
    ax1.legend(bbox_to_anchor=(1.05, 1), loc='upper left')
    ax1.grid(True, alpha=0.3)
    
    # Plot 2: Monthly Sell Pressure
    sell_pressure_data = pd.DataFrame()
    for category in ALLOCATIONS.keys():
        if category != 'liquidity':
            sell_pressure_data[category] = df[f'{category}_sell_pressure']
    
    sell_pressure_data.plot(kind='bar', stacked=True, ax=ax2, 
                          color=colors[:len(sell_pressure_data.columns)])
    ax2.set_title('Monthly Sell Pressure by Category', pad=20)
    ax2.set_xlabel('Date')
    ax2.set_ylabel('Expected Sell Volume (LORE)')
    ax2.legend(title='Categories', bbox_to_anchor=(1.05, 1), loc='upper left')
    
    plt.tight_layout()
    plt.savefig('token_emissions_detailed.png', bbox_inches='tight', dpi=300)

def analyze_market_impact(df):
    print("\n=== Market Impact Analysis ===")
    
    # Peak sell pressure analysis
    max_monthly_sell = df['total_sell_pressure'].max()
    print(f"\nPeak Monthly Sell Pressure: {max_monthly_sell:,.0f} LORE")
    print(f"As % of Total Supply: {(max_monthly_sell/TOTAL_SUPPLY)*100:.2f}%")
    
    # Liquidity requirements
    liquidity_needed = max_monthly_sell * 3  # 3x coverage
    print(f"\nRecommended Liquidity Pool: {liquidity_needed:,.0f} LORE")
    print(f"Current Liquidity Pool: {ALLOCATIONS['liquidity']['amount']:,.0f} LORE")
    
    # Cumulative analysis
    total_expected_sells = df['total_sell_pressure'].sum()
    print(f"\nTotal Expected Sell Volume: {total_expected_sells:,.0f} LORE")
    print(f"As % of Total Supply: {(total_expected_sells/TOTAL_SUPPLY)*100:.2f}%")
    
    # Monthly averages
    monthly_avg_sell = df['total_sell_pressure'].mean()
    print(f"\nAverage Monthly Sell Pressure: {monthly_avg_sell:,.0f} LORE")
    print(f"As % of Total Supply: {(monthly_avg_sell/TOTAL_SUPPLY)*100:.2f}%")

def main():
    df = calculate_detailed_emissions()
    plot_detailed_emissions(df)
    analyze_market_impact(df)
    df.to_csv('token_emissions_detailed.csv')

if __name__ == "__main__":
    main() 