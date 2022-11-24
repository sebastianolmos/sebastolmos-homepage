import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbOpenglcpp from '../public/images/resources/openglcpp.png'
import thumbWebgl from '../public/images/resources/webgl.png'
import thumbThreejs from '../public/images/resources/threejs.png'

const Resources = () => (
  <Layout title="Resources">
    <Container>
      <Heading as="h3" fontSize={24} mb={4}>
        Recursos
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="OpenGL - C++ Collection"
            thumbnail={thumbOpenglcpp}
            href="https://github.com/sebastianolmos/cgraphics_cpp"
          >
            Programas con diferentes funcionalidades implementadas con OpenGL y GLFW.
          </GridItem>
          <GridItem
            title="WebGL Collection"
            thumbnail={thumbWebgl}
            href="/resources/webgl_collection/index.html"
            >
                Aplicaciones con diferentes funcionalidades implementadas con WebGL 1
            </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Three.js collection"
            thumbnail={thumbThreejs}
            href="/resources/threejs_collection/index.html"
          >
                Aplicaciones con diferentes funcionalidades implementadas con Three.js.
            </GridItem>
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Resources
