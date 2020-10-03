import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../components/layouts/default";

export default function Home() {
  return (
    <Layout>
      <Row>
        <Col sm>
          <Card border="light">
            <Card.Body>
              <Card.Title>Todo</Card.Title>
              <Card.Text>
                タスクを管理しましょう
                <br />
                Memoを紐づけることで情報の整理も可能です
              </Card.Text>
              <Link href="/todo">
                <Button>Todo一覧へ</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col sm>
          <Card border="light">
            <Card.Body>
              <Card.Title>Memo</Card.Title>
              <Card.Text>
                情報共有、備忘録、買い物リスト...
                <br />
                テキストを書き留めましょう
                <br />
                使い方はあなた次第です
              </Card.Text>
              <Link href="/memo">
                <Button>Memo一覧へ</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}
