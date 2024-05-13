import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';

import DefaultLogo from '../assets/NavLogo-placeholder.svg';
import useGetConfig from '../data/useGetConfig';
import messages from './messages';

const SmallLayout = () => {
  const { formatMessage } = useIntl();
  const { headerLogo } = useGetConfig();

  return (
    <span className="bg-primary-400 w-100">
      <div className="col-md-12 small-screen-top-stripe" />
      <div>
        <Hyperlink destination={getConfig().HOME_PAGE}>
          <Image className="logo-small" alt={getConfig().SITE_NAME} src={headerLogo || DefaultLogo} />
        </Hyperlink>
        <div className="d-flex align-items-center m-3.5">
          <div className={classNames({ 'small-yellow-line mr-n2.5': getConfig().SITE_NAME === 'edX' })} />
          <h1
            className={classNames(
              'text-white mt-3.5 mb-3.5',
            )}
          >
            <span>
              {formatMessage(messages['start.learning'])}{' '}
              <span className="text-accent-a d-inline-block">
                {formatMessage(messages['with.site.name'], { siteName: getConfig().SITE_NAME })}
              </span>
            </span>
          </h1>
        </div>
      </div>
    </span>
  );
};

export default SmallLayout;
