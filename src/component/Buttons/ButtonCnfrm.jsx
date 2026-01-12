import Button from "react-bootstrap/Button";

function ButtonConfirm({ children, variant }) {
  return (
    <>
      <Button className={`btn-confirm ${variant ? `btn-${variant}` : ""}`}>
        {children}
      </Button>
    </>
  );
}

export default ButtonConfirm;
