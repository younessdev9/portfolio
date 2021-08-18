import styled from "styled-components";

export const MyContact = styled.div`
  max-width: 70rem;
  margin: auto;
  padding: 1rem;
  padding-top: 5rem;
  h1 {
  }

  form {
    margin-top: 3rem;

    .input-wrapper {
      min-height: 13rem;
    }

    label {
      display: inline-block;
      margin-top: 1rem;
    }

    .input {
      width: 90%;
      padding: 1rem;
      border-radius: 0.5rem;
      margin-top: 1.2rem;
      font-size: 1.6rem;
      font-family: inherit;
      border: none;
      outline: 2px ${({ theme }) => theme.yellowColor} solid;
      -moz-outline-radius: inherit.5rem;

      &:focus {
        outline-color: ${({ theme, name }) =>
          name?.message ? theme.redColor : theme.blueColor};
      }
    }
    .${({ name }) => name}-input {
      outline: 2px
        ${({ theme, name }) =>
          name?.message ? theme.redColor : theme.yellowColor}
        solid;
    }
    .error-message {
      display: block;
      margin: 1.3rem 0.4rem;
      color: ${({ theme }) => theme.redColor};
    }

    .message-input {
      display: block;
      resize: vertical;
      width: 90%;
      min-height: 9rem;
    }
    .submit-button {
      margin-top: 2rem;
    }
  }

  .submit-message {
    padding: 1rem 0;
    margin: 1rem;
    font-size: 1.7rem;
    line-height: 1.5;

    .error {
      color: ${({ theme }) => theme.redColor};
    }
    .success {
      color: ${({ theme }) => theme.blueColor};
    }
  }
`;
