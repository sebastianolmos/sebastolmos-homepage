import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout title="Voronoi Terrain">
        <Container>
            <Title>
                Voronoi Terrain <Badge>2021</Badge>
            </Title>
            <P>
                Generador y visualizador en el navegador web de terrenos 3D de forma aleatoria a partir de diagramas de Voronoi.
                Proyecto realizado para el curso de Computación geometrica. El metodo consiste en generar puntos aleatorios, crear diagramas de voronoi 
                a partir de los puntos, luego se arreglan los diagramas con el algoritmo de Lloyd, se crea una representacion dualMesh y con ruido de perlin se genera la isla
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Languages</Meta>
                    <span>JavaScript</span>
                </ListItem>
                <ListItem>
                    <Meta>Libraries</Meta>
                    <span>Node js, WebGL</span>
                </ListItem>
                <ListItem>
                    <Meta>Software</Meta>
                    <span>Visual Studio Code</span>
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/sebastianolmos/voronoi_terrain">
                    https://github.com/sebastianolmos/voronoi_terrain <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <WorkImage src="/images/projects/voronoi_1.jpg" alt="voronoi" />
            <WorkImage src="/images/projects/voronoi_2.jpg" alt="voronoi" />
            <WorkImage src="/images/projects/voronoi_3.jpg" alt="voronoi" />
            <WorkImage src="/images/projects/voronoi_4.jpg" alt="voronoi" />
            <WorkImage src="/images/projects/voronoi_5.jpg" alt="voronoi" />
            <WorkImage src="/images/projects/voronoi_6.jpg" alt="voronoi" />
            <WorkImage src="/images/projects/voronoi_7.jpg" alt="voronoi" />
            <WorkImage src="/images/projects/voronoi_8.jpg" alt="voronoi" />
            <WorkImage src="/images/projects/voronoi_9.jpg" alt="voronoi" />
            <WorkImage src="/images/projects/voronoi_10.jpg" alt="voronoi" />
            <WorkImage src="/images/projects/voronoi_11.jpg" alt="voronoi" />
            <WorkImage src="/images/projects/voronoi_12.jpg" alt="voronoi" />
        </Container>
    </Layout>
)

export default Project
