import React from 'react';
import PropTypes from 'prop-types';

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes = ''
}) => {
  const commonContent = (
    <>
      {label}
      {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
    </>
  );

  return href ? (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`btn btn-primary ${classes}`}
      aria-label={icon && !label ? icon : undefined}
    >
      {commonContent}
    </a>
  ) : (
    <button className={`btn btn-primary ${classes}`} aria-label={icon && !label ? icon : undefined}>
      {commonContent}
    </button>
  );
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
};

ButtonPrimary.defaultProps = {
  href: null,
  target: '_self',
  icon: null,
  classes: ''
};

const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes = ''
  }) => {
    const commonContent = (
      <>
        {label}
        {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
      </>
    );
  
    return href ? (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`btn btn-outline ${classes}`}
        aria-label={icon && !label ? icon : undefined}
      >
        {commonContent}
      </a>
    ) : (
      <button className={`btn btn-outline ${classes}`} aria-label={icon && !label ? icon : undefined}>
        {commonContent}
      </button>
    );
  };
  
  ButtonOutline.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
  };
  
  ButtonOutline.defaultProps = {
    href: null,
    target: '_self',
    icon: null,
    classes: ''
  };

export { ButtonPrimary,ButtonOutline };
