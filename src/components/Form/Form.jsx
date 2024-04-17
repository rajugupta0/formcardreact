import { useForm } from "react-hook-form";

function Form({ handleFormSubmitData }) {
  const { register, handleSubmit, reset } = useForm();
  const handleFormData = (data) => {
    handleFormSubmitData(data);
    reset();
  };

  return (
    <div className="mt-10 flex justify-center ">
      <form className="flex gap-10" onSubmit={handleSubmit(handleFormData)}>
        <input
          {...register("name")}
          className="rounded px-2 py-1  text-base  font-semibold outline-none"
          type="text"
          placeholder="name"
        />
        <input
          {...register("details")}
          className="rounded px-2 py-1  text-base  font-semibold outline-none"
          type="text"
          placeholder="details"
        />
        <input
          {...register("image")}
          className="rounded px-2 py-1  text-base  font-semibold outline-none"
          type="text"
          placeholder="img URL"
        />
        <input
          className="bg-blue-600 rounded-md px-2 py-1 text-white font-medium"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form;
