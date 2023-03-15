import moment from "moment";

export const ROUTES = {
  HOME: "/",
  INPUT: "input",
  ILLUSTRATION: "illustration",
  NOTFOUND: "notfound",
  LOGIN: "/login",
  REGISTRATION: "/registration",
};

export const STORAGE_KEY_CONSTANT = "accesstoken";

export default function validateForm(data) {
  let errors = {};
  if (!data.dob || data.dob === "") {
    errors.dob = "dob is required";
  } else {
    let age = moment(Date.now()).diff(data.dob, "years", false);
    if (age < 23 || age > 56) {
      errors.dob = `${age} is not valid age it should be in between 23 to 56`;
    }
  }
  if (!data.gender || data.gender === "") {
    errors.gender = "gender is required";
  }
  if (!data.sumAssured || data.sumAssured === "") {
    errors.sumAssured = "Sum Assured is required";
  }
  if (!data.modalPremium || data.modalPremium === "") {
    errors.modalPremium = "Modal Premium is required";
  }
  if (!data.premiumFrequency || data.premiumFrequency === "") {
    errors.premiumFrequency = "Premium Frequency is required";
  }
  if (!data.pt || data.pt === "") {
    errors.pt = "PT is required";
  } else {
    if (data.pt < 10 || data.pt > 20) {
      errors.pt = "PT be in range between 10 to 20";
    }
  }
  if (!data.ppt || data.ppt === "") {
    errors.ppt = "PPT is required";
  } else {
    if (data.ppt < 5 || data.ppt > 10) {
      errors.ppt = "PPT be in range between 5 to 10";
    }
    if (parseInt(data.pt) <= parseInt(data.ppt)) {
      errors.ppt = "PPT should be less than PT";
    }
  }
  return errors;
}
