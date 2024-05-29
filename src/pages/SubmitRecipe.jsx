import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SubmitRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input
    if (!title || !instructions || ingredients.some(ingredient => !ingredient)) {
      alert("Please fill in all fields.");
      return;
    }

    // Create new recipe object
    const newRecipe = {
      title,
      ingredients,
      instructions,
      image: URL.createObjectURL(image),
    };

    // Save the recipe to local storage (for simplicity)
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.push(newRecipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));

    // Redirect to home page
    navigate("/");
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>Submit a Recipe</Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="title" isRequired>
            <FormLabel>Recipe Title</FormLabel>
            <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl id="ingredients" isRequired>
            <FormLabel>Ingredients</FormLabel>
            {ingredients.map((ingredient, index) => (
              <Input
                key={index}
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                mb={2}
              />
            ))}
            <Button onClick={addIngredientField}>Add Ingredient</Button>
          </FormControl>
          <FormControl id="instructions" isRequired>
            <FormLabel>Instructions</FormLabel>
            <Textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} />
          </FormControl>
          <FormControl id="image" isRequired>
            <FormLabel>Upload Image</FormLabel>
            <Input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          </FormControl>
          <Button type="submit" colorScheme="teal" size="lg" width="full">Submit Recipe</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default SubmitRecipe;