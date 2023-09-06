import { styled } from "styled-components";
import { useState } from "react";
import { COLORS } from "../GlobalStyles";
import { FaSadCry } from "react-icons/fa";
import { LoadingSmall } from "./utils/Loading";

export const InputField = ({ reload, setReload }) => {
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
          placeholder={"What's up?"}
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
border: solid red;
  margin: 0 auto;
  padding: 60px 60px 30px;
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
  font-family: "Poppins", sans-serif;
  line-height: 22px;
  font-size: 16px;
  border-radius: 5px;
  color: ${COLORS.primary_blue};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${COLORS.primary_blue};
  border-radius: 5px;
  // background-color: ${COLORS.secondary};
  // border: 1px solid ${COLORS.secondary};
  transition: all 200ms ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${COLORS.matte_blue};
    color: ${COLORS.background};
  }
  &:disabled {
    background-color: ${COLORS.background};
    border: 1px solid lightgray;
    color: lightgray;
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