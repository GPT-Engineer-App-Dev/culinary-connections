import { Box, Button, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

const Index = () => {
  const [recipes, setRecipes] = useState([]);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(storedRecipes);
  const storedRatings = JSON.parse(localStorage.getItem("ratings")) || {};
    setRatings(storedRatings);
  }, []);

  const handleRating = (recipeIndex, rating) => {
    const newRatings = { ...ratings };
    if (!newRatings[recipeIndex]) {
      newRatings[recipeIndex] = [];
    }
    newRatings[recipeIndex].push(rating);
    setRatings(newRatings);
    localStorage.setItem("ratings", JSON.stringify(newRatings));
  };

  const getAverageRating = (recipeIndex) => {
    if (!ratings[recipeIndex] || ratings[recipeIndex].length === 0) return 0;
    const sum = ratings[recipeIndex].reduce((a, b) => a + b, 0);
    return (sum / ratings[recipeIndex].length).toFixed(1);
  };

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="teal.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">RecipeShare</Heading>
        <HStack spacing={8}>
          <Link href="/">Home</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/submit">Submit a Recipe</Link>
          <Link href="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to RecipeShare</Heading>
        <Text fontSize="xl" mb={6}>Discover and share amazing recipes from around the world.</Text>
        <Button colorScheme="teal" size="lg">Submit a Recipe</Button>
      </Box>

      {/* Featured Recipes Section */}
      <Box as="section" py={20}>
        <Heading as="h3" size="xl" textAlign="center" mb={10}>Featured Recipes</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {recipes.map((recipe, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={recipe.image} alt={`Recipe ${index + 1}`} />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>{recipe.title}</Heading>
                <Text>{recipe.ingredients.join(", ")}</Text>
                <Text mt={4}>{recipe.instructions}</Text>
                <HStack mt={4}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <IconButton
                      key={star}
                      icon={<FaStar />}
                      colorScheme={ratings[index] && ratings[index].includes(star) ? "yellow" : "gray"}
                      onClick={() => handleRating(index, star)}
                    />
                  ))}
                </HStack>
                <Text mt={2}>Average Rating: {getAverageRating(index)}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" py={10}>
        <Flex justifyContent="space-between" alignItems="center" px={10}>
          <Text>&copy; 2023 RecipeShare. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal><FaFacebook size="24px" /></Link>
            <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
            <Link href="https://instagram.com" isExternal><FaInstagram size="24px" /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;