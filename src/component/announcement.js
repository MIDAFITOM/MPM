import React, { Component } from 'react';
import './announcement.css';

class Announcement extends Component {
    render() {
        return (
            <div className="box">
                <span className="content">
                    MIDAFI Staking 即將上線，敬請期待！<br /><br />
                    幣用群鏈接：
                    <a className="biyong" href="https://0.zailuo.cn/seromidafi">https://0.zailuo.cn/seromidafi</a>
                </span>
            </div>
        )
    }
}
export default Announcement;