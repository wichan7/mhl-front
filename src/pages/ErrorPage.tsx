import React from 'react'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

const ErrorPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="없는 페이지입니다."
    extra={
      <Link to="/">
        <Button size="large" type="primary">
          홈으로
        </Button>
      </Link>
    }
  />
)

export default ErrorPage
