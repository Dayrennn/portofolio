import Button from "react-bootstrap/Button";

function ButtonConfirm({ children }) {
  return (
    <>
      <Button variant="primary">{children}</Button>
    </>
  );
}

export default ButtonConfirm;
