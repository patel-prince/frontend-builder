import { Button } from 'antd'
import { Tags } from 'lucide-react'

import PageHeader from '../../components/layouts/PageHeader'

const CatagoryManagement = () => {
  return (
    <PageHeader
      title="Component Library Categories"
      description="Organize reusable components into groups like Layout, Data Entry, and Display."
      icon={<Tags />}
      actions={<Button type="primary">Create Category</Button>}
    />
  )
}

export default CatagoryManagement
