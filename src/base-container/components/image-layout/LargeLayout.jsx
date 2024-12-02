import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';

import './index.scss';
import messages from './messages';
import DefaultLogo from '../../../assets/NavLogo-placeholder.svg';
import useGetConfig from '../../../common-components/useGetConfig';

const LargeLayout = () => {
  const { formatMessage } = useIntl();
  const { headerLogo } = useGetConfig();
  return (
    <div
      className="w-50 bg-primary-500 banner__image large-layout"
      style={{ backgroundImage: `url(${getConfig().BANNER_IMAGE_LARGE})` }}
    >
      <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
        <Image className="company-logo position-absolute" alt={getConfig().SITE_NAME} src={headerLogo || DefaultLogo} />
      </Hyperlink>
      <div className="min-vh-100 p-5 d-flex align-items-end">
        <h1 className="display-2 mw-sm mb-3 d-flex flex-column flex-shrink-0 justify-content-center">
          <span className="text-light-500">
            {formatMessage(messages['your.career.turning.point'])}
          </span>
          <span className="text-warning-300">
            {formatMessage(messages['is.here'])}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default LargeLayout;
