import React from 'react';

class BlockMessage extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="title">關於我</div>
        <text style={{flex: 1, flexWrap: 'wrap'}}>
        畢業於成功大學地球科學系及研究所，已有5年工作經歷，2年半前因工作業務需要，開始接觸
        與所學專長不同領域的網頁開發技術，發現自己對網頁資訊領域這塊很有興趣，除了在台大系
        統資訊班進行研修外，也抽空在假日及空閒時間進行自學，磨練自己尋找答案及解決問題的能
        力。雖然離正式的資訊工程師仍有一大段距離，仍期許自己發揮所學知識及經驗應用於職場工
        作及專案開發上，並持續累積自身技術及成長發展，未來若有機會，也請多多指教！
        </text>
      </div>
    )
  }
}

export default BlockMessage
