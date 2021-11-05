import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
  <Layout title="Sea Animation">
    <Container>
      <Title>
        Sea Animation <Badge>2021</Badge>
      </Title>
      <P>
      Tarea 3 realizado en el curso CC7515-1 Computación en GPU. Corresponde a una escena que simula una superficie fluida en tiempo real donde el 
      usuario puede manipular sus multiples parametros, ademas de agregar un modelo de barco sobre la superficie del oceano. El oleaje es simulado 
      concatenando Gerstner Waves sobre una malla de triangulos de manera paralela con el uso del vertex Shader.
        
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Languages</Meta>
          <span>C++, GLSL</span>
        </ListItem>
        <ListItem>
          <Meta>Libraries</Meta>
          <span>OpenGL, GLFW, GLM, Assimp, Dear Imgui</span>
        </ListItem>
        <ListItem>
          <Meta>Software</Meta>
          <span>Visual Studio 2019</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/sebastianolmos/sea_anim">
          https://github.com/sebastianolmos/sea_anim <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/seaanimation_01.png" alt="SeaAnimation" />
      <WorkImage src="/images/projects/seaanimation_02.png" alt="SeaAnimation" />
      <WorkImage src="/images/projects/seaanimation_03.png" alt="SeaAnimation" />
      <WorkImage src="/images/projects/seaanimation_04.png" alt="SeaAnimation" />
      <WorkImage src="/images/projects/seaanimation_05.png" alt="SeaAnimation" />
      <WorkImage src="/images/projects/seaanimation_06.png" alt="SeaAnimation" />
    </Container>
  </Layout>
)

export default Project
