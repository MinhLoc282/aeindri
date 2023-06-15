/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllCollections } from 'store/actions';

import Collection from 'components/CollectionAdmin/CollectionAdmin';

import './AllCollections.scss';
import useWeb3 from 'hooks/useWeb3';

function AllCollections() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Collections);

  useEffect(() => {
    dispatch(actionGetAllCollections());
  }, []);

  const { deployContract } = useWeb3();

  const handleAddCollections = async () => {
    deployContract('HELO', 'TKM', 'Collection name', 'This is description', 'imagelink');
  };

  return (
    <div className="nft">
      <Link to="add-collection" className="btn">Add item</Link>
      <div className="nft--item">
        {data && data.collections.map((collection) => (
          <Collection
            key={collection._id}
            id={collection._id}
            collectionName={collection.collectionName}
            artistName={collection.artistName}
            description={collection.description}
            image={collection.image}
            approved={collection.approved}
          />
        ))}
      </div>

      <button type="button" onClick={handleAddCollections}>Test</button>
    </div>
  );
}

export default AllCollections;
