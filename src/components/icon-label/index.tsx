import * as S from './styles'

type IconLabelProps = {
  icon?: React.ReactElement
  label?: string
}

export function IconLabel({ label, icon }: IconLabelProps) {
  return (
    <S.IconLabelContainer>
      {icon}
      <span>{label}</span>
    </S.IconLabelContainer>
  )
}
