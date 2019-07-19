import React from 'react';
import './Message.css';
import firebaseDb from '../firebaseDb'

//https://codereview.stackexchange.com/questions/211175/how-to-set-state-of-multiple-properties-in-one-event-handler-react
class MessageBoard extends React.Component {
    constructor(props) {
        super(props)
        //給予input預設state的value值
        this.state = {
            name: '',
            email: '',
            title: '',
            message: '',
            date: '',
        }
        //設定此function的this為class的一部分
        this.changeName = this.changeState.bind(this, 'name');
        this.changeEmail = this.changeState.bind(this, 'email');
        this.changeTitle = this.changeState.bind(this, 'title');
        this.changeMessage = this.changeState.bind(this, 'message');
        this.sendSubmit = this.sendSubmit.bind(this);
    }
    //得到的值去觸發元件
    changeState(itemName, d) {
        this.setState({ [itemName]: d.target.value });
        console.log('state change' + JSON.stringify({ [itemName]: d.target.value }));
    }
    //建立submit的function
    sendSubmit(event) {
        console.log(`name: ${this.state.name}, email: ${this.state.email}, title: ${this.state.title}, message: ${this.state.message}`)
        console.log('state submit TEST')
        event.preventDefault();//防止submit送出整個網頁      
        const getDate = new Date();
        const data = {
            name: this.state.name,
            email: this.state.email,
            title: this.state.title,
            message: this.state.message,
            time: getDate
        }

        //把資料丟入資料庫
        firebaseDb.collection('contact')
            .add(data)
            .then(response => {
                alert('已送出message!!');
                //把標題清空
                this.setState({
                    name: '',
                    email: '',
                    title: '',
                    message: '',
                    time: '',
                })
            })
            .catch(err => {
                //送出消息提示
                alert('異常中，請稍後處理。');
                console.log(err)
            })

    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.sendSubmit}>
                    <div className="row">
                        <div className="col-sm-3">
                            <input id="name" type="text" className='textGroup' onChange={this.changeName} placeholder="請輸入名字" value={this.state.name} required />
                        </div>
                        <div className="col-sm-9">
                            <input id="email" type="text" className='textGroup' onChange={this.changeEmail} placeholder="請輸入Email" value={this.state.email} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <input id="title" type="text" className='textGroup' onChange={this.changeTitle} placeholder="請輸入標題" value={this.state.title} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <textarea id="message" type="text" className='msgGroup' onChange={this.changeMessage} placeholder="請輸入留言" value={this.state.message} required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <input type="submit" className='btnGroup' value="送出" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default MessageBoard;