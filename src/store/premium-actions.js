import { uiActions } from "./ui-slice";
import { premiumActions } from "./premium-slice";

import axios from "../helpers/axiosInstance";
import { handleError } from "./login-actions";

export const getPremiumDetails = () => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.toggleLoader());
      const data = await axios.get("/premium");
      dispatch(premiumActions.setPremiumDetails(data.data));
    } catch (error) {
      handleError(dispatch, error);
    } finally {
      dispatch(uiActions.toggleLoader());
    }
  };
};

export const addPremiumDetails = (body) => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.toggleLoader());
      const data = await axios.post("/premium", body);
      dispatch(premiumActions.addPremiumDetails(data.data));
      await dispatch(
        uiActions.showNotification({
          status: "success",
          message: data.data.message,
        })
      );
    } catch (error) {
      handleError(dispatch, error);
    } finally {
      dispatch(uiActions.toggleLoader());
    }
  };
};

export const delPremiumDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.toggleLoader());
      const data = await axios.delete("/premium/" + id);
      dispatch(premiumActions.deletePremium(data.data));
      await dispatch(
        uiActions.showNotification({
          status: "success",
          message: data.data.message,
        })
      );
    } catch (error) {
      handleError(dispatch, error);
    } finally {
      dispatch(uiActions.toggleLoader());
    }
  };
};

export const getPremiumDetailsById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.toggleLoader());
      const data = await axios.get("/premium/" + id);
      dispatch(premiumActions.getPremiumById(data.data));
    } catch (error) {
      handleError(dispatch, error);
    } finally {
      dispatch(uiActions.toggleLoader());
    }
  };
};

export const updatePremiumById = (id, body) => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.toggleLoader());
      const data = await axios.patch("/premium/" + id, body);
      dispatch(premiumActions.addPremiumDetails(data.data));
      await dispatch(
        uiActions.showNotification({
          status: "success",
          message: data.data.message,
        })
      );
    } catch (error) {
      handleError(dispatch, error);
    } finally {
      dispatch(uiActions.toggleLoader());
    }
  };
};
