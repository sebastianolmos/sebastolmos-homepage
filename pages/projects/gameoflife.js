import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Game Of Life">
    <Container>
      <Title>
        Game Of Life <Badge>2021</Badge>
      </Title>
      <P>
        Análisis comparativo de versiones seriales y paralelas del Juego de la Vida de Conway, implementadas en C++ y desarrolladas en Visual Studio 2019, 
        correspondiente a la Tarea 2 del curso Computación en GPU (CC7515). Las soluciones implementadas corresponden a una versión serial en CPU y 
        dos paralelas en GPU, usando CUDA y OpenCL respectivamente. Además se agregar una visualización del juego de la vida basado en el {' '}
        <Link href="http://www.marekfiser.com/Projects/Conways-Game-of-Life-on-GPU-using-CUDA">
            Proyecto  
        </Link>
        {' '}
         de Marek Fiser, 
        programado en C++ y renderizado con OpenGL 3.3, disponible en el directorio GameOfLifeVisualization.
        
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>C++, Python, GLSL</span>
        </ListItem>
        <ListItem>
          <Meta>Libraries</Meta>
          <span>CUDA, OpenCL, OpenGL, GLFW, GLM</span>
        </ListItem>
        <ListItem>
          <Meta>Software</Meta>
          <span>Visual Studio 2019</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/sebastianolmos/game_of_life">
          https://github.com/sebastianolmos/game_of_life <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/gameoflife_01.png" alt="GameOfLife" />
      <WorkImage src="/images/projects/gameoflife_02.png" alt="GameOfLife" />
      <WorkImage src="/images/projects/gameoflife_03.png" alt="GameOfLife" />
      <WorkImage src="/images/projects/gameoflife_04.png" alt="GameOfLife" />
    </Container>
  </Layout>
)

export default Project
