import {
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  HStack,
} from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Card overflow="hidden">
      <Skeleton h="200px" />
      <CardBody>
        <HStack>
          {[...Array(5)].map((_, i) => (
            <SkeletonCircle key={i} size="3" />
          ))}
        </HStack>
        <SkeletonText mt="4" noOfLines={2} spacing="4" />
      </CardBody>
    </Card>
  );
};

export default SkeletonCard;
