import { Button } from "components/Button";
import { useForm } from "react-hook-form";
import { MyContact } from "./styles";
import useContactForm from "./useContactForm";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    reValidateMode: "onChange",
  });
  const { onSubmit, state, EMAIL_VALIDATION } = useContactForm({ reset });

  return (
    <MyContact {...errors}>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <label htmlFor="name">Name:</label> <br />
          <input
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Enter your name"
            className="name-input input"
          />
          {errors.name?.message && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>

        <div className="input-wrapper">
          <label htmlFor="email">Email:</label> <br />
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: EMAIL_VALIDATION,
                message: "Email format is invalid",
              },
            })}
            type="email"
            placeholder="Enter your name"
            className="email-input input"
          />
          {errors.email?.message && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        <div className="input-wrapper">
          <label htmlFor="message">Message:</label> <br />
          <textarea
            {...register("message", {
              required: "Message is required",
              maxLength: {
                value: 600,
                message: "your message must be less thank 600 character",
              },
            })}
            placeholder="Enter your message"
            className="message-input input"
          />
          {errors.message?.message && (
            <span className="error-message">{errors.message.message}</span>
          )}
        </div>
        <Button className="submit-button" disabled={state?.loading}>
          {state.loading ? "Loading..." : "Submit"}
        </Button>
      </form>

      <dir className="submit-message">
        <span className="error">{state.error && state.error}</span>
        <span className="success">{state.success && state.success}</span>
      </dir>
    </MyContact>
  );
}
