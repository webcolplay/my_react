import React, { PureComponent } from 'react'
import { Button } from 'antd'
import styles from './test.module.scss'

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <Button type="primary">Button</Button>
        <div className={styles.test}>123123123</div>
      </div>
    )
  }
}
