import { Col, Container, ListGroupItem, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { BsSaveFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

const FavouriteList = () => {
  const favourites = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col>
          <h2>Favourite List</h2>
        </Col>
        <ListGroup>
          {favourites.map((fav, i) => (
            <ListGroupItem key={i}>
              <BsSaveFill
                className="mr-2"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_FAVOURITE",
                    payload: fav,
                  })
                }
              />
              <Link to={"/" + fav}>{fav}</Link>
            </ListGroupItem>
          ))}
        </ListGroup>
        <Link to="/">Home</Link>
      </Row>
    </Container>
  );
};

export default FavouriteList;
