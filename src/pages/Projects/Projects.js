import { Container } from "react-bootstrap"
import Header from '../../components/Header'
import TagsBar from '../../components/Tags'
import Footer from "../../components/Footer";
export default function Projects() {
    let serviceData;
    return (
        <>
            <Header></Header>
            <Container>
                <h2>Projects</h2>
            </Container>
            <TagsBar tags={serviceData}></TagsBar>
            <Footer></Footer>
        </>
    )
}