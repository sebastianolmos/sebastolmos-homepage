import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Final Reality">
    <Container>
      <Title>
        Space War <Badge>2020</Badge>
      </Title>
      <P>
        Proyecto del curso Metodologías de Diseño y Programación, primavera 2020. Implementando los distintos patrones de diseño enseñados,
        Se creó la estructura requerida para un sistema simple de combate por turnos basado en los juegos de la franquicia Final Fantasy.
      </P>
      <P>
        Luego con JavaFx se creó una interfaz gráfica para poder simular un batalla manejando un grupo de personajes que tienen que derrotar
        un grupo de enemigos. Además se implementó un sistema personalizado de creación de batallas, donde el usuario puede crear personajes de
        diferentes clases, equipados con diferentes armas y establecer cantidad y daño de los enemigos.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>Java</span>
        </ListItem>
        <ListItem>
          <Meta>Libraries</Meta>
          <span>JavaFX, Gradle</span>
        </ListItem>
        <ListItem>
          <Meta>Software</Meta>
          <span>IntelliJ IDEA</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/sebastianolmos/final-reality">
          https://github.com/sebastianolmos/final-reality <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/finalreality_01.png" alt="FinalReality" />
      <WorkImage src="/images/projects/finalreality_02.png" alt="FinalReality" />
      <WorkImage src="/images/projects/finalreality_03.png" alt="FinalReality" />
      <WorkImage src="/images/projects/finalreality_04.png" alt="FinalReality" />
      <WorkImage src="/images/projects/finalreality_05.png" alt="FinalReality" />
    </Container>
  </Layout>
)

export default Project
