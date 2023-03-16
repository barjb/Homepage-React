import ReactMarkdown from 'react-markdown';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import { postPost } from '../../services/homepageservice';
import { Alert } from 'react-bootstrap';
export default function Editor() {
    const [query, setQuery] = useState('');
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState();
    function handleSubmit(event) {
        event.preventDefault();
        const title = event.target.formTitle.value;
        let tags = event.target.formTags.value;
        const text = event.target.formText.value;

        tags = tags.split(',');
        tags = tags.map(e => e.trim())
        let obj = {
            'name': title,
            'tags': tags,
            'text': text
        }
        postPost(obj).then(res => {
            console.log(res)
            setShow(true);
            if (res.status === 200) {
                setVariant('success');
            } else {
                console.log('here');
                setVariant('danger');
            }
        })
    }

    return (
        <>
            <div className='editor'>
                <Container>
                    <Form onSubmit={handleSubmit}>
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
                    <Alert show={show} variant={variant} onClose={() => setShow(false)} dismissible>{variant === 'danger' ? 'Something went wrong' : variant === 'success' ? 'new post added' : ''}</Alert>
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


