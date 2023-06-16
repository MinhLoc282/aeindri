export const ABI = [{ inputs: [{ internalType: 'string', name: 'tokenName', type: 'string' }, { internalType: 'string', name: 'tokenSymbol', type: 'string' }, { internalType: 'string', name: 'baseURI', type: 'string' }], stateMutability: 'nonpayable', type: 'constructor' }, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'approved', type: 'address',
  }, {
    indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256',
  }],
  name: 'Approval',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'operator', type: 'address',
  }, {
    indexed: false, internalType: 'bool', name: 'approved', type: 'bool',
  }],
  name: 'ApprovalForAll',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'from', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'to', type: 'address',
  }, {
    indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256',
  }],
  name: 'Transfer',
  type: 'event',
}, {
  inputs: [{ internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'approve', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'owner', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'getApproved', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'address', name: 'operator', type: 'address' }], name: 'isApprovedForAll', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'to', type: 'address' }], name: 'mint', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'ownerOf', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'from', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'safeTransferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'from', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }, { internalType: 'bytes', name: 'data', type: 'bytes' }], name: 'safeTransferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'operator', type: 'address' }, { internalType: 'bool', name: 'approved', type: 'bool' }], name: 'setApprovalForAll', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'string', name: '_baseUri', type: 'string' }], name: 'setBaseURI', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }], name: 'supportsInterface', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'tokenURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'from', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'transferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
}];

export const MARKET_PLACE_ABI = [{
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'uint256', name: 'listingId', type: 'uint256',
  }, {
    indexed: false, internalType: 'address', name: 'seller', type: 'address',
  }],
  name: 'Cancel',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'uint256', name: 'listingId', type: 'uint256',
  }, {
    indexed: false, internalType: 'address', name: 'seller', type: 'address',
  }, {
    indexed: false, internalType: 'address', name: 'token', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'tokenId', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'price', type: 'uint256',
  }],
  name: 'Listed',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'previousOwner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'newOwner', type: 'address',
  }],
  name: 'OwnershipTransferred',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'uint256', name: 'listingId', type: 'uint256',
  }, {
    indexed: false, internalType: 'address', name: 'buyer', type: 'address',
  }, {
    indexed: false, internalType: 'address', name: 'token', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'tokenId', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'price', type: 'uint256',
  }],
  name: 'Sale',
  type: 'event',
}, {
  inputs: [{ internalType: 'uint256', name: 'listingId', type: 'uint256' }], name: 'buyToken', outputs: [], stateMutability: 'payable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'listingId', type: 'uint256' }], name: 'cancel', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'listingId', type: 'uint256' }], name: 'getListing', outputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'address', name: 'token', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }, { internalType: 'uint256', name: 'price', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'token', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'getNftLatestAuction', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'getTotal', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'token', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }, { internalType: 'uint256', name: 'price', type: 'uint256' }], name: 'listToken', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '_fee', type: 'uint256' }], name: 'setFee', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'token', type: 'address' }, { internalType: 'bool', name: 'approve', type: 'bool' }], name: 'setNFTApproval', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function',
}];
