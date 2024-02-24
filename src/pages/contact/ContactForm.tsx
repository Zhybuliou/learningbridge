import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
});

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          margin="normal"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          margin="normal"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Phone"
          type="tel"
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />
        <TextField
          fullWidth
          id="message"
          label="Message"
          multiline
          rows={6}
          variant="outlined"
          margin="normal"
        />
        <Button
          className="form-button"
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
          <span />
          <span />
          <span />
          <span />
        </Button>
      </form>
    </div>
  );
}
