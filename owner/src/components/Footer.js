import React from 'react';
import i18n from '../i18n';
import {Link} from 'react-router-dom';
import {HOME} from '../router/Pages';

const Footer = () => {

  return <footer>

    <div className="container text-center space-1 border-top">
      <Link className="d-inline-flex align-items-center mb-2" to={HOME}>
        <img src="/img/logo-small.jpg" alt="" className="img-fluid img-logo"/>
      </Link>
      <p className="small text-muted">{i18n.t('footer.copyright')}</p>
    </div>
  </footer>
}

export default Footer