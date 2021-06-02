import React, { FC } from "react";

import { FeedListing } from "../../components";
import { FeedType } from "../../hooks/useLocalFeed";
import { OPMLListing, OPMLParent } from "../../types/OPML";

interface Props {
  feeds: FeedType;
}

export const Feeds: FC<Props> = ({ feeds }) => {
  const renderFeeds = parent => {
    return parent?.map((child: OPMLParent) => {
      if (child.children) {
        return (
          <div>
            <h3>{child.title}</h3>
            {renderFeeds(child.children)}
          </div>
        );
      }

      return <FeedListing listing={child} key={child.title.toString()} />;
    });
  };

  return <>{renderFeeds(feeds)}</>;
};
