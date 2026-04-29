import { Layout, type LayoutProps } from 'antd'
import clsx from 'clsx'

const AppComponent: React.FC<LayoutProps> = (props) => {
  return <Layout className={clsx('app-container', props.className)} {...props} />
}

export default AppComponent
