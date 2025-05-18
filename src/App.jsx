import  './App.css'

function App() {
  return (
     <div className='main'>
         <div className="box">
            <h2>Hamster Kombat</h2>
            <div className="header">
              <div className="header-box">
                <h3>Earn per tap</h3>
                <img src="./coin.png" alt="coin" /> <span>+12</span>
              </div>
              <div className="header-box">
                <h3>Coins to level</h3>
                <img src="./coin.png" alt="coin" /> <span>+12</span>
              </div>
              <div className="header-box">
                <h3>Profit per hour</h3>
                <img src="./coin.png" alt="coin" /> <span>+1</span>
              </div>
            </div>
            <div className="hamster-main">
              <h1><img src="./coin2.png" alt="" />507, 981</h1>
              <button className='hamster-btn'>
                <img src="./hamster.png" alt="" />
              </button>
              <div className="boost">
                <h3><img src="./Vector.png" alt="" />6500 / 6500</h3>
                <h4>Boost</h4>
              </div>
            </div>

            <div className="hamster-footer">
              <div className="footer-menu">
                <img src="./Union.png" alt="" />
                <p>Exchange</p>
              </div>
              <div className="footer-menu">
                <i class="fa-solid fa-gavel"></i>
                <p>Mine</p>
              </div>
              <div className="footer-menu">
                <i class="fa-solid fa-users"></i>
                <p>Friends</p>
              </div>
              <div className="footer-menu">
                <i class="fa-solid fa-coins"></i>
                <p>Earn</p>
              </div>
              <div className="footer-menu">
                <img src="./airdrop.png" alt="" />
                <p>Airdrop</p>
              </div>
            </div>

         </div>
     </div>
  )
}

export default App;
