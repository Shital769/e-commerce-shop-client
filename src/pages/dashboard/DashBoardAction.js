import { fetchCustomertProduct } from "../../helper/axios";
import { setHotDealsProduct } from "./DashboardSlice";

export const getHotDealsProductAction = (slug) => async (dispatch) => {
  const { status, products } = await fetchCustomertProduct(slug);

  status === "success" && dispatch(setHotDealsProduct(products));
};
