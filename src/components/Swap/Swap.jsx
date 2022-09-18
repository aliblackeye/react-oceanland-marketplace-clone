import { AiOutlineArrowDown } from 'react-icons/ai'
import { IoWalletOutline } from 'react-icons/io5'

import './swap.scss'
export default function Swap() {
    return (
        <div className="swap">
            <div className="swap-container container">
                <div className="swap-wrapper">
                    <h1 className="title">Swap</h1>
                    <form className="swap-form">
                        <span className="info-text">Trade tokens in an instant</span>
                        <div className="swap-input swap-from">
                            <input type="number" min={0}/>
                            <div className="dropdown">Select Token</div>
                        </div>
                        <AiOutlineArrowDown size={24} style={{ margin: "10px auto" }} />
                        <div className="swap-input swap-to">
                            <input type="number" min={0} />
                            <div className="dropdown">Select Token</div>
                        </div>
                        <div className="slippage">
                            <span className="slippage-text">Slippage Tolerance</span>
                            <span className="percent-text">% <span className="circle">0.5</span></span>
                        </div>
                        <div className="deadline">
                            <span className="deadline-text">Tx Deadline</span>
                            <span className="minute-text">minutes <span className="circle">20</span></span>
                        </div>

                        <button className="btn btn-primary btn-with-icon"><IoWalletOutline size={16} color='#fff' /> Connect Wallet</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
