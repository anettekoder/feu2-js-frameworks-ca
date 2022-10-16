import React from "react";
import Navmenu from "../layout/Navmenu";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Heading from "../layout/Heading";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "This field needs minimum 3 characters.")
    .required("This field is required."),
  lastName: Yup.string()
    .min(4, "This input needs minimum 4 characters.")
    .required("This field is required."),
  email: Yup.string().email().required("Email is required."),
  select: Yup.string().required("Please select one of the options."),
  message: Yup.string()
    .min(10, "This input needs minimum 10 characters.")
    .required("This field is required"),
});
function Contact() {
  const formOptions = { resolver: yupResolver(schema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const submitForm = () => {
    setSubmitting(true);
    setLoginError(null);
  };

  return (
    <>
      <Navmenu />
      <div className="grid place-content-center">
        <Heading content={"Contact"} />
        <form
          onSubmit={handleSubmit(submitForm)}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="firstName" className="sr-only">
                firstName
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="appearance-none rounded-none relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
                {...register("firstName")}
              />
              <div className="invalid">{errors.firstName?.message}</div>
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">
                lastName
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="appearance-none rounded-none relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
                {...register("This field is required.")}
              />
              {errors?.lastName && <p>{errors.lastName?.message}</p>}
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                className="rounded-none relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                {...register("email")}
              />
              {errors?.email && <p>{errors.email?.message}</p>}
            </div>
            <div>
              <select
                name="select"
                {...register("subject")}
                className="form-select appearance-none
              block
              w-full
              px-3
              py-1.5
              sm:text-sm
            bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="subject"
              >
                <option value="">Subject</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              {errors?.select && <p>{errors.select?.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                message
              </label>
              <input
                id="message"
                name="message"
                type="text"
                className="appearance-none rounded-none relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Message..."
                {...register("This field is required")}
              />
              {errors?.message && <p>{errors.message?.message}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              id="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium  text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Contact;
