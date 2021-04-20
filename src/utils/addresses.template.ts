import { Address } from '@graphprotocol/graph-ts'

// A map of the addresses so the mapping have access to the geb contract addresses
export var addressMap = new Map<string, Address>()

// We also need arrays of the contract addresses because Assembly script does not support loop through maps
export var addressLabels: string[] = []
export var addressValues: Address[] = []

function addEntry(label: string, address: string): void {
  addressMap.set(label, Address.fromHexString(address) as Address)
  addressLabels.push(label)
  addressValues.push(Address.fromHexString(address) as Address)
}

addEntry('ETH_FROM', '{{ETH_FROM}}')
addEntry('PROXY_DEPLOYER', '{{PROXY_DEPLOYER}}')
addEntry('MULTICALL', '{{MULTICALL}}')
addEntry('GEB_MULTISIG', '{{GEB_MULTISIG}}')
addEntry('GEB_MULTISIG_PROXY', '{{GEB_MULTISIG_PROXY}}')
addEntry('GEB_DEPLOY', '{{GEB_DEPLOY}}')
addEntry('GEB_PROT', '{{GEB_PROT}}')
addEntry('PROTOCOL_TOKEN_AUTHORITY', '{{PROTOCOL_TOKEN_AUTHORITY}}')
addEntry('GEB_PAUSE_AUTHORITY', '{{GEB_PAUSE_AUTHORITY}}')
addEntry('GEB_POLLING_EMITTER', '{{GEB_POLLING_EMITTER}}')
addEntry('GEB_SAFE_ENGINE', '{{GEB_SAFE_ENGINE}}')
addEntry('GEB_TAX_COLLECTOR', '{{GEB_TAX_COLLECTOR}}')
addEntry('GEB_LIQUIDATION_ENGINE', '{{GEB_LIQUIDATION_ENGINE}}')
addEntry('GEB_ACCOUNTING_ENGINE', '{{GEB_ACCOUNTING_ENGINE}}')
addEntry('GEB_COIN_JOIN', '{{GEB_COIN_JOIN}}')
addEntry('GEB_SURPLUS_AUCTION_HOUSE', '{{GEB_SURPLUS_AUCTION_HOUSE}}')
addEntry('GEB_DEBT_AUCTION_HOUSE', '{{GEB_DEBT_AUCTION_HOUSE}}')
addEntry('GEB_PAUSE', '{{GEB_PAUSE}}')
addEntry('GEB_PAUSE_PROXY', '{{GEB_PAUSE_PROXY}}')
addEntry('GEB_GOV_ACTIONS', '{{GEB_GOV_ACTIONS}}')
addEntry('GEB_COIN', '{{GEB_COIN}}')
addEntry('GEB_ORACLE_RELAYER', '{{GEB_ORACLE_RELAYER}}')
addEntry('GEB_GLOBAL_SETTLEMENT', '{{GEB_GLOBAL_SETTLEMENT}}')
addEntry('GEB_STABILITY_FEE_TREASURY', '{{GEB_STABILITY_FEE_TREASURY}}')
addEntry('GEB_ESM', '{{GEB_ESM}}')
addEntry('GEB_ESM_TOKEN_BURNER', '{{GEB_ESM_TOKEN_BURNER}}')
addEntry('GEB_RRFM_CALCULATOR', '{{GEB_RRFM_CALCULATOR}}')
addEntry('GEB_DUMMY_RRFM_CALCULATOR', '{{GEB_DUMMY_RRFM_CALCULATOR}}')
addEntry('GEB_RRFM_SETTER', '{{GEB_RRFM_SETTER}}')
addEntry('PROXY_ACTIONS', '{{PROXY_ACTIONS}}')
addEntry('PROXY_ACTIONS_INCENTIVES', '{{PROXY_ACTIONS_INCENTIVES}}')
addEntry('PROXY_ACTIONS_GLOBAL_SETTLEMENT', '{{PROXY_ACTIONS_GLOBAL_SETTLEMENT}}')
addEntry('PROXY_DEBT_AUCTION_ACTIONS', '{{PROXY_DEBT_AUCTION_ACTIONS}}')
addEntry('PROXY_SURPLUS_AUCTION_ACTIONS', '{{PROXY_SURPLUS_AUCTION_ACTIONS}}')
addEntry('SAFE_MANAGER', '{{SAFE_MANAGER}}')
addEntry('GET_SAFES', '{{GET_SAFES}}')
addEntry('FSM_GOV_INTERFACE', '{{FSM_GOV_INTERFACE}}')
addEntry('PROXY_FACTORY', '{{PROXY_FACTORY}}')
addEntry('PROXY_REGISTRY', '{{PROXY_REGISTRY}}')
addEntry('MEDIANIZER_RAI', '{{MEDIANIZER_RAI}}')
addEntry('SPOT_RAI', '{{SPOT_RAI}}')
addEntry('SPOT_FEED_SECURITY_MODULE_RAI', '{{SPOT_FEED_SECURITY_MODULE_RAI}}')
addEntry('ETH', '{{ETH}}')
addEntry('MEDIANIZER_ETH', '{{MEDIANIZER_ETH}}')
addEntry('FEED_SECURITY_MODULE_ETH', '{{FEED_SECURITY_MODULE_ETH}}')
addEntry('GEB_JOIN_ETH_A', '{{GEB_JOIN_ETH_A}}')
addEntry('GEB_COLLATERAL_AUCTION_HOUSE_ETH_A', '{{GEB_COLLATERAL_AUCTION_HOUSE_ETH_A}}')
addEntry('GEB_UNISWAP_SINGLE_KEEPER_FLASH_PROXY_ETH_A', '{{GEB_UNISWAP_SINGLE_KEEPER_FLASH_PROXY_ETH_A}}')
addEntry('GEB_UNISWAP_MULTI_COLLATERAL_KEEPER_FLASH_PROXY', '{{GEB_UNISWAP_MULTI_COLLATERAL_KEEPER_FLASH_PROXY}}')
addEntry('PROXY_PAUSE_ACTIONS', '{{PROXY_PAUSE_ACTIONS}}')
addEntry('PROXY_PAUSE_SCHEDULE_ACTIONS', '{{PROXY_PAUSE_SCHEDULE_ACTIONS}}')
addEntry('GEB_INCENTIVES_MINER', '{{GEB_INCENTIVES_MINER}}')
addEntry('UNISWAP_FACTORY', '{{UNISWAP_FACTORY}}')
addEntry('UNISWAP_ROUTER', '{{UNISWAP_ROUTER}}')
addEntry('GEB_DS_COMPARE', '{{GEB_DS_COMPARE}}')
addEntry('GEB_TX_MANAGER', '{{GEB_TX_MANAGER}}')
addEntry('GEB_COIN_UNISWAP_POOL', '{{GEB_COIN_UNISWAP_POOL}}')
addEntry('GEB_SINGLE_CEILING_SETTER', '{{GEB_SINGLE_CEILING_SETTER}}')
addEntry('CHAINLINK_AGGREGATOR', '{{CHAINLINK_AGGREGATOR}}')