import React from 'react';

class BlockMessage extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="title">關於我</div>
        <text style={{flex: 1, flexWrap: 'wrap'}}>
        這是一篇測試的message. 這是一篇測試的message. 這是一篇測試的message. 這是一篇測試的message.
        這是一篇測試的message. 這是一篇測試的message. 這是一篇測試的message. 這是一篇測試的message.
        這是一篇測試的message. 這是一篇測試的message. 這是一篇測試的message. 這是一篇測試的message.<br/>
        請多指教！
        </text>
      </div>
    )
  }
}

export default BlockMessage
