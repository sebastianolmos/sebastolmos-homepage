import { Container, Badge, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Space War">
    <Container>
      <Title>
        Space War <Badge>2020</Badge>
      </Title>
      <P>
      Primera tarea del curso Modelación y Computación Grafica, otoño 2020, usando OpenGL para hacer una aplicación 2D, que consiste en un 
      juego en el que se mueve una nave que tiene que destruir a las naves enemigas que aparecen, sin perder sus tres vidas, 
      con una generacion de fondo aleatorio.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>Python, GLSL</span>
        </ListItem>
        <ListItem>
          <Meta>Libraries</Meta>
          <span>PyOpenGL, Numpy, GLFW, Pillow</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/sebastianolmos/space_war">
            https://github.com/sebastianolmos/space_war <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/spacewar_01.png" alt="Spacewar" />
      <WorkImage src="/images/projects/spacewar_02.png" alt="Spacewar" />
      <WorkImage src="/images/projects/spacewar_03.png" alt="Spacewar" />
      <WorkImage src="/images/projects/spacewar_04.png" alt="Spacewar" />
    </Container>
  </Layout>
)

export default Project
