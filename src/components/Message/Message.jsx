import React from 'react';
import firebaseDb from '../firebaseDb';


//https://codereview.stackexchange.com/questions/211175/how-to-set-state-of-multiple-properties-in-one-event-handler-react
class MessageBoard extends React.Component {
    constructor(props){
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
        console.log('state change'+JSON.stringify({[itemName]: d.target.value }) );
    }
    //建立submit的function
    sendSubmit(event) {
        console.log(`name: ${this.state.name}, email: ${this.state.email}, title: ${this.state.title}, message: ${this.state.message}`)
        console.log('state submit TEST')
        event.preventDefault();//防止submit送出整個網頁      
        const getDate = new Date();
    const data ={
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

    render(){
        return(
            <div className="container">
                <form onSubmit={this.sendSubmit}>
                <div className="row">
                    <div className="col-sm-3">  
                        <input id="name" type="text"style={inputStyle.textGroup} onChange={this.changeName} placeholder="請輸入名字" value={this.state.name} required/>
                    </div>
                    <div className="col-sm-9">
                        <input id="email" type="text" style={inputStyle.textGroup} onChange={this.changeEmail} placeholder="請輸入Email" value={this.state.email} required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <input id="title" type="text" style={inputStyle.textGroup} onChange={this.changeTitle} placeholder="請輸入標題" value={this.state.title} required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <textarea id="message" type="text" style={inputStyle.msgGroup} onChange={this.changeMessage} placeholder="請輸入留言" value={this.state.message} required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <input type="submit" style={inputStyle.btnGroup} value="送出"/>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

const inputStyle = {
    textGroup: {
        width: '100%',
        height: '2.5em',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        //backgroundImage: 'url(' + imgUrl + ')',
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    },
    msgGroup: {
        width: '100%',
        height: '300px',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        //backgroundImage: 'url(' + imgUrl + ')',
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    },
    btnGroup: {
        width: '200px',
        height: '60px',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        backgroundColor: 'gray',
        //backgroundImage: 'url(' + imgUrl + ')',
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    },
  };

/*
//建立元件的樣式表
const styles = StyleSheet.create({
    //標籤設定
    titleGroup:{
        color: 'black',
        fontSize: 40,
        textAlign: 'center',
    },
    //輸入群組樣式
    inputGroup: {
        width: '100%',
        borderBottomWidth: 1,
        //留白左右
        paddingHorizontal: 24,
        //留白上下
        paddingVertical: 24,

    },
    //輸入欄位樣式
    input: {
        width: '100%',
        borderWidth: 1,
        marginBottom: 8,
        borderColor: '#CCC',
    },
    //按鈕
    submitBtn: {
        backgroundColor: 'orange',
        paddingHorizontal: 12,
        paddingVertical: 12,

    },
    //按鈕文字
    submitBtnText: {
        color: 'blue',
        fontSize: 20,
        textAlign: 'center',
    }
})*/
export default MessageBoard;