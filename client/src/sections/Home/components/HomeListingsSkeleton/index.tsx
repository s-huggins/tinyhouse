import React from 'react';
import { List, Card, Skeleton } from 'antd';

import listingLoadingCardCover from '../../assets/listing-loading-card-cover.jpeg';

export const HomeListingsSkeleton = () => {
  const emptyData = [{}, {}, {}, {}];

  return (
    <div className="home-listings-skeleton">
      <Skeleton paragraph={{ rows: 0 }} />
      <List
        grid={{
          gutter: 8,
          xs: 1,
          sm: 2,
          lg: 4
        }}
        dataSource={emptyData}
        renderItem={listing => (
          <List.Item>
            <Card
              cover={
                <div
                  style={{ backgroundImage: `url(${listingLoadingCardCover})` }}
                  className="home-listings-skeleton__card-cover-img"
                ></div>
              }
              loading
            />
          </List.Item>
        )}
      />
    </div>
  );
};
