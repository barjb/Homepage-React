import ReactMarkdown from 'react-markdown';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
export default function Editor() {
    const [query, setQuery] = useState('');
    return (
        <>
            <div className='editor'>
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formTags">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control type="text" placeholder="Enter tags" />
                            <Form.Text className="text-muted">
                                Separate multiple tags with ','
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formText">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={15} onChange={(e) => setQuery(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
            <div className='result'>
                <Container>
                    <ReactMarkdown children={query}></ReactMarkdown>
                </Container>
            </div>
        </>
    )
}