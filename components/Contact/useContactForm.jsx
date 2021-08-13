import { useReducer } from "react";

export default function useFormData({ reset }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const EMAIL_VALIDATION =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

  const onSubmit = async (data) => {
    dispatch({ type: "loading" });
    try {
      await fetch(process.env.NEXT_PUBLIC_FORM_END_POINT, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch({ type: "loading" });
          res.ok &&
            dispatch({
              type: "success",
              payload: "Your message is received Thank you for Contacting me",
            });
          reset(initialState);
        });
    } catch (err) {
      dispatch({
        type: "loading",
      });
      reset(initialState);
      dispatch({
        type: "error",
        payload: "Something went wrong please try later or use something else",
      });
    }
  };

  return {
    onSubmit,
    state,
    EMAIL_VALIDATION,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: !state.loading };
    case "error":
      return {
        ...state,
        success: "",
        error: action.payload,
      };
    case "success":
      return {
        ...state,
        error: "",
        success: action.payload,
      };
    default:
      throw new Error();
  }
}

const initialState = {
  loading: false,
  error: "",
  success: "",
};
