/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import {
  VoteOption,
  WeightedVoteOption,
  voteOptionFromJSON,
  voteOptionToJSON,
} from "../../../cosmos/gov/v1/gov";
import { BrowserHeaders } from "browser-headers";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "cosmos.gov.v1";

/** Since: cosmos-sdk 0.46 */

/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
  messages: Any[];
  initialDeposit: Coin[];
  proposer: string;
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
}

/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  proposalId: Long;
}

/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */
export interface MsgExecLegacyContent {
  /** content is the proposal's content. */
  content?: Any;
  /** authority must be the gov module address. */
  authority: string;
}

/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */
export interface MsgExecLegacyContentResponse {}

/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
  proposalId: Long;
  voter: string;
  option: VoteOption;
  metadata: string;
}

/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {}

/** MsgVoteWeighted defines a message to cast a vote. */
export interface MsgVoteWeighted {
  proposalId: Long;
  voter: string;
  options: WeightedVoteOption[];
  metadata: string;
}

/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */
export interface MsgVoteWeightedResponse {}

/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
  proposalId: Long;
  depositor: string;
  amount: Coin[];
}

/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}

const baseMsgSubmitProposal: object = { proposer: "", metadata: "" };

export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitProposal } as MsgSubmitProposal;
    message.messages = [];
    message.initialDeposit = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proposer = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitProposal {
    const message = { ...baseMsgSubmitProposal } as MsgSubmitProposal;
    message.messages = [];
    message.initialDeposit = [];
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Any.fromJSON(e));
      }
    }
    if (object.initialDeposit !== undefined && object.initialDeposit !== null) {
      for (const e of object.initialDeposit) {
        message.initialDeposit.push(Coin.fromJSON(e));
      }
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = String(object.proposer);
    } else {
      message.proposer = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata);
    } else {
      message.metadata = "";
    }
    return message;
  },

  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.messages = [];
    }
    if (message.initialDeposit) {
      obj.initialDeposit = message.initialDeposit.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.initialDeposit = [];
    }
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = { ...baseMsgSubmitProposal } as MsgSubmitProposal;
    message.messages = [];
    message.initialDeposit = [];
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Any.fromPartial(e));
      }
    }
    if (object.initialDeposit !== undefined && object.initialDeposit !== null) {
      for (const e of object.initialDeposit) {
        message.initialDeposit.push(Coin.fromPartial(e));
      }
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    } else {
      message.proposer = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    return message;
  },
};

const baseMsgSubmitProposalResponse: object = { proposalId: Long.UZERO };

export const MsgSubmitProposalResponse = {
  encode(message: MsgSubmitProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitProposalResponse } as MsgSubmitProposalResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitProposalResponse {
    const message = { ...baseMsgSubmitProposalResponse } as MsgSubmitProposalResponse;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    return message;
  },

  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = { ...baseMsgSubmitProposalResponse } as MsgSubmitProposalResponse;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    return message;
  },
};

const baseMsgExecLegacyContent: object = { authority: "" };

export const MsgExecLegacyContent = {
  encode(message: MsgExecLegacyContent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecLegacyContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExecLegacyContent } as MsgExecLegacyContent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecLegacyContent {
    const message = { ...baseMsgExecLegacyContent } as MsgExecLegacyContent;
    if (object.content !== undefined && object.content !== null) {
      message.content = Any.fromJSON(object.content);
    } else {
      message.content = undefined;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    return message;
  },

  toJSON(message: MsgExecLegacyContent): unknown {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content = message.content ? Any.toJSON(message.content) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExecLegacyContent>): MsgExecLegacyContent {
    const message = { ...baseMsgExecLegacyContent } as MsgExecLegacyContent;
    if (object.content !== undefined && object.content !== null) {
      message.content = Any.fromPartial(object.content);
    } else {
      message.content = undefined;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    return message;
  },
};

const baseMsgExecLegacyContentResponse: object = {};

export const MsgExecLegacyContentResponse = {
  encode(_: MsgExecLegacyContentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecLegacyContentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExecLegacyContentResponse } as MsgExecLegacyContentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgExecLegacyContentResponse {
    const message = { ...baseMsgExecLegacyContentResponse } as MsgExecLegacyContentResponse;
    return message;
  },

  toJSON(_: MsgExecLegacyContentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgExecLegacyContentResponse>): MsgExecLegacyContentResponse {
    const message = { ...baseMsgExecLegacyContentResponse } as MsgExecLegacyContentResponse;
    return message;
  },
};

const baseMsgVote: object = { proposalId: Long.UZERO, voter: "", option: 0, metadata: "" };

export const MsgVote = {
  encode(message: MsgVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVote } as MsgVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        case 4:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVote {
    const message = { ...baseMsgVote } as MsgVote;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = voteOptionFromJSON(object.option);
    } else {
      message.option = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata);
    } else {
      message.metadata = "";
    }
    return message;
  },

  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgVote>): MsgVote {
    const message = { ...baseMsgVote } as MsgVote;
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    } else {
      message.option = 0;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    return message;
  },
};

const baseMsgVoteResponse: object = {};

export const MsgVoteResponse = {
  encode(_: MsgVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgVoteResponse {
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse;
    return message;
  },

  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse;
    return message;
  },
};

const baseMsgVoteWeighted: object = { proposalId: Long.UZERO, voter: "", metadata: "" };

