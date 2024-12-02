import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';
import DefaultLogo from '../../../assets/NavLogo-placeholder.svg';
import useGetConfig from '../../../common-components/useGetConfig';

const LargeLayout = () => {
  const { formatMessage } = useIntl();
  const { headerLogo, platformName } = useGetConfig();
  return (
    <div className="w-50 d-flex">
      <div className="col-md-9 bg-primary-400">
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
          <Image className="logo position-absolute" alt={getConfig().SITE_NAME} src={headerLogo || DefaultLogo} />
        </Hyperlink>
        <div className="min-vh-100 d-flex align-items-center">
          <div className={classNames({ 'large-yellow-line mr-n4.5': getConfig().SITE_NAME === 'edX' })} />
          <h1
            className={classNames(
              'display-2 text-white mw-xs',
              { 'ml-6': getConfig().SITE_NAME !== 'edX' },
            )}
          >
            {formatMessage(messages['start.learning'])}
            <div className="text-accent-a">
              {formatMessage(messages['with.site.name'], { siteName: platformName })}
            </div>
          </h1>
        </div>
      </div>
      <div className="col-md-3 bg-white p-0">
        <svg className="ml-n1 w-100 h-100 large-screen-svg-primary" preserveAspectRatio="xMaxYMin meet">
          <g transform="skewX(171.6)">
            <rect x="0" y="0" height="100%" width="100%" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default LargeLayout;
