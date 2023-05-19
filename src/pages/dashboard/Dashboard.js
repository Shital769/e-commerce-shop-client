import React from "react";
import { DashboardItemCard } from "./DashboardItemCard";
import { Row, Col, Container } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div>
      <CustomLayout>
        <div className="p-3 mt-3">{/* carousel */}</div>
        <div className="mt-3">
          <h3 className="text-center text-black">Newly Fresh Grocery Items</h3>
          <Container>
            <Row className="py-3 mt-3">
              <Col>
                <DashboardItemCard />
              </Col>
            </Row>
          </Container>
        </div>
      </CustomLayout>
    </div>
  );
};

export default Dashboard;
