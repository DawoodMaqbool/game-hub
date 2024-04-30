import { Skeleton, Card, CardBody, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card width="225px" borderRadius={10} overflow={"hidden"}>
      <Skeleton height="225px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
