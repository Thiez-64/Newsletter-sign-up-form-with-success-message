import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  min-width: 375px;
  width: 100%;
  height: 100vh;
  background-color: hsl(0, 0%, 100%);
  color: hsl(235, 18%, 26%);
`;

const Card = styled.div`
  padding-top: 10rem;
  padding-bottom: 3rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18rem;
  width: 42ch;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const Img = styled.img`
  width: 65px;
`;

const Title = styled.div`
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 36px;
  font-weight: 700;
`;

const Text = styled.div`
  font-family: 'Roboto-Regular', sans-serif;
  font-size: 16px;
  line-height: 1.6rem;
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

type ModalProps = {
  onClose: () => void;
};

export const Modal = ({ onClose }: ModalProps) => {
  return (
    <Wrapper>
      <Card>
        <Content>
          <Img src="/images/icon-success.svg" alt="icon-success" />
          <Title>Thanks for subscribing!</Title>
          <Text>
            A confirmation email has been sent to
            <strong> ash@loremcompany.com</strong>. Please open it and click the
            button inside to confirm your subscription
          </Text>
        </Content>
        <Button onClick={onClose}>Dismiss message</Button>
      </Card>
    </Wrapper>
  );
};
