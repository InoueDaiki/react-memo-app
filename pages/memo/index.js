import { FaSearch } from "react-icons/fa";
import {
  Navbar,
  Button,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Layout from "../../components/layouts/default";

export default function Home() {
  return (
    <Layout>
      <Navbar>
        <Navbar.Brand>
          <h3>Memo一覧</h3>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button>新規作成</Button>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text className="bg-white">
              <FaSearch />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="text" placeholder="検索" />
        </InputGroup>
      </Container>
    </Layout>
  );
}
