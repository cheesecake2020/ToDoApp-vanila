'use strict'

const onClickAdd = () => {
    // inputの値を取得し初期化
    const inputText = document.getElementById("add-text").value;
    if (inputText === '') {
        confirm('ToDoが入力されていません')
    } else {   
        document.getElementById("add-text").value = "";
        createIncompleteList(inputText);
    }
}
const btn = document.getElementById("add-btn");
btn.addEventListener("click", () => onClickAdd());

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-ul").removeChild(target);
}
// リストに追加
const appdendChildList = (element, ul) => {
    document.getElementById(ul).appendChild(element);
}
// 未完了リストに追加する関数
const createIncompleteList = (text) => {
    // li生成
    const listRow = document.createElement("li");
    listRow.className = "list-row";

    // span生成
    const span = document.createElement("span");
    span.innerText = text;

    // button(完了)タグ生成
    const completeBtn = document.createElement('button');
    completeBtn.innerText = "完了";
    completeBtn.className = "mx-10";
    // button(削除)タグ生成
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "削除";

    completeBtn.addEventListener('click', () => {
        // 押された完了ボタンの親タグ（li）を未完了リストから削除
        deleteFromIncompleteList(completeBtn.parentNode);
        // 完了リストに追加する要素
        const addTarget = completeBtn.parentNode;
        // Todo内容テキストを取得
        const text = addTarget.firstElementChild.innerText;
        // li以下を初期化
        addTarget.textContent = null;
        // span生成
        const spin = document.createElement("span");
        spin.innerText = text;

        //  liの子要素に各要素を設定
        addTarget.appendChild(spin);
        addTarget.appendChild(backBtn);
        // 完了リストに追加
        appdendChildList(addTarget, "complete-ul");
    });

    deleteBtn.addEventListener('click', () => {
        // 押された削除ボタンの親タグ（li）を未完了リストから削除
        deleteFromIncompleteList(deleteBtn.parentNode);

    });
    //  liの子要素に各要素を設定
    listRow.appendChild(span);
    listRow.appendChild(completeBtn);
    listRow.appendChild(deleteBtn);

    // 未完了のリストに追加
    appdendChildList(listRow, "incomplete-ul");
}
// button(戻す)タグ生成
const backBtn = document.createElement('button');
backBtn.innerText = "戻す";
backBtn.className = "mx-10";
backBtn.addEventListener('click', () => {
    const deleteTarget = backBtn.parentNode;
    document.getElementById('complete-ul').removeChild(deleteTarget);
    // テキスト取得
    const text = backBtn.parentNode.firstElementChild.innerText;
    createIncompleteList(text);
});