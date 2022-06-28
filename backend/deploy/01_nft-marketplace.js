
const { network, getNamedAccounts, deployments } = require("hardhat")
const { developmentChains } = require("../helper-hadhat-config.js")
const { verify } = require("../utils/verify")

module.exports = async function({ getNamedAccounts, deployments }){
     const { deploy, log } = deployments

     const { deployer } = await getNamedAccounts()
     log("---------------------------------------")
     const args = []
     const nftMarketPlace = await deploy("NFTMarketplace", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1
     })
     if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        log("Verifying ---------------")
        await verify(nftMarketPlace.address, args)
     }
     log("---------------------------------------")
}

module.exports.tags = ["all", "nftmarketplace"]