import React from 'react';
import PropTypes from 'prop-types';

function ErrorPage({ statusCode }) {
  return (
    <div>
      <h1>Error {statusCode}</h1>
      <p>Sorry, an error has occurred</p>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};

ErrorPage.defaultProps = {
  statusCode: 404,
};

export default ErrorPage;