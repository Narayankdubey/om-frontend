import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  TextField,
} from "@mui/material";
import validateForm, { ROUTES } from "../../utils/constants";
import { updatePremiumById, getPremiumDetailsById } from "../../store/premium-actions";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../utils/helper";
import { useNavigate } from "react-router";

const Input = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {premiumData}= useSelector((state)=>state.premium)
  const [state, setState] = useState(premiumData);
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
      dispatch(updatePremiumById(userData._id,state)).then((res)=>{
        if(res)
        navigate("/"+ROUTES.ILLUSTRATION)
      });
    }
  };

  useEffect(()=>{
    dispatch(getPremiumDetailsById(userData._id));
  },[dispatch])
  useEffect(()=>{
    if(premiumData)
      setState(premiumData)
  },[premiumData])

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
          {console.log(gender, 'gender')}
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
