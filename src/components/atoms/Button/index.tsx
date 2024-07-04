import React, { useMemo } from 'react'

import { useTranslation } from 'next-i18next';
import clsx from 'clsx'

import styles from './index.module.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  linkTo?: string
  buttonType?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
  const { t } = useTranslation();
  const { buttonType = 'primary', title, className, children, linkTo, ...rest } = props

  const component = useMemo(() => {
    let component = children
    if (typeof children === 'string' || title) {
      component = <span>{children || title}</span>
    }

    if (linkTo && typeof children === 'string') {
      return (
        <a href={linkTo} className={styles.link_tag}>
          {t(children)}
        </a>
      )
    }
    return component
  }, [linkTo, children, title])

  return (
    <button ref={ref} className={clsx(className, styles.button, styles[buttonType], { [styles.rounded]: props.rounded })} {...rest}>
      {component}
    </button>
  )
})

export default Button