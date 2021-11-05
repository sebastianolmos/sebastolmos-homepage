import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'
import { FiMail } from 'react-icons/fi';
import { FaLinkedin , FaItchIo} from 'react-icons/fa';

const Home = () => (
  <Layout>
    <Container>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Sebastián Olmos
          </Heading>
          <p>Estudiante de Ingenieria Civil en Computación</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/prof2.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Sobre mi
        </Heading>
        <Paragraph>
          Soy un estudiante de ciencias de la computación en la Universidad de Chile,
          me interesan las áreas de Computación gráfica, desarrollo de videojuegos,
          visión computacional y experiencia de usuario. Presento buena disposición al 
          trabajo en equipo, la buena convivencia y motivación para aprender nuevas herramientas y 
          tecnologías que me permitan ser un aporte en un proyecto.
          real.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
              Ver proyectos
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Recorrido
        </Heading>
        <BioSection>
          <BioYear>2017 - 2020</BioYear>
          Ingeniería Plan Común
        </BioSection>
        <BioSection>
          <BioYear>2020 - 2021</BioYear>
          Licenciatura en Ciencias de la Ingeniería mención Computación
        </BioSection>
        <BioSection>
          <BioYear>2020 - Presente</BioYear>
          Ingeniería Civil en Computación
        </BioSection>
        <Box align="center" my={4}>
          <NextLink href="/resources">
            <Button rightIcon={<ChevronRightIcon />} variant="solid" colorScheme="green">
              Ver Recursos
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          En la web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/sebastianolmos" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @sebastianolmos
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/sebastolmos" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={FaLinkedin} />}
              >
                @sebastolmos
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://sebastianolmos.itch.io/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={FaItchIo} />}
              >
                @sebastianolmos
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/tianolmos" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @tianolmos
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
      
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contacto
        </Heading>
        <List>
        <ListItem>
            Escribir a :   
            <Link href="mailto:sebastianolmos@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<Icon as={FiMail} />}
              >
                sebastolmos@gmail.com
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