export const MsgVoteWeighted = {
  encode(message: MsgVoteWeighted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeighted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVoteWeighted } as MsgVoteWeighted;
    message.options = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 4:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVoteWeighted {
    const message = { ...baseMsgVoteWeighted } as MsgVoteWeighted;
    message.options = [];
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.options !== undefined && object.options !== null) {
      for (const e of object.options) {
        message.options.push(WeightedVoteOption.fromJSON(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata);
    } else {
      message.metadata = "";
    }
    return message;
  },

  toJSON(message: MsgVoteWeighted): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    if (message.options) {
      obj.options = message.options.map((e) => (e ? WeightedVoteOption.toJSON(e) : undefined));
    } else {
      obj.options = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgVoteWeighted>): MsgVoteWeighted {
    const message = { ...baseMsgVoteWeighted } as MsgVoteWeighted;
    message.options = [];
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.options !== undefined && object.options !== null) {
      for (const e of object.options) {
        message.options.push(WeightedVoteOption.fromPartial(e));
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = "";
    }
    return message;
  },
};

const baseMsgVoteWeightedResponse: object = {};

export const MsgVoteWeightedResponse = {
  encode(_: MsgVoteWeightedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeightedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVoteWeightedResponse } as MsgVoteWeightedResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgVoteWeightedResponse {
    const message = { ...baseMsgVoteWeightedResponse } as MsgVoteWeightedResponse;
    return message;
  },

  toJSON(_: MsgVoteWeightedResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse {
    const message = { ...baseMsgVoteWeightedResponse } as MsgVoteWeightedResponse;
    return message;
  },
};

const baseMsgDeposit: object = { proposalId: Long.UZERO, depositor: "" };

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeposit } as MsgDeposit;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64() as Long;
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeposit {
    const message = { ...baseMsgDeposit } as MsgDeposit;
    message.amount = [];
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = Long.fromString(object.proposalId);
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = String(object.depositor);
    } else {
      message.depositor = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = { ...baseMsgDeposit } as MsgDeposit;
    message.amount = [];
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = object.proposalId as Long;
    } else {
      message.proposalId = Long.UZERO;
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    } else {
      message.depositor = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgDepositResponse: object = {};

export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDepositResponse {
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
    return message;
  },

  toJSON(_: MsgDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
    return message;
  },
};

/** Msg defines the gov Msg service. */
export interface Msg {
  /** SubmitProposal defines a method to create new proposal given a content. */
  SubmitProposal(
    request: DeepPartial<MsgSubmitProposal>,
    metadata?: grpc.Metadata,
  ): Promise<MsgSubmitProposalResponse>;
  /**
   * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   * to execute a legacy content-based proposal.
   */
  ExecLegacyContent(
    request: DeepPartial<MsgExecLegacyContent>,
    metadata?: grpc.Metadata,
  ): Promise<MsgExecLegacyContentResponse>;
  /** Vote defines a method to add a vote on a specific proposal. */
  Vote(request: DeepPartial<MsgVote>, metadata?: grpc.Metadata): Promise<MsgVoteResponse>;
  /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  VoteWeighted(
    request: DeepPartial<MsgVoteWeighted>,
    metadata?: grpc.Metadata,
  ): Promise<MsgVoteWeightedResponse>;
  /** Deposit defines a method to add deposit on a specific proposal. */
  Deposit(request: DeepPartial<MsgDeposit>, metadata?: grpc.Metadata): Promise<MsgDepositResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SubmitProposal = this.SubmitProposal.bind(this);
    this.ExecLegacyContent = this.ExecLegacyContent.bind(this);
    this.Vote = this.Vote.bind(this);
    this.VoteWeighted = this.VoteWeighted.bind(this);
    this.Deposit = this.Deposit.bind(this);
  }

  SubmitProposal(
    request: DeepPartial<MsgSubmitProposal>,
    metadata?: grpc.Metadata,
  ): Promise<MsgSubmitProposalResponse> {
    return this.rpc.unary(MsgSubmitProposalDesc, MsgSubmitProposal.fromPartial(request), metadata);
  }

  ExecLegacyContent(
    request: DeepPartial<MsgExecLegacyContent>,
    metadata?: grpc.Metadata,
  ): Promise<MsgExecLegacyContentResponse> {
    return this.rpc.unary(MsgExecLegacyContentDesc, MsgExecLegacyContent.fromPartial(request), metadata);
  }

  Vote(request: DeepPartial<MsgVote>, metadata?: grpc.Metadata): Promise<MsgVoteResponse> {
    return this.rpc.unary(MsgVoteDesc, MsgVote.fromPartial(request), metadata);
  }

  VoteWeighted(
    request: DeepPartial<MsgVoteWeighted>,
    metadata?: grpc.Metadata,
  ): Promise<MsgVoteWeightedResponse> {
    return this.rpc.unary(MsgVoteWeightedDesc, MsgVoteWeighted.fromPartial(request), metadata);
  }

  Deposit(request: DeepPartial<MsgDeposit>, metadata?: grpc.Metadata): Promise<MsgDepositResponse> {
    return this.rpc.unary(MsgDepositDesc, MsgDeposit.fromPartial(request), metadata);
  }
}

export const MsgDesc = {
  serviceName: "cosmos.gov.v1.Msg",
};

export const MsgSubmitProposalDesc: UnaryMethodDefinitionish = {
  methodName: "SubmitProposal",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSubmitProposal.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSubmitProposalResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgExecLegacyContentDesc: UnaryMethodDefinitionish = {
  methodName: "ExecLegacyContent",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgExecLegacyContent.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgExecLegacyContentResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgVoteDesc: UnaryMethodDefinitionish = {
  methodName: "Vote",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgVote.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgVoteResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgVoteWeightedDesc: UnaryMethodDefinitionish = {
  methodName: "VoteWeighted",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgVoteWeighted.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgVoteWeightedResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgDepositDesc: UnaryMethodDefinitionish = {
  methodName: "Deposit",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgDeposit.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDepositResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
