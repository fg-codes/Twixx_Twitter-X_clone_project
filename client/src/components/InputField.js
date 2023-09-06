import { styled } from "styled-components";
import { useState, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { COLORS } from "../GlobalStyles";
import { FaSadCry } from "react-icons/fa";
import { LoadingSmall } from "./utils/Loading";

export const InputField = ({ reload, setReload }) => {
  const currentUser = useContext(CurrentUserContext);
  const initialColor = COLORS.primary_blue;
  const [color, setColor] = useState(initialColor);
  const [textarea, setTextarea] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) => {
    let numChars = 280 - target.value.length
    setTextarea(target.value);
    if (numChars <= 55 && numChars >= 0) { setColor(COLORS.yellow) }
    else if (numChars < 0) { setColor(COLORS.red) }
    else { setColor(initialColor) }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    fetch('/api/tweet', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ 'status': textarea })
    })
      .then(res => res.json())
      .then(() => {
        setColor(initialColor);
        setTextarea("");
        setReload(!reload);
        setLoading(false);
      })
      .catch(() => setError(true))
  }

  return (
    color && (
      <Form onSubmit={handleSubmit}>
        <Textarea
          placeholder={`What's on your mind, ${currentUser.currentuser.displayName}?`}
          value={textarea}
          onChange={handleChange}
        ></Textarea>
        <FormHandles>
          <Characters color={color}>{!textarea ? 280 : 280 - textarea.length}</Characters>
          <Button type="submit" disabled={color === COLORS.red || !textarea}>{loading ? <LoadingSmall /> : 'Publish'}</Button>
        </FormHandles>
        {error && (
          <Error>
            <StyledFaSadCry />
            <H1>AN UNKNOWN ERROR HAS OCCURED.</H1>
            <p>Please try refreshing the page, or <a href="mailto:please@dont.com">contact support</a> if the problem persists.</p>
          </Error>
        )}
      </Form>
    )
  )
}

const StyledFaSadCry = styled(FaSadCry)`
  font-size: 50px;
`;

const H1 = styled.h1`
  font-size: 20px;
  margin: 10px;
`;

const Error = styled.div`
  text-align: center;
  padding: 10px;
  border: 6px solid ${COLORS.red};
  width: fit-content;
  margin: 20px auto;
  border-radius: 5px;
`;

const Form = styled.form`
  background-color: ${COLORS.card};
  border-radius: 5px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const Characters = styled.div`
  color: ${props => props.color};
  font-weight: 600;
`;

const Textarea = styled.textarea`
  height: 75px;
  padding: 15px;
  resize: none;
  font-family: "Poppins", sans-serif;
  background-color: ${COLORS.hover};
  color: ${COLORS.secondary_text};
  border: none;
  outline: none;
  line-height: 22px;
  font-size: 16px;
  border-radius: 5px;
  &::placeholder {
    font-style: italic;
  }
`;

const Button = styled.button`
  padding: 5px 30px;
  font-size: 16px;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  border-radius: 5px;
  transition: all 200ms ease-in-out;
  color: ${COLORS.primary_text};
  background-color: ${COLORS.primary_blue};
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    color: revert;
    background-color: revert;
    cursor: default;
  }
`;

const FormHandles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 15px;
`;