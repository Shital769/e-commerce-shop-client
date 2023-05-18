import React from "react";

export const DashboardItemCard = ({ slug, name, salesPrice, item, qty }) => {
  return (
    <div>
      <Row className="d-flex justify-content-around">
        <Col mt="2">
          <Link className="nav-link" to={`/product/${item.slig}`}>
            <Card
              style={{ width: "18rem", height: "60vh" }}
              className="m-3"
              dashboardCard
            >
              <Card.Img
                style={{ width: "38vh", h40vheight: "40vh" }}
                variant="top"
                src={process.env.REACT_APP_DOMAIN + item?.mainImage.substr(6)}
              />
              <CustomCart key={item} {...item} />
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
