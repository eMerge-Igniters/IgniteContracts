const Ignite = artifacts.require("Ignite");
const IgniteGovernor = artifacts.require("IgniteGovernor");
const PropertyNFT = artifacts.require("PropertyNFT");

module.exports = async function(deployer) {
    await deployer.deploy(Ignite, 1000);
    await deployer.deploy(IgniteGovernor, Ignite.address);
    deployer.deploy(PropertyNFT);
};
