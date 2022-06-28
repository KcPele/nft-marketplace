const {assert, expect} = require("chai")
const {network, ethers, deployments, getNamedAccounts } = require("hardhat")
const { developmentChains } = require("../../helper-hadhat-config.js")

!developmentChains.includes(network.name) ? 
   describe.skip:
   describe("Nft Marketplace test", function() {
            let nftMarktplace, basicNft, deployer, player
            const PRICE = ethers.utils.parseEther("0.1")
            const TOKEN_ID = 0
            befofeEach(async function() {
                deployer = (await getNamedAccounts()).deployer
                player = (await getNamedAccounts()).player
                await deployments.fixture(["all"])
                nftMarktplace = await ethers.getContract("NftMarketplace")
                //how to connect different users
                // somevariable = await nftMarktplace.connect(player)
                // or nftMarktplace = await ethers.getContract("NftMarketplace", player) player will now e connected
                basicNft = await ethers.getContract("BasicNft")
                await basicNft.mintNft()
                await basicNft.approve(nftMarktplace.address, TOKEN_ID)
            })
   })