import { Card } from 'antd'
import './index.css'

const GamePage = () => {
  return (
    <>
      <div className="panel">
        <span className="score-wrapper">
          <div>현재 점수</div>
          <div>50점</div>
        </span>
        <div className="card-wrapper">
          <Card
            style={{
              width: '70%',
              backgroundColor: '#fff',
              borderRadius: '20px',
              padding: 40,
            }}
            hoverable
            cover={
              <div>
                <img
                  style={{ width: '100%' }}
                  alt="character-left"
                  src="https://open.api.nexon.com/static/maplestory/Character/GPHHOHCJJGGPEPMFIGEIIADFPICLJEJFOEELBLNEMLCNHMCCHAIDCLAMKMPODIOMOKKHINGAFLJDBJDLANNCHDBDIHNGBIKLFKNHNIMKFCHNOOKFHMHIKFGEJOBJILJPBGPCDLGECDBHHMBLMNLJKMPIECNFEFJPLNIIDPOMKGEFDPNDPJDDAEEFLHABGDFCDKEPHDNKDCFEBHPGCOLAHNPPJDINMOJIJFCNIIECLEBAPADAANEGGMFFKHPFAFOA.png"
                />
              </div>
            }
          >
            <div className="description">
              <div>윈브**요</div>
              <div style={{ color: '#6f6f6f' }}>윈드브레이커</div>
            </div>
          </Card>
        </div>
        <span className="versus">VS</span>
        <span className="versus-line" />
        <div className="card-wrapper">
          <Card
            style={{
              width: '70%',
              backgroundColor: '#fff',
              borderRadius: '20px',
              padding: 40,
            }}
            hoverable
            cover={
              <div>
                <img
                  style={{ width: '100%' }}
                  alt="character-left"
                  src="https://open.api.nexon.com/static/maplestory/Character/GKBENPDMIEFFKEGKAGDDNACLBBPBLIJGJBPANGNBBHDBLFMMIANBPDDIJKHKALNLBGEDFFNLFOJBAMGPBIMGJEMNAEFBLPGGGONKKOAMEOHCKDDDKDKLCEOHOIIODJMCOJDEPGJLKCJKNFJHLIIFDNLMFOGNNAADHECCGFMOFDINEGBBKLAJHKMLMLMFFJENMKCAENPHFOBMFJBOEBFIJEEFGGOHFJCJBNLAANIPGLEGDKBGBGNELDADCDNFAMHP.png"
                />
              </div>
            }
          >
            <div className="description">
              <div>윈브**요</div>
              <div style={{ color: '#6f6f6f' }}>윈드브레이커</div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default GamePage
