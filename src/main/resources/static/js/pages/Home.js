import React from "react";
import { PageHeader, Row, Col } from "react-bootstrap";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <PageHeader>
                    AnalyzeIT
                </PageHeader>
                <Row>
                    <Col md={6} mdOffset={3}>
                        Home
                    </Col>
                </Row>
            </div>
        );
    }
}