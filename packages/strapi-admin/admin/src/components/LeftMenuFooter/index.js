/**
*
* LeftMenuFooter
*
*/

import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { PropTypes } from 'prop-types';

import styles from './styles.scss';
import messages from './messages.json';
defineMessages(messages);

function LeftMenuFooter() { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className={styles.leftMenuFooter}>
      <div>
        <FormattedMessage {...messages.poweredBy} />
        <a href="https://www.matsontechnologies.com" target="_blank">Matson Technologies</a>
      </div>
    </div>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
