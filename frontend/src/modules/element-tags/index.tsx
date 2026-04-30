import { Button } from 'antd'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom'

import PageHeader from '../../components/layouts/PageHeader'

const ElementTags = () => {
  return (
    <PageHeader
      title="Element Tags"
      description="List of all element tags in the system. You can create, edit, and delete tags to organize your elements."
      actions={
        <Link to="create">
          <Button type="primary" icon={<Plus />}>
            Create
          </Button>
        </Link>
      }
    />
  )
}

export default ElementTags
