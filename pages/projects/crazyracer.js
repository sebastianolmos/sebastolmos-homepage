import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Crazy Racer">
    <Container>
      <Title>
        Crazy Racer <Badge>2020</Badge>
      </Title>
      <P>
      Segunda tarea del curso Modelación y Computación Grafica, otoño 2020, usando OpenGL para hacer una aplicación 3D, 
      que consiste en un juego de carreras donde la pista se tenia que construir con una curva Rounded Non Uniform Spline y 
      luego parametrizarla para generar un correcto desplazamiento del auto.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>Python</span>
        </ListItem>
        <ListItem>
          <Meta>Libraries</Meta>
          <span>PyOpenGL, Numpy, GLFW, Pillow</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/sebastianolmos/crazy_racer">
          https://github.com/sebastianolmos/crazy_racer <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/crazyracer_01.png" alt="Crazyracer" />
      <WorkImage src="/images/projects/crazyracer_02.png" alt="Crazyracer" />
      <WorkImage src="/images/projects/crazyracer_03.png" alt="Crazyracer" />
      <WorkImage src="/images/projects/crazyracer_04.png" alt="Crazyracer" />
    </Container>
  </Layout>
)

export default Project
