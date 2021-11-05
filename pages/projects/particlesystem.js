import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Particle System">
    <Container>
      <Title>
        Particle System <Badge>2021</Badge>
      </Title>
      <P>
      Proyecto final del curso CC7515-1 Computación en GPU. Corresponde a una escena que simula colisiones de esferas en un espacio de 3 dimensiones, 
      encerradas en una caja. Para el calculo de colisiones se utilizo la herramienta CUDA con el lenguaje de programacion C++, 
      basandose en en el articulo 
      {' '}
        <Link href="https://developer.download.nvidia.com/assets/cuda/files/particles.pdf">
            Particle Simulation using CUDA  
        </Link>
    {' '}
      de Simon Green. Además se utiliza de referencia la simulación que se encuentra en 
      los ejemplos de CUDA Toolkit.
        
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>C++, GLSL</span>
        </ListItem>
        <ListItem>
          <Meta>Libraries</Meta>
          <span>CUDA, OpenGL, GLFW, GLM, Assimp, Dear Imgui</span>
        </ListItem>
        <ListItem>
          <Meta>Software</Meta>
          <span>Visual Studio 2019</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/sebastianolmos/particle_system">
          https://github.com/sebastianolmos/particle_system <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/particlesystem_01.png" alt="ParticleSystem" />
      <WorkImage src="/images/projects/particlesystem_02.png" alt="ParticleSystem" />
      <WorkImage src="/images/projects/particlesystem_03.png" alt="ParticleSystem" />
      <WorkImage src="/images/projects/particlesystem_04.png" alt="ParticleSystem" />
    </Container>
  </Layout>
)

export default Project
