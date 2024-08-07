import React, { useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Stack,
  Divider,
  Tag,
  Wrap,
  WrapItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Card = ({ data }) => {
  const [selectedBowl, setSelectedBowl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedBowl(null);
  };

  const handleBuyNowClick = (bowl) => {
    setSelectedBowl(bowl);
    setIsOpen(true);
  };

  return (
    <Box
      key={data.id}
      maxWidth="100%"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
    >
      <Image src={data.imageUrl} alt={data.name} borderTopRadius="md" />

      <Box p={4}>
        <Stack spacing={2}>
          <Text fontWeight="bold" fontSize="xl">
            {data.name}
          </Text>

          <Divider />

          <Text color="gray.600" fontWeight="bold" mb={2}>
            Ingredients:
          </Text>
          <Wrap spacing={2} shouldWrap>
            {data.items.map((item, index) => (
              <WrapItem key={index}>
                <Tag colorScheme="blue">{item.name}</Tag>
              </WrapItem>
            ))}
          </Wrap>

          <Divider />

          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Stack spacing={1}>
              <Text>Total Protein: {data.totalProtein}</Text>
              <Text>Total Calories: {data.totalCalories}</Text>
              <Text>Total Weight: {data.totalWeight}</Text>
              <Text>Total Price: {data.totalPrice}</Text>
            </Stack>

            <Box>
              <Text color="gray.600" fontWeight="bold" mb={2}>
                Also rich in :
              </Text>
              <Wrap spacing={2} shouldWrap>
                {data.richIn.map((item, index) => (
                  <WrapItem key={index}>
                    <Tag colorScheme="purple">{item}</Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </Grid>

          <Divider />

          <Button
            variant="solid"
            size="lg"
            width="full"
            colorScheme="green"
            onClick={handleBuyNowClick}
          >
            Buy Ingredients
          </Button>
        </Stack>
      </Box>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Total Fiber: {data.totalFiber}</Text>
            <Text>Total Vitamin C: {data.totalVitaminC}</Text>
            <Text>Total Vitamin A: {data.totalVitaminA}</Text>
            <Text>Total Calcium: {data.totalCalcium}</Text>
            <Text>Total Potassium: {data.totalPotassium}</Text>
            <Text>Total Magnesium: {data.totalMagnesium}</Text>
            <Text>Total Iron: {data.totalIron}</Text>
            <Text>No. of Servings: {data.noOfServing}</Text>
            <Text>Serving Size: {data.servingSize}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Card;
