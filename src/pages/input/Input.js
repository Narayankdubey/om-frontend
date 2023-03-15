import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  TextField,
} from "@mui/material";
import validateForm from "../../utils/constants";
import { addPremiumDetails } from "../../store/premium-actions";
import { useDispatch } from "react-redux";

const initalState = {
  dob: "",
  gender: "male",
  sumAssured: "",
  modalPremium: "",
  premiumFrequency: "Yearly",
  pt: "",
  ppt: "",
};
const Input = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initalState);
  const [errors, setErrors] = React.useState({});
  const { dob, gender, sumAssured, modalPremium, premiumFrequency, pt, ppt } =
    state;
  const handleOnChange = ({ target: { value, name } }) => {
    setState({ ...state, [name]: value });
  };
  const handleSubmit = () => {
    const validateError = validateForm(state);
    const noErrors = Object.keys(validateError).length === 0;
    setErrors(validateError);
    if (noErrors) {
      dispatch(addPremiumDetails(state));
    }
  };

  return (
    <Box>
      <Card sx={{ my: "5%", mx: "10%" }}>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
        >
          <TextField
            label="DOB"
            size="small"
            type="date"
            name="dob"
            value={dob}
            onChange={(event) => handleOnChange(event)}
            InputLabelProps={{ shrink: true }}
            error={errors.dob ? true : false}
            helperText={errors.dob}
          />
          <TextField
            label="gender"
            size="small"
            select
            name="gender"
            value={gender}
            onChange={(event) => handleOnChange(event)}
            error={errors.gender ? true : false}
            helperText={errors.gender}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>
          <TextField
            type="number"
            label="Sum Assured"
            size="small"
            name="sumAssured"
            value={sumAssured}
            onChange={(event) => handleOnChange(event)}
            error={errors.sumAssured ? true : false}
            helperText={errors.sumAssured}
          />
          <TextField
            type="number"
            label="Modal Premium"
            size="small"
            name="modalPremium"
            value={modalPremium}
            onChange={(event) => handleOnChange(event)}
            error={errors.modalPremium ? true : false}
            helperText={errors.modalPremium}
          />
          <TextField
            type="number"
            label="Premium Frequency"
            size="small"
            name="premiumFrequency"
            value={premiumFrequency}
            onChange={(event) => handleOnChange(event)}
            error={errors.premiumFrequency ? true : false}
            InputProps={{ inputProps: { min: 10000, max: 50000 } }}
            helperText={errors.premiumFrequency}
            select
          >
            <MenuItem value="Yearly">Yearly</MenuItem>
            <MenuItem value="Half-Yearly">Half-Yearly</MenuItem>
            <MenuItem value="Monthly">Monthly</MenuItem>
          </TextField>
          <TextField
            type="number"
            label="PT"
            size="small"
            name="pt"
            value={pt}
            onChange={(event) => handleOnChange(event)}
            error={errors.pt ? true : false}
            InputProps={{ inputProps: { min: 10, max: 20 } }}
            helperText={errors.pt}
          />
          <TextField
            type="number"
            label="PPT"
            size="small"
            name="ppt"
            value={ppt}
            onChange={(event) => handleOnChange(event)}
            error={errors.ppt ? true : false}
            InputProps={{ inputProps: { min: 5, max: 10 } }}
            helperText={errors.ppt}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" onClick={handleSubmit}>
              Calculate Premium
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Input;
