//! Registry of type URLs associated with various protobuf types defined in
//! this crate.

// TODO(tarcieri): leverage first-class support for type URLs in prost?
// See: https://github.com/tokio-rs/prost/issues/299

use crate::{cosmos, cosmwasm , ibc, alliance, traits::TypeUrl};

impl TypeUrl for alliance::alliance::MsgDelegate {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgDelegate";
}

impl TypeUrl for alliance::alliance::MsgUndelegate {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgUndelegate";
}

impl TypeUrl for alliance::alliance::MsgRedelegate {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgRedelegate";
}

impl TypeUrl for alliance::alliance::MsgClaimDelegationRewards {
    const TYPE_URL: &'static str = "/alliance.alliance.MsgClaimDelegationRewards";
}

impl TypeUrl for cosmos::bank::v1beta1::MsgMultiSend {
    const TYPE_URL: &'static str = "/cosmos.bank.v1beta1.MsgMultiSend";
}

impl TypeUrl for cosmos::distribution::v1beta1::MsgSetWithdrawAddress {
    const TYPE_URL: &'static str = "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
}

impl TypeUrl for cosmos::distribution::v1beta1::MsgWithdrawDelegatorReward {
    const TYPE_URL: &'static str = "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
}

impl TypeUrl for cosmos::distribution::v1beta1::MsgWithdrawValidatorCommission {
    const TYPE_URL: &'static str = "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
}

impl TypeUrl for cosmos::distribution::v1beta1::MsgFundCommunityPool {
    const TYPE_URL: &'static str = "/cosmos.distribution.v1beta1.MsgFundCommunityPool";
}

impl TypeUrl for cosmos::feegrant::v1beta1::MsgGrantAllowance {
    const TYPE_URL: &'static str = "/cosmos.feegrant.v1beta1.MsgGrantAllowance";
}

impl TypeUrl for cosmos::feegrant::v1beta1::MsgRevokeAllowance {
    const TYPE_URL: &'static str = "/cosmos.feegrant.v1beta1.MsgRevokeAllowance";
}

impl TypeUrl for cosmos::feegrant::v1beta1::BasicAllowance {
    const TYPE_URL: &'static str = "/cosmos.feegrant.v1beta1.BasicAllowance";
}

impl TypeUrl for cosmos::feegrant::v1beta1::PeriodicAllowance {
    const TYPE_URL: &'static str = "/cosmos.feegrant.v1beta1.PeriodicAllowance";
}

impl TypeUrl for cosmos::feegrant::v1beta1::AllowedMsgAllowance {
    const TYPE_URL: &'static str = "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";
}

impl TypeUrl for cosmos::staking::v1beta1::MsgDelegate {
    const TYPE_URL: &'static str = "/cosmos.staking.v1beta1.MsgDelegate";
}

impl TypeUrl for cosmos::staking::v1beta1::MsgUndelegate {
    const TYPE_URL: &'static str = "/cosmos.staking.v1beta1.MsgUndelegate";
}

impl TypeUrl for cosmos::staking::v1beta1::MsgBeginRedelegate {
    const TYPE_URL: &'static str = "/cosmos.staking.v1beta1.MsgBeginRedelegate";
}

impl TypeUrl for cosmos::base::abci::v1beta1::MsgData {
    const TYPE_URL: &'static str = "/cosmos.base.v1beta1.abci.MsgData";
}

impl TypeUrl for cosmos::base::abci::v1beta1::TxMsgData {
    const TYPE_URL: &'static str = "/cosmos.base.v1beta1.abci.TxMsgData";
}

impl TypeUrl for cosmos::auth::v1beta1::BaseAccount {
    const TYPE_URL: &'static str = "/cosmos.auth.v1beta1.BaseAccount";
}

impl TypeUrl for cosmos::auth::v1beta1::ModuleAccount {
    const TYPE_URL: &'static str = "/cosmos.auth.v1beta1.ModuleAccount";
}

impl TypeUrl for cosmwasm::wasm::v1::MsgStoreCode {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgStoreCode";
}

impl TypeUrl for cosmwasm::wasm::v1::MsgInstantiateContract {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgInstantiateContract";
}

impl TypeUrl for cosmwasm::wasm::v1::MsgExecuteContract {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgExecuteContract";
}

impl TypeUrl for cosmwasm::wasm::v1::MsgMigrateContract {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgMigrateContract";
}

impl TypeUrl for cosmwasm::wasm::v1::MsgUpdateAdmin {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgUpdateAdmin";
}

impl TypeUrl for cosmwasm::wasm::v1::MsgClearAdmin {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgClearAdmin";
}

impl TypeUrl for cosmwasm::wasm::v1::MsgStoreCodeResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgStoreCodeResponse";
}

impl TypeUrl for cosmwasm::wasm::v1::MsgInstantiateContractResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgInstantiateContractResponse";
}

impl TypeUrl for cosmwasm::wasm::v1::MsgExecuteContractResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgExecuteContractResponse";
}

impl TypeUrl for cosmwasm::wasm::v1::MsgMigrateContractResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgMigrateContractResponse";
}

impl TypeUrl for cosmwasm::wasm::v1::MsgUpdateAdminResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgUpdateAdminResponse";
}

impl TypeUrl for cosmwasm::wasm::v1::MsgClearAdminResponse {
    const TYPE_URL: &'static str = "/cosmwasm.wasm.v1.MsgClearAdminResponse";
}

impl TypeUrl for ibc::applications::transfer::v1::MsgTransfer {
    const TYPE_URL: &'static str = "/ibc.applications.transfer.v1.MsgTransfer";
}
