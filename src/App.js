import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const appId = "1183067576914419";

  const responseFacebook = (response) => {
    if (response.accessToken) {
      setData(response);
      setPicture(response.picture.data.url);
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <Container className="p-3">
      <Card style={{ maxWidth: '400px', margin: '0 auto', marginTop: '80px', padding: '20px', borderRadius: '16px' }}>
        <Card.Body>
          {!login && (
            <>
              <h4 className="mb-4">Sign in with Facebook</h4>
              <FacebookLogin
                appId={appId}
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                icon="fa-facebook"
              />
            </>
          )}
          {login && (
            <div style={{ textAlign: 'center' }}>
              <img src={picture} alt="Profile" style={{ borderRadius: '50%', marginBottom: '10px' }} />
              <h3>Welcome, {data.name}</h3>
              <p>Email: {data.email}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
