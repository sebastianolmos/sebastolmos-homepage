import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="EDP Aquarium">
    <Container>
      <Title>
        EDP Aquarium <Badge>2020</Badge>
      </Title>
      <P>
        Tercera tarea del curso Modelación y Computación Grafica, otoño 2020, usando OpenGL para hacer una aplicación 3D
       que represente un acuario que contiene tres tipos de peces, donde cada tipo se encuentra en su zona de temperatura preferida, 
       para esto se resuelve una ecuacion diferencial parcial en tres dimensiones, simulando la transferencia de calor en el acuario.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>Python</span>
        </ListItem>
        <ListItem>
          <Meta>Libraries</Meta>
          <span>PyOpenGL, Numpy, GLFW, Pillow, Scipy</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/sebastianolmos/edp_aquarium">
          https://github.com/sebastianolmos/edp_aquarium <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/edpaquarium_01.png" alt="Aquarium" />
      <WorkImage src="/images/projects/edpaquarium_02.png" alt="Aquarium" />
      <WorkImage src="/images/projects/edpaquarium_03.png" alt="Aquarium" />
      <WorkImage src="/images/projects/edpaquarium_04.png" alt="Aquarium" />
      <WorkImage src="/images/projects/edpaquarium_05.png" alt="Aquarium" />
      <WorkImage src="/images/projects/edpaquarium_06.png" alt="Aquarium" />
      <WorkImage src="/images/projects/edpaquarium_07.png" alt="Aquarium" />
    </Container>
  </Layout>
)

export default Project
