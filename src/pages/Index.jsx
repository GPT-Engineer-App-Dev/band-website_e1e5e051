import { Box, Flex, Heading, Text, Button, Image, VStack, Spacer, Container, Link, Icon } from "@chakra-ui/react";
import { FaTicketAlt, FaSpotify, FaInstagram, FaFacebookF, FaTwitter, FaMusic } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex bgImage="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2R8ZW58MHx8fHwxNzA5NzMzNDU4fDA&ixlib=rb-4.0.3&q=80&w=1080" bgPosition="center" bgRepeat="no-repeat" bgSize="cover" align="center" justify="center" h="100vh" color="white">
        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="4xl" fontWeight="bold">
            The Rockers
          </Heading>
          <Text fontSize="xl" fontWeight="medium">
            Join us on our World Tour 2023!
          </Text>
          <Button size="lg" colorScheme="teal" leftIcon={<FaTicketAlt />}>
            Get Tickets
          </Button>
        </VStack>
      </Flex>

      {/* Tour Dates Section */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Tour Dates
        </Heading>
        {/* Imagine this is a list of tour dates, fetched and mapped from some API */}
        <VStack spacing={5}>
          <TourDateCard date="April 30, 2023" venue="Madison Square Garden" location="New York, NY" />
          <TourDateCard date="May 15, 2023" venue="Wembley Stadium" location="London, UK" />
          {/* ... more dates */}
        </VStack>
      </Container>

      {/* Follow Us Section */}
      <Flex bg="gray.800" color="white" p={10} align="center" justify="center">
        <VStack spacing={3}>
          <Heading as="h3" size="lg">
            Follow Us
          </Heading>
          <Text fontSize="md">Stay updated with our latest news and releases!</Text>
          <Flex>
            <Link href="https://spotify.com" isExternal mx={2}>
              <Icon as={FaSpotify} w={6} h={6} />
            </Link>
            <Link href="https://instagram.com" isExternal mx={2}>
              <Icon as={FaInstagram} w={6} h={6} />
            </Link>
            <Link href="https://facebook.com" isExternal mx={2}>
              <Icon as={FaFacebookF} w={6} h={6} />
            </Link>
            <Link href="https://twitter.com" isExternal mx={2}>
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
          </Flex>
        </VStack>
      </Flex>

      {/* Footer Section */}
      <Box bg="gray.700" color="gray.400" p={4} textAlign="center">
        <Text>© 2023 The Rockers Band. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

const TourDateCard = ({ date, venue, location }) => {
  return (
    <Flex p={5} shadow="md" borderWidth="1px" borderRadius="md" w="full" justify="space-between" align="center">
      <VStack align="start">
        <Text fontWeight="bold">{date}</Text>
        <Text>{venue}</Text>
      </VStack>
      <Spacer />
      <Text>{location}</Text>
      <Button ml={4} colorScheme="teal" leftIcon={<FaMusic />}>
        Details
      </Button>
    </Flex>
  );
};

export default Index;
