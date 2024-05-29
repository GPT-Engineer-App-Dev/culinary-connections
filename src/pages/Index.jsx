import { Box, Button, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
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
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Recipe 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Recipe Title 1</Heading>
              <Text>Short description of the recipe.</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Recipe 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Recipe Title 2</Heading>
              <Text>Short description of the recipe.</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Recipe 3" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>Recipe Title 3</Heading>
              <Text>Short description of the recipe.</Text>
            </Box>
          </Box>
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