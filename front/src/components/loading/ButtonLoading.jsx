import {Spinner} from 'flowbite-react';
import {Button} from 'flowbite-react';

function ButtonLoading({
  loading,
  children,
  type = "submit",
  variant = "primary",
}) {
  return (
    <Button variant={variant} type={type} disabled={loading}>
      {loading && <Spinner animation="border" size="sm" />}
      {children}
    </Button>
  );
}

export default ButtonLoading;