/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/prefer-default-export */
import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import Web3 from 'web3';

import { NFTStorage } from 'nft.storage';

import { ABI } from 'constants/ABI';
import { SC_ADDRESS } from 'constants/index';
import { NFTABI } from 'constants/NFTABI';
import { bytecode } from 'constants/NFTBYTECODE';

const initial = {
  address: '',
  balance: '',
};

const Web3Context = createContext({
  wallet: {},
  connect: async () => {},
  createBrand: async () => {},
  createToken: async () => {},
  getIdToBrand: async () => {},
  purchaseNFT: async () => {},
  deployContract: async () => {},
});

const nftStorage = new NFTStorage({ token: process.env.REACT_APP_NFT_STORAGE_API });

export function Web3Provider({ children }) {
  const [wallet, setWallet] = useState(initial);

  const web3 = new Web3(window.ethereum);
  const nftContract = new web3.eth.Contract(ABI, SC_ADDRESS);

  const connect = async () => {
    try {
      const selectAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      setWallet((preState) => ({
        ...preState,
        address: selectAccounts[0],
      }));

      window.ethereum.on('accountsChanged', async (accounts) => {
        setWallet((preState) => ({
          ...preState,
          address: accounts[0],
        }));
      });

      const chainId = await web3.eth.getChainId();

      if (chainId !== '0x13881') {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x13881',
              chainName: 'Mumbai Testnet',
              nativeCurrency: {
                name: 'MATIC',
                symbol: 'MATIC',
                decimals: 18,
              },
              rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
              blockExplorerUrls: ['https://explorer-mumbai.maticvigil.com'],
            },
          ],
        });
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const createBrand = async (data, callback) => {
    try {
      await nftContract
        .methods
        .createBrand(data.address, data.logo, data.name, data.description)
        .send({ from: wallet.address });

      toast.success('Brand has been created');

      callback();
    } catch (error) {
      toast.error(error);
    }
  };

  const createToken = async (data, callback) => {
    try {
      const res = await nftContract
        .methods
        .createToken(data.tokenURL, data.name, data.price, data.brandId)
        .send({ from: wallet.address, value: web3.utils.toWei('0.00025', 'ether') });

      toast.success('NFT has been minted');
      callback();
    } catch (error) {
      toast.error(error);
    }
  };

  const getIdToBrand = async (id, callback) => {
    try {
      const res = await nftContract
        .methods
        .idToBrand(id)
        .call();

      callback(res);
    } catch (error) {
      toast.error(error);
    }
  };

  const purchaseNFT = async (data) => {
    try {
      const res = await nftContract
        .methods
        .purchaseNFT(Number(data.tokenId))
        .send({ from: wallet.address, value: data.price });

      toast.success('Successfully purchase NFT');
    } catch (error) {
      toast.error(error);
    }
  };

  const deployContract = async (
    tokenName,
    tokenSymbol,
    collectionName,
    collectionDescription,
    collectionImage,
  ) => {
    try {
      const metadata = {
        name: collectionName,
        description: collectionDescription,
        image: collectionImage,
      };

      const metadataCID = await uploadMetadataToIPFS(metadata);

      const deployedContract = await new web3.eth.Contract(NFTABI)
        .deploy({
          data: bytecode,
          arguments: [tokenName, tokenSymbol, metadataCID],
        })
        .send({ from: wallet.address });

      const contractAddress = deployedContract.options.address;

      setWallet((prevState) => ({
        ...prevState,
        contractAddress,
      }));

      toast.success('Contract deployed successfully');
    } catch (error) {
      toast.error('Error');
    }
  };

  const uploadMetadataToIPFS = async (metadata) => {
    try {
      const metadataString = JSON.stringify(metadata);
      const metadataBlob = new Blob([metadataString], { type: 'application/json' });
      const metadataFile = new File([metadataBlob], 'metadata.json');

      const cid = await nftStorage.storeBlob(metadataFile);
      return cid;
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('e');
    } else {
      toast.error('Please install MetaMask', { toastId: 'install' });
    }
  }, []);

  useEffect(() => {
    const getBalance = async () => {

    };

    if (wallet.address) {
      getBalance();
    }
  }, [wallet.address]);

  return (
    <Web3Context.Provider
      value={{
        wallet,
        connect,
        createBrand,
        createToken,
        getIdToBrand,
        purchaseNFT,
        deployContract,
        uploadMetadataToIPFS,
      }}
    >
      { children }
    </Web3Context.Provider>
  );
}

Web3Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useWeb3 = () => useContext(Web3Context);

export default useWeb3;
