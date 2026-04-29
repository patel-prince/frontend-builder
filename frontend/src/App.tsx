import { Button, Space, Typography } from 'antd'

const App = () => {
  return (
    <div className="app">
      <Space direction="vertical" size="middle" align="center">
        <Typography.Title level={1}>Welcome to the App!</Typography.Title>
        <Button type="primary">Ant Design is ready</Button>
      </Space>
    </div>
  )
}

export default App
