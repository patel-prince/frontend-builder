import { type ComponentType, type ReactNode } from 'react'

import { Button, Flex, Typography } from 'antd'
import { ChevronLeft, type LucideProps } from 'lucide-react'
import { Link } from 'react-router-dom'

type PageHeaderProps = {
  title: string
  description?: string
  actions?: ReactNode
  icon?: ComponentType<LucideProps>
  iconSize?: number
  onBack?: () => void
  hasBack?: boolean
}

const PageHeader = ({
  title,
  description,
  actions,
  icon,
  iconSize = 24,
  onBack,
  hasBack,
}: PageHeaderProps) => {
  const HeaderIcon = icon ?? ChevronLeft
  const leadingIcon =
    onBack || hasBack ? (
      <Link to={'..'}>
        <Button type='text' icon={<HeaderIcon size={iconSize} />} onClick={onBack} />
      </Link>
    ) : icon ? (
      <HeaderIcon size={iconSize} />
    ) : null

  return (
    <Flex className="border-bottom px-md py-sm" align="center" justify="space-between">
      <Flex gap="medium" align="center">
        {leadingIcon}
        <Flex vertical gap={4}>
          <Typography.Title level={4}>{title}</Typography.Title>
          {description ? <Typography.Text type="secondary">{description}</Typography.Text> : null}
        </Flex>
      </Flex>
      {actions}
    </Flex>
  )
}

export default PageHeader
