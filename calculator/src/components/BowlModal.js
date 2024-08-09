import React from "react";
import {
  Box,
  Image,
  Text,
  Stack,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Grid,
  GridItem,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useBreakpointValue
} from "@chakra-ui/react";

const BowlModal = ({ isOpen, onClose, bowl }) => {
  const gridTemplateColumns = useBreakpointValue({ base: "1fr", md: "repeat(2, 1fr)" });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent bg="orange.100">
        <ModalHeader color="orange.500" fontWeight="bold">{bowl?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns={gridTemplateColumns} gap={4}>
          <Box
              position="relative"
              borderRadius="md"
              overflow="hidden"
              _hover={{ boxShadow: "lg", cursor: "pointer" }}
            >
              <Image
                src={bowl?.imageUrl}
                alt={bowl?.name}
                borderRadius="md"
                objectFit="cover"
                width="100%"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.5)" }}
              />
            </Box>
            <Box>
              <Stack spacing={2}>
                <Text fontSize="sm">{bowl?.description}</Text>
                <Divider />
                <Text>No. of Servings: {bowl?.noOfServing}</Text>
                <Text>Serving Size: {bowl?.servingSize}</Text>
                <Text>Total Weight: {bowl?.totalWeight}</Text>
                <Button variant="outline" colorScheme="green" size="lg" width="full">
                  Price: {bowl?.totalPrice}
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Divider mt={4} mb={4} />
          <Text fontWeight="bold" mb={2}>Nutrient Values:</Text>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Nutrient</Th>
                <Th>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
                  <Tr>
                    <Td>Total Fiber</Td>
                    <Td>{bowl?.totalFiber}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Protein</Td>
                    <Td>{bowl?.totalProtein}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Vitamin C</Td>
                    <Td>{bowl?.totalVitaminC}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Vitamin A</Td>
                    <Td>{bowl?.totalVitaminA}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Calcium</Td>
                    <Td>{bowl?.totalCalcium}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Potassium</Td>
                    <Td>{bowl?.totalPotassium}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Magnesium</Td>
                    <Td>{bowl?.totalMagnesium}</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Iron</Td>
                    <Td>{bowl?.totalIron}</Td>
                  </Tr>
                </Tbody>
          </Table>
          <Divider />
          <Stack spacing={3}>
            <Text fontSize="lg" fontWeight="bold">Ingredients:</Text>
            <SimpleGrid columns={1} spacing={4}>
              {(bowl?.items || []).map((item, index) => (
                <Grid
                  key={index}
                  templateColumns="repeat(4, 1fr)"
                  gap={4}
                  alignItems="center"
                  p={2}
                  borderRadius="md"
                  bg="white"
                >
                  <GridItem>
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      boxSize="100px"
                      objectFit="cover"
                    />
                  </GridItem>
                  <GridItem>
                    <Text color="orange.500" fontWeight="bold">{item.name}</Text>
                  </GridItem>
                  <GridItem>
                    <Text>Quantity: {item.quantity}</Text>
                  </GridItem>
                  <GridItem justifySelf="end">
                    <Button colorScheme="green" as="a" href={item.link} target="_blank">
                      Buy
                    </Button>
                  </GridItem>
                </Grid>
              ))}
            </SimpleGrid>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="orange" onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BowlModal;
