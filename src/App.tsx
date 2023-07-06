import { createPortal } from 'react-dom';
import { useState } from 'react';
import { css } from '@emotion/react';
import { Modal } from './Modal';
import styled from '@emotion/styled';

const Screen = styled.div`
  @media (min-width: 1024px) {
    background-color: hsl(234, 29%, 20%);
    width: 100vw;
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 375px;
  max-height: 842px;
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    padding: 1.5rem;
    background-color: hsl(0, 0%, 100%);
    width: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    border-radius: 35px;
  }
`;

const Content = styled.div`
  width: calc(100% - 3rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  padding-block: 2rem;
  color: hsl(234, 29%, 20%);
  @media (min-width: 1024px) {
    width: fit-content;
    margin-inline: 3rem;
    padding-block: 3.6rem;
  }
`;

const Title = styled.div`
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 36px;
  font-weight: 700;
  @media (min-width: 1024px) {
    font-size: 52px;
  }
`;

const Text = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  font-size: 16px;
  width: 34ch;
  line-height: 1.6rem;
  @media (min-width: 1024px) {
    width: 46ch;
  }
`;

const ListDots = styled.div`
  width: 34ch;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 1024px) {
    width: unset;
  }
`;

const Dot = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  line-height: 1.6rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: hsl(234, 29%, 20%);
`;

const Email = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Roboto-Regular', sans-serif;
  font-size: 12px;
  font-weight: 700;
`;

const Label = styled.label`
  color: hsl(234, 29%, 20%);
`;

const Validation = styled.div`
  color: hsl(4, 100%, 67%);
`;

const Input = styled.input<{ validation: boolean }>`
  ${({ validation }) => css`
    border-radius: 8px;
    padding: 1.2rem;
    background-color: ${validation
      ? 'hsl(4, 100%, 67%,20%)'
      : 'hsl(0, 0%, 100%)'};
    border: 1px solid ${validation ? 'hsl(4, 100%, 67%)' : 'hsl(231, 7%, 60%)'};
    &::placeholder {
      font-size: 16px;
      color: ${validation ? 'hsl(4, 100%, 67%)' : 'hsl(231, 7%, 60%)'};
    }
  `}
`;

const Button = styled.button`
  font-family: 'Roboto-Regular', sans-serif;
  font-size: 16px;
  appearance: none;
  border: unset;
  background-color: hsl(235, 18%, 26%);
  color: hsl(0, 0%, 100%);
  padding: 1.2rem;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  &:hover,
  :focus {
    background: linear-gradient(
      to right,
      hsl(337, 89%, 60%),
      hsl(4, 100%, 67%)
    );
    box-shadow: 0px 15px 30px hsl(4, 100%, 67%, 50%);
  }
`;

const breakpoint = 1024;

const App = () => {
  const [validation, setValidation] = useState(false);
  const [input, setInput] = useState('');
  const [modal, setModal] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    setValidation(false);
    e.preventDefault();
    const data = { email: input };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(input)) {
      console.log('data', data);
      setModal(true);
      setInput('');
    } else {
      setValidation(true);
    }
  };
  console.log('window', window);
  return (
    <Screen>
      <Wrapper>
        <img
          src={
            window.innerWidth > breakpoint
              ? '/images/illustration-sign-up-desktop.svg'
              : '/images/illustration-sign-up-mobile.svg'
          }
          alt="illustration-sign-up"
        />
        <Content>
          <Title>Stay updated!</Title>
          <Text>
            Join 60,000+ product managers receiving monthly updates on:
          </Text>
          <ListDots>
            <Dot>
              <img src="/images/icon-list.svg" alt="icon-list" />
              <div>Product discovery and building what matters</div>
            </Dot>
            <Dot>
              <img src="/images/icon-list.svg" alt="icon-list" />
              <div>Measuring to ensure updates are a success</div>
            </Dot>
            <Dot>
              <img src="/images/icon-list.svg" alt="icon-list" />
              <div>And much more!</div>
            </Dot>
          </ListDots>
          <Form onSubmit={handleSubmit}>
            <Email>
              <Subtitle>
                <Label htmlFor="">Email address</Label>
                {validation && <Validation>Valid email required</Validation>}
              </Subtitle>
              <Input
                type="text"
                placeholder="email@company.com"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                validation={validation}
              />
            </Email>
            <Button type="submit">Subscribe to monthly newsletter</Button>
          </Form>
        </Content>
      </Wrapper>
      {modal &&
        createPortal(
          <Modal onClose={() => setModal(false)} />,
          document.getElementById('modal-root') as HTMLElement,
        )}
    </Screen>
  );
};

export default App;
