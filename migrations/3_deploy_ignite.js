const Ignite = artifacts.require("Ignite");
const IgniteGovernor = artifacts.require("IgniteGovernor");

module.exports = async function(deployer) {
    deployer.deploy(Ignite, 1000);
    deployer.deploy(IgniteGovernor, Ignite.address);
};
