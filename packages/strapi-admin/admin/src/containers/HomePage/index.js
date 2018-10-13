/*
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import cn from 'classnames';

import { selectPlugins } from 'containers/App/selectors';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';


import { onChange, submit } from './actions';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles.scss';

export class HomePage extends React.PureComponent {

  renderButton = () => {

    return ;
  };

  render() {
    return (
      <div className={cn('container-fluid', styles.containerFluid)}>
        <Helmet title="Home Page" />
        <div className="row">
          <div className="col-md-8 col-lg-8">
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  plugins: selectPlugins(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getArticles,
      onChange,
      submit,
    },
    dispatch,
  );
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

// export default connect(mapDispatchToProps)(HomePage);
export default compose(withReducer, withSaga, withConnect)(HomePage);
