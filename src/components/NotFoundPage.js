import React from 'react';
import { Link } from 'react-router';
import { Button } from '@sketchpixy/rubix';

const NotFoundPage = () => {

  return (
    <div>
      <h3>Page Not Found</h3>
        <Link to="/"><Button>Home</Button></Link>
    </div>
  );

};

export default NotFoundPage;
