import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
function List({ list }) {
    console.log('list.js', list);

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
                {/* <ListGroup.Item action href='/post/1'>Cras justo odio</ListGroup.Item>
                <ListGroup.Item action href='/post/2'>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item action href='/post/3'>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            </ListGroup>
        </Container>
    );
}

export default List;