import React from 'react';
import { BackButton } from './BackButton'

type BackButtonLayoutProps = {
  text: string
  onClick?: () => void
}

const BackButtonLayout = ({
  text,
  onClick = () => null,
}: BackButtonLayoutProps) => {
  return (
      <BackButton onClick={onClick}>{text}</BackButton>
    )
}

export default BackButtonLayout
