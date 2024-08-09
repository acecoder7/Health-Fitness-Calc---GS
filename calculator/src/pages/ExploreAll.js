import React, { useState } from "react";
import {
  SimpleGrid,
  Box,
  Heading,
  Tag,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import proteinData from "../data/proteinData";
import vitaminAData from "../data/vitaminAData";
import vitaminCData from "../data/vitaminCData";
import potassiumData from "../data/potassiumData";
import calciumData from "../data/calciumData";
import magnesiumData from "../data/magnesiumData";
import ironData from "../data/ironData";
import Card from "../components/Cards";

const nutrientDataMap = {
  "Protein": proteinData,
  "Vitamin A": vitaminAData,
  "Vitamin C": vitaminCData,
  "Potassium": potassiumData,
  "Calcium": calciumData,
  "Magnesium": magnesiumData,
  "Iron": ironData,
};

const nutrientTags = [
  { label: "Protein", color: "blue" },
  { label: "Vitamin A", color: "orange" },
  { label: "Vitamin C", color: "green" },
  { label: "Potassium", color: "pink" },
  { label: "Calcium", color: "yellow" },
  { label: "Magnesium", color: "gray" },
  { label: "Iron", color: "teal" },
];

const ExploreAll = () => {
  const [selectedNutrient, setSelectedNutrient] = useState(null);

  const handleNutrientSelect = (nutrient) => {
    setSelectedNutrient(nutrient);
  };

  const renderBowls = () => {
    const data = nutrientDataMap[selectedNutrient];
    if (data) {
      return data.map((bowl) => <Card key={bowl.id} data={bowl} nutrient={selectedNutrient}/>);
    }
    return <Text>Select a nutrient to see the bowls</Text>;
  };

  return (
    <Box p="6">
      <Heading as="h2" size="xl" mb="6">
        Explore Nutrient-Rich Baskets
      </Heading>

      <Wrap spacing={6} mb={8}>
        {nutrientTags.map(({ label, color }) => (
          <WrapItem key={label}>
            <Tag
              size="lg"
              variant={selectedNutrient === label ? "solid" : "outline"}
              colorScheme={color}
              onClick={() => handleNutrientSelect(label)}
              p={4}
              fontSize="lg"
              cursor="pointer"
            >
              {label}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>

      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {renderBowls()}
      </SimpleGrid>
    </Box>
  );
};

export default ExploreAll;
