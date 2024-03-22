import React from "react";
import { Box, Heading, Text, Button, Stack, Flex, Image, SimpleGrid, Link, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram, FaCheck } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Box as="nav" bg="gray.100" py={4}>
        <Flex maxW="6xl" mx="auto" align="center" justify="space-between">
          <Heading as="h1" size="lg">
            My Website
          </Heading>
          <Stack direction="row" spacing={8}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </Stack>
        </Flex>
      </Box>

      {/* Hero section */}
      <Box bg="gray.50" py={20}>
        <Box maxW="6xl" mx="auto" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>
            Welcome to My Website
          </Heading>
          <Text fontSize="xl" mb={8}>
            We provide top-notch services to help grow your business.
          </Text>
          <Button colorScheme="blue" size="lg">
            Get Started
          </Button>
        </Box>
      </Box>

      {/* Features section */}
      <Box maxW="6xl" mx="auto" py={20}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGljb258ZW58MHx8fHwxNzExMDc0Mzg1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Development" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Web Development
            </Heading>
            <Text>We build modern, responsive websites optimized for performance.</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpY29ufGVufDB8fHx8MTcxMTA3NDM4Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Mobile Apps" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              Mobile Apps
            </Heading>
            <Text>Cross-platform mobile apps for iOS and Android.</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25zdWx0aW5nJTIwaWNvbnxlbnwwfHx8fDE3MTEwNzQzODZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Consulting" mb={4} />
            <Heading as="h3" size="lg" mb={2}>
              IT Consulting
            </Heading>
            <Text>Expert advice to help you make informed technology decisions.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* About section */}
      <Box bg="gray.50" py={20}>
        <Box maxW="6xl" mx="auto">
          <Heading as="h2" size="xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg" mb={8}>
            We are a leading technology firm providing cutting-edge solutions to businesses worldwide. With a team of experienced developers and consultants, we deliver results that help our clients succeed.
          </Text>
          <Image src="https://images.unsplash.com/photo-1708882308480-9188ed7e7d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDB8fHx8MTcxMTA3NDM4Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Our Team" />
        </Box>
      </Box>

      {/* Services section */}
      <Box maxW="6xl" mx="auto" py={20}>
        <Heading as="h2" size="xl" mb={4}>
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                Web Design & Development
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                Mobile App Development
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                E-commerce Solutions
              </ListItem>
            </List>
          </Box>
          <Box>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                Cloud Migration
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                IT Consulting
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheck} color="green.500" />
                Cybersecurity
              </ListItem>
            </List>
          </Box>
        </SimpleGrid>
      </Box>

      {/* CTA section */}
      <Box bg="blue.600" py={20} color="white">
        <Box maxW="6xl" mx="auto" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ready to Get Started?
          </Heading>
          <Text fontSize="lg" mb={8}>
            Take your business to the next level with our solutions.
          </Text>
          <Button colorScheme="white" color="blue.600" size="lg">
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.900" color="white" py={10}>
        <Flex maxW="6xl" mx="auto" align="center" justify="space-between">
          <Text>&copy; 2023 My Website. All rights reserved.</Text>
          <Stack direction="row" spacing={4}>
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
