import React, {
  useState, createContext, useContext, useMemo,
} from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import Web3 from 'web3';

import { ABI } from 'constants/ABI';
import { SC_ADDRESS } from 'constants/index';

import useWeb3 from 'hooks/useWeb3';

const AlchemyContext = createContext({
  total: {},
  marketItem: [],
  myNFTs: [],
  getTotalNft: async () => {},
  getTotalBrands: async () => {},
  fetchMarketItems: async () => {},
  fetchMyNFTs: async () => {},
});

export function AlchemyProvider({ children }) {
  const { wallet } = useWeb3();

  const [total, setTotal] = useState({ nft: 0, brands: 0 });
  const [marketItem, setMarketItem] = useState([]);
  const [myNFTs, setMyNFTs] = useState([]);

  const web3 = new Web3('https://polygon-mumbai.g.alchemy.com/v2/lDKQpUF4vYeU23ySRiIjnwU2oZnUOSey');
  const nftContract = new web3.eth.Contract(ABI, SC_ADDRESS);

  const getTotalNft = async () => {
    try {
      const res = await nftContract
        .methods
        .getTotalNft()
        .call();

      setTotal((preState) => ({
        ...preState,
        nft: res,
      }));
    } catch (error) {
      toast.error(error);
    }
  };

  const getTotalBrands = async () => {
    try {
      const res = await nftContract
        .methods
        .getTotalBrands()
        .call();

      setTotal((preState) => ({
        ...preState,
        brands: res,
      }));
    } catch (error) {
      toast.error(error);
    }
  };

  const fetchMarketItems = async () => {
    try {
      const res = await nftContract
        .methods
        .fetchMarketItems()
        .call();

      setMarketItem(res);
    } catch (error) {
      toast.error(error);
    }
  };

  const fetchMyNFTs = async () => {
    try {
      const res = await nftContract
        .methods
        .fetchMyNFTs(wallet.address)
        .call();

      setMyNFTs(res);
    } catch (error) {
      toast.error(error);
    }
  };

  const providerValues = useMemo(() => ({
    total,
    marketItem,
    myNFTs,
    getTotalNft,
    getTotalBrands,
    fetchMarketItems,
    fetchMyNFTs,
  }), [total, marketItem, myNFTs]);

  return (
    <AlchemyContext.Provider value={providerValues}>
      {children}
    </AlchemyContext.Provider>
  );
}

AlchemyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAlchemy = () => useContext(AlchemyContext);

export default useAlchemy;
