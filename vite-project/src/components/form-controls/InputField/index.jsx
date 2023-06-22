import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

InputField.prototype = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  // eslint-disable-next-line react/prop-types
  const { form, name, label, disabled } = props;

  const {
    // eslint-disable-next-line react/prop-types
    formState: { errors, touchedFields },
  } = form;

  // eslint-disable-next-line react/prop-types
  const hasError = touchedFields[name] && errors[name];

  // eslint-disable-next-line react/prop-types
  console.log(errors[name], touchedFields[name]);

  return (
    <>
      <Controller
        name={name}
        // eslint-disable-next-line react/prop-types
        control={form.control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            // eslint-disable-next-line react/prop-types
            helperText={errors[name]?.message}
          />
        )}
        label={label}
        disabled={disabled}
        errors={!!hasError}
      ></Controller>
    </>
  );
}

export default InputField;

// MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl
// MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControlc
