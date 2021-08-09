const Dao = artifacts.require("Dao");
const FundProject = artifacts.require("FundProject");
const Halogen = artifacts.require("Halogen");
const Dao = artifacts.require("StableToken");
const timelockedWallet = artifacts.require("timelockedWallet");
const timelockedWalletFactory = artifacts.require("timelockedWalletFactory");
module.exports = function (deployer) {
  deployer.deploy(Dao);
  deployer.deploy(FundProject);
  deployer.deploy(Halogen);
  deployer.deploy(StableToken);
  deployer.deploy(timelockedWallet);
  deployer.deploy(timelockedWalletFactory);
};
