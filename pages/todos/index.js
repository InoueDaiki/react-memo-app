import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import {
  CardColumns,
  Navbar,
  Button,
  Container,
  InputGroup,
  FormControl,
  Card,
  Modal,
  Form,
  Row,
  Col,
} from "react-bootstrap";

import Layout from "../../components/layouts/default";
import {
  createTodo,
  updateTodo,
  deleteTodo,
  selectTodos,
} from "../../lib/slices/todosSlice";

export default function Todo() {
  const modeTypes = {
    CREATE: "CREATE",
    UPDATE: "UPDATE",
  };

  const [target, setTarget] = useState({});
  const [mode, setMode] = useState(modeTypes.CREATE);

  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const handleCreate = () => {
    setMode(modeTypes.CREATE);
    setTarget({ id: `${new Date().getTime()}` });
  };
  const handleUpdate = (value) => {
    setMode(modeTypes.UPDATE);
    setTarget(value);
  };
  const handleDelete = (value) => {
    dispatch(deleteTodo(value));
  };

  const handleSubmit = () => {
    if (mode === modeTypes.CREATE) {
      dispatch(createTodo(target));
    } else if (mode === modeTypes.UPDATE) {
      dispatch(updateTodo(target));
    }
    setTarget({});
  };
  const handleClose = () => setTarget({});

  const todosCards = todos.map((todo) => (
    <Card key={todo.id}>
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Text>{todo.description}</Card.Text>
        <Button variant="danger" onClick={() => handleDelete(todo)}>
          削除
        </Button>
        <Button className="ml-2" onClick={() => handleUpdate(todo)}>
          編集
        </Button>
      </Card.Body>
    </Card>
  ));
  return (
    <Layout>
      <Navbar>
        <Navbar.Brand>
          <h3>Todo一覧</h3>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleCreate}>新規作成</Button>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text className="bg-white">
              <FaSearch />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="text" placeholder="検索" />
        </InputGroup>
        <CardColumns>{todosCards}</CardColumns>
      </Container>

      <Modal show={target.id} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                タイトル
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  type="text"
                  value={target.title}
                  onChange={(event) =>
                    setTarget({ ...target, title: event.target.value })
                  }
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                本文
              </Form.Label>
              <Col sm={9}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={target.description}
                  onChange={(event) =>
                    setTarget({ ...target, description: event.target.value })
                  }
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            キャンセル
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {mode === modeTypes.CREATE ? "作成" : "編集"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}
