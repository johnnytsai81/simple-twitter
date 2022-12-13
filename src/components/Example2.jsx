import Button from 'react-bootstrap/Button';

function Example2() {
  return (
    <>
      <Button className="en-font-family" variant="primary" size="lg">Large Primary</Button>{' '}
      <Button className="en-font-family" variant="primary">Primary</Button>{' '}
      <Button className="en-font-family" variant="primary" size="sm">Small Primary</Button>{' '}
      <Button className="en-font-family" variant="outline-primary">Outline Primary</Button>{' '}
      <Button className="en-font-family" variant="link">Link</Button>
    </>
  );
}

export default Example2;