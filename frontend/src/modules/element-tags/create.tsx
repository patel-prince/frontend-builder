import { Button, Form, Input, Layout, Space } from 'antd'
import { useNavigate } from 'react-router-dom'

import PageHeader from '../../components/layouts/PageHeader'

const CreateElementTag = () => {
  const navigate = useNavigate()
  return (
    <>
      <PageHeader
        title="Create Element Tag"
        description="Create a new element tag to organize your elements."
        hasBack
      />
      <Layout.Content className="p-md">
        <Form layout="vertical" requiredMark="optional" className="max-w-400">
          <Form.Item
            label="Display Name"
            name="display_name"
            rules={[{ required: true, message: 'Please enter the display name' }]}
          >
            <Input placeholder="Enter display name" />
          </Form.Item>
          <Form.Item
            label="Tag Name"
            name="tag_name"
            rules={[
              { required: true, message: 'Please enter the tag name' },
              {
                pattern: /^[a-zA-Z-]+$/,
                message: 'Tag name can only contain alphabets and hyphens',
              },
            ]}
          >
            <Input placeholder="Enter tag name" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea placeholder="Enter tag description" />
          </Form.Item>

          <Space>
            <Button htmlType="submit" type="primary" className="px-xl">
              Create Tag
            </Button>
            <Button htmlType="reset" onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </Space>
        </Form>
      </Layout.Content>
    </>
  )
}

export default CreateElementTag
