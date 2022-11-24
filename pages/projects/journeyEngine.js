import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout title="JourneyEngine">
        <Container>
            <Title>
                JourneyEngine <Badge>2022</Badge>
            </Title>
            <P>
                Motor de videojuegos 3D creado para el curso de Arquitecturas de motores de videojuegos. Esta basado en el sistema Entidad componente. Permite crear de una manera 
                estructurada, una escena con entidades controlables por teclado o Gamepad, multiples fuentes de sonido dinamicas, skeletal animations, un sistema de scripting para 
                las entidades y efectos de post rendering como blur y hdr.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Languages</Meta>
                    <span>C++, GLSL, CMake</span>
                </ListItem>
                <ListItem>
                    <Meta>Libraries</Meta>
                    <span>OpenGL, GLFW, Assimp, OpenAL</span>
                </ListItem>
                <ListItem>
                    <Meta>Software</Meta>
                    <span>Visual Studio Code, Visual Studio 2019</span>
                </ListItem>
                <ListItem>
                    <Meta>Source</Meta>
                    <Link href="https://github.com/sebastianolmos/JourneyEngine">
                    https://github.com/sebastianolmos/JourneyEngine <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <WorkImage src="/images/projects/journeyEngine_01.jpg" alt="JourneyEngine1" />
            <WorkImage src="/images/projects/journeyEngine_02.jpg" alt="JourneyEngine2" />
            <WorkImage src="/images/projects/journeyEngine_03.jpg" alt="JourneyEngine3" />
            <WorkImage src="/images/projects/journeyEngine_04.jpg" alt="JourneyEngine4" />
            <WorkImage src="/images/projects/journeyEngine_05.jpg" alt="JourneyEngine5" />
            <WorkImage src="/images/projects/journeyEngine_06.jpg" alt="JourneyEngine6" />
            <WorkImage src="/images/projects/journeyEngine_07.jpg" alt="JourneyEngine7" />
        </Container>
    </Layout>
)

export default Project
