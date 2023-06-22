import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../form-controls/InputField";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm() {
  const schema = yup
    .object()
    .shape({
      title: yup.string().required("Please enter title"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    console.log("Todo: ", values);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField form={form} name="title" label="Todo" />
    </form>
  );
}
export default TodoForm;
