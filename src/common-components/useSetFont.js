/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { getLocale } from '@edx/frontend-platform/i18n';

const useSetFont = () => {
  useEffect(() => {
    const locale = getLocale();
    const setFont = () => {
      const body = document.querySelector('body');
      if (locale === 'fa-ir') {
        body.className = 'lang_fa';
      } else if (locale === 'ar') {
        body.className = 'lang_ar';
      } else {
        body.removeAttribute('class');
      }
    };
    setFont();
  }, [getLocale()]);
};

export default useSetFont;
