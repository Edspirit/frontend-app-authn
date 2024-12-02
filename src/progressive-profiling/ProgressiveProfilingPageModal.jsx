import React from 'react';

import { useIntl } from '@edx/frontend-platform/i18n';
import { ActionRow, Button, ModalDialog } from '@openedx/paragon';
import PropTypes from 'prop-types';

import messages from './messages';
import useGetConfig from '../common-components/useGetConfig';

const ProgressiveProfilingPageModal = (props) => {
  const { formatMessage } = useIntl();
  const { isOpen, redirectUrl } = props;
  const { platformName } = useGetConfig();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = redirectUrl;
  };

  return (
    <ModalDialog
      title={formatMessage(messages['modal.title'])}
      isOpen={isOpen}
      onClose={() => {}}
      size="sm"
      variant="default"
      hasCloseButton={false}
    >
      <ModalDialog.Header>
        <ModalDialog.Title>
          {formatMessage(messages['modal.title'])}
        </ModalDialog.Title>
      </ModalDialog.Header>

      <ModalDialog.Body>
        {formatMessage(messages['modal.description'])}
      </ModalDialog.Body>

      <ModalDialog.Footer>
        <ActionRow>
          <Button onClick={handleSubmit} variant="primary">
            {formatMessage(messages['continue.to.platform'], { platformName })}
          </Button>
        </ActionRow>
      </ModalDialog.Footer>
    </ModalDialog>
  );
};

ProgressiveProfilingPageModal.propTypes = {
  isOpen: PropTypes.bool,
  redirectUrl: PropTypes.string.isRequired,
};

ProgressiveProfilingPageModal.defaultProps = {
  isOpen: false,
};

export default ProgressiveProfilingPageModal;
