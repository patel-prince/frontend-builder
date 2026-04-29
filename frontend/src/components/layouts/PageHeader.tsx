import { type ReactNode } from 'react'

import { Button, Flex, Typography } from 'antd'
import { ChevronLeft } from 'lucide-react'

type PageHeaderProps = {
  title: string
  description?: string
  actions?: ReactNode
  icon?: ReactNode
  onBack?: () => void
}

const PageHeader = ({ title, description, actions, icon, onBack }: PageHeaderProps) => {
  const headerIcon = icon ?? <ChevronLeft />

  return (
    <Flex className="border-bottom p-md" align="center" justify="space-between">
      <Flex gap="medium" align="center">
        {onBack ? <Button icon={headerIcon} type="text" onClick={onBack} /> : icon}
        <Flex vertical>
          <Typography.Title className="mt-none" level={3}>
            {title}
          </Typography.Title>
          {description ? <Typography.Text>{description}</Typography.Text> : null}
        </Flex>
      </Flex>
      {actions}
    </Flex>
  )
}

export default PageHeader
