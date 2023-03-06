const scloudjs = require("scloudjs"); //scloudjsをモジュールとして使えるようにする
let clouddatas = new Object();//このオブジェクトにクラウド変数のデータが入る

const main = (data) => {//メッセージを受け取ったときにどんな処理をするかを設定する
    const temp = scloudjs.parsedata(data, clouddatas);//受け取ったメッセージを整理する
    clouddatas = temp.clouddatas;//クラウド変数のデータ
    const changedlists = temp.changedlists;//変更された変数一覧
    // scloudjs.sendtocloud("HOST", 19);//変数HOSTを19にする

    scloudjs.sendtocloud("sys", clouddatas.d["value" + 1]);

    // console.log(clouddatas);
    // console.log(changedlists);
};

scloudjs.setdatas(process.env.username, process.env.password, "814084257", main);//いろいろデータを設定する

const func = async () => {//実行

    await scloudjs.login();//scratchにログイン
    await scloudjs.connect();//scratchのクラウド変数サーバーに接続
    await scloudjs.handshake();//プロジェクトに接続
};
func();
