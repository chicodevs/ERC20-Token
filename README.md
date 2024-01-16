# Overview

This repository focuses on ERC-20 tokens, drawing parallels with Bitcoin and Litecoin in various aspects. Unlike Bitcoin and Litecoin, which operate on standalone blockchain networks, ERC-20 coins seamlessly run on Ethereum's blockchain network, utilizing gas as the primary transaction fee mechanism.

# Development Environment

The repository leverages the Hardhat framework for Ethereum development and incorporates OpenZeppelin for robust smart contract standards and security.

# Getting Started

1. Clone this repository and run the following command:

    ```shell
    npm ci
    ```

2. Get your wallet (MetaMask, for example) and set it to Sepolia TestNet. You can obtain some SepoliaETH to pay for gas [here](https://sepoliafaucet.com/).

3. Acquire your API key at [https://www.alchemy.com/](https://www.alchemy.com/).

    ![image](https://github.com/chicodevs/ERC20-Token/assets/67576070/4f12b7e0-c16c-41c2-b620-4fc8c0971ce7)

    Navigate to "API Key" and copy the HTTPS Option.

    ![image](https://github.com/chicodevs/ERC20-Token/assets/67576070/2185e7b1-e4ed-4dde-b1ad-a977cd9ed2ca)

4. Create a `.env` file like `.env-example` in this repo and insert your API URL and your wallet private keys so you can sign transactions on the blockchain. **DO NOT SHARE YOUR PRIVATE KEYS WITH ANYONE!**

    This information will be used in the Hardhat settings to connect to the Sepolia testnet.

    ![image](https://github.com/chicodevs/ERC20-Token/assets/67576070/d6f6bc8f-96fd-4175-8465-8253b9796fed)

# Deploying your contract

- Set the token name and symbol in constructor arguments. Defining 'MINTER_ROLE' grants only your wallet access to mint new tokens in this contract.

    ![image](https://github.com/chicodevs/ERC20-Token/assets/67576070/bdab75a2-7a1b-433e-927d-c17debf07a10)

- Run this command to deploy your contract:

    ```shell
    npx hardhat run scripts/deploy.js
    ```

    You will get your contract address in the terminal. Copy it and go to [https://sepolia.etherscan.io/](https://sepolia.etherscan.io/) to search for your contract and view all the transactions.

# Interact with your contract

- With your contract address, go to `scripts/transfer` and paste your contract address and wallet address to which you want to send your new tokens. For example, my wallet is '0x5D296F39a503cD0e003A9fF470e49DCe635E8d9B'. Send me some of your tokens!

    ![image](https://github.com/chicodevs/ERC20-Token/assets/67576070/85f47cb2-6de2-4e82-bdf6-414023eba8d3)

- After setting the information, run the command:

    ```shell
    npx hardhat run scripts/transfer.js
    ```

Enjoy your first ERC-20 Token, and feel free to implement new interactions with scripts!

You can also send me tokens on Binance Smart Chain or Ethereum Mainnet here: '0x5D296F39a503cD0e003A9fF470e49DCe635E8d9B' 😄
