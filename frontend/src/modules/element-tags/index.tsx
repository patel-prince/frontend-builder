import { Button } from 'antd'
import { Plus, Tags } from 'lucide-react'

import PageHeader from '../../components/layouts/PageHeader'

const ElementTags = () => {
  return (
    <PageHeader
      title="Element Tags"
      description="List of all element tags in the system. You can create, edit, and delete tags to organize your elements."
      icon={<Tags />}
      actions={
        <Button type="primary" icon={<Plus />}>
          Create
        </Button>
      }
    />
  )
}

export default ElementTags
