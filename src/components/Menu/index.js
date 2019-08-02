import { Menu, Icon } from 'antd'
import React from 'react'
import { withRouter } from 'react-router-dom'

const { SubMenu } = Menu

class Sider extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

  state = {
    openKeys: ['sub1']
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }

  onClick = ({ item, key, keyPath, domEvent }) => {
    console.log(process.env)
    this.props.history.push('/page')
  }

  onSelect = ({ item, key, keyPath, domEvent }) => {
    // console.log(item)
    // console.log(key)
    // console.log(keyPath)
    // console.log(domEvent)
  }

  render() {
    let aa = this.props.history
    return (
      <div>
        <div>{this.props.history.location.pathname}</div>
        <Menu
          mode="inline"
          selectedKeys={[this.props.history.location.pathname]}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          onClick={this.onClick}
          onSelect={this.onSelect}
          style={{ width: 256 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="/">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="/page">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>Navigation Three</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default withRouter(Sider)
