import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href='/' >Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/users' >Users</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;