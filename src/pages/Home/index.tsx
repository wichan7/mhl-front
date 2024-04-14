import { Button } from 'antd'
import { Link } from 'react-router-dom'
import './index.css'

const HomePage = () => {
  return (
    <div className="panel">
      <Link to="/game">
        <Button type="primary" size="large">
          게임 시작
        </Button>
        ksh
      </Link>
    </div>
  )
}

export default HomePage
