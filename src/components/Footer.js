import { Navbar, Container } from "react-bootstrap";
function Footer() {
    return (
        <>
            <hr className="my-4" />
            <Navbar>
                <Container>
                    <Navbar.Brand href="https://github.com/barjb">github</Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}
export default Footer;