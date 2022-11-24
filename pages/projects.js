import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSpacewar from '../public/images/projects/spacewar_eyecatch.png'
import thumbCrazyRacer from '../public/images/projects/crazyracer_eyecatch.png'
import thumbAquarium from '../public/images/projects/edpaquarium_eyecatch.png'
import thumbFinalreality from '../public/images/projects/finalreality_eyecatch.png'
import thumbGameoflife from '../public/images/projects/gameoflife_eyecatch.png'
import thumbSeaanimation from '../public/images/projects/seaanimation_eyecatch.png'
import thumbParticlesim from '../public/images/projects/particlesystem_eyecatch.png'
import thumbJourneyEngine from '../public/images/projects/journeyEngine_eyecatch.png'
import thumbVoronoiTerrain from '../public/images/projects/voronoi_eyecatch.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={24} mb={4}>
        Proyectos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="spacewar" title="Space War" thumbnail={thumbSpacewar}>
          Juego shooter 2D sobre controlar una nave que tiene que eliminar a las naves enemigas.
          Background es generado proceduralmente.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="crazyracer" title="Crazy Racer" thumbnail={thumbCrazyRacer}>
          Juego de carreras 3D sobre una pista generada y modelada con una spline RNU.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
            <WorkGridItem id="edpaquarium" title="EDP Aquarium" thumbnail={thumbAquarium}>
            Visualización 3D de un acuario con zonas de temperatura obtenidas al resolver una EDP, y la interacción de tres tipos de peces.
            </WorkGridItem>
        </Section>

        <Section delay={0.1}>
            <WorkGridItem id="finalreality" title="Final Reality" thumbnail={thumbFinalreality}>
            Prototipo del sistema de batalla por turno del juego final fantasy. Cuenta con un constructor de batallas personalizadas.
            </WorkGridItem>
        </Section>

        <Section delay={0.2}>
            <WorkGridItem id="gameoflife" title="Game Of Life" thumbnail={thumbGameoflife}>
            Estudio sobre distintas implementaciones y configuraciones de threads del juego de la vida de Conway, más visualizador en tiempo real.
            </WorkGridItem>
        </Section>

        <Section delay={0.2}>
            <WorkGridItem id="seaanimation" title="Sea Animation" thumbnail={thumbSeaanimation}>
            Simulación de una superficie fluida en tiempo real, a través de sumas de Gerstner waves y desplazamientos de texturas.
            </WorkGridItem>
        </Section>

        <Section delay={0.3}>
            <WorkGridItem id="particlesystem" title="Particle System" thumbnail={thumbParticlesim}>
            Simulación de partículas en un espacio 3D, utilizando programación en GPU con CUDA, alcanzando medio millón de partículas
            </WorkGridItem>
        </Section>

        <Section delay={0.3}>
            <WorkGridItem id="voronoiTerrain" title="Voronoi Terrain" thumbnail={thumbVoronoiTerrain}>
            Generador de terrenos 3D aleatorio a partir de diagramas de Voronoi, corre en el navegador
            </WorkGridItem>
        </Section>

        <Section delay={0.3}>
            <WorkGridItem id="journeyEngine" title="JourneyEngine" thumbnail={thumbJourneyEngine}>
            Motor de videojuegos 3D creado en C++ y OpenGL, con el fin de poder crear juegos de aventura
            </WorkGridItem>
        </Section>

      </SimpleGrid>

    </Container>
  </Layout>
)

export default Projects
