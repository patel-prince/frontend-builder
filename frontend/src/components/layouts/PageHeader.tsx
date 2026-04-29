import { type ComponentType, type ReactNode } from 'react'

import { Button, Flex, Typography } from 'antd'
import { ChevronLeft, type LucideProps } from 'lucide-react'

type PageHeaderProps = {
  title: string
  description?: string
  actions?: ReactNode
  icon?: ComponentType<LucideProps>
  iconSize?: number
  onBack?: () => void
}

const PageHeader = ({ title, description, actions, icon, iconSize = 20, onBack }: PageHeaderProps) => {
  const HeaderIcon = icon ?? ChevronLeft
  const leadingIcon = onBack ? (
    <Button icon={<HeaderIcon size={iconSize} />} type="text" onClick={onBack} />
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
