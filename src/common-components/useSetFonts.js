import { useEffect } from 'react';

import { getLocale } from '@edx/frontend-platform/i18n';

const useSetFont = () => {
  const locale = getLocale();
  useEffect(() => {
    const setFont = () => {
      const body = document.querySelector('body');
      if (locale === 'fa') {
        body.className = 'lang_fa';
      } else if (locale === 'ar') {
        body.className = 'lang_ar';
      } else {
        body.removeAttribute('class');
      }
    };
    setFont();
  }, [locale]);
};

export default useSetFont;
