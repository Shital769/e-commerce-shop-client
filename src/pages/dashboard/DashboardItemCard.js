import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHotDealsProductAction } from "./DashBoardAction";

export const DashboardItemCard = ({ slug, name, salesPrice, item, qty }) => {
  const dispatch = useDispatch();
  const { hotDealsProducts } = useSelector((state) => state.hotDeals);
  //review here

  useEffect(() => {
    dispatch(getHotDealsProductAction());
  });

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
