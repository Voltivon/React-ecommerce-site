import { Box, Typography, TextField } from "@mui/material";



const Payment = ({ values, touched, errors, handleBlur, handleChange}) => {
    return (
        <Box m="30px 0">
            {/* Contact Info */}
            <Box>
                <Typography sx={{ mb: "15px"}} fontSize="18px"> 
                Contact Info
                </Typography>
            <TextField
           fullWidth
           type="text"
           label="Email"
           onBlur={handleBlur}
           onChange={handleChange}
           value={values.firstName}
           name="email"
           error={!!touched.email && !!errors.email}
           helperText={touched.email && errors.email}
           sx={{ gridColumn: "span 2", marginBottom: "15px"}}
       />
        <TextField
           fullWidth
           type="text"
           label="Phone Number"
           onBlur={handleBlur}
           onChange={handleChange}
           value={values.firstPhoneNumber}
           name="email"
           error={!!touched.phoneNumber && !!errors.phoneNumber}
           helperText={touched.phoneNumber && errors.phoneNumber}
           sx={{ gridColumn: "span 4"}}
       />
            </Box>
        </Box>
    )
}

export default Payment;