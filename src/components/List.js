import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
function List({ list }) {
    let listItems;
    if (list === undefined)
        listItems = null;
    else {
        listItems = list.map((item) => {
            let str = `/post/${item.id}`;
            return <ListGroup.Item action href={str} key={item.id}>{item.title}</ListGroup.Item>
        });
    }

    return (

        <Container>
            <ListGroup>
                {listItems}
            </ListGroup>
        </Container>
    );
}

export default List;