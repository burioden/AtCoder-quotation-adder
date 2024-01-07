// ==UserScript==
// @name         AtCoder quotation adder
// @namespace    https://github.com/burioden
// @version      1.0
// @description  AtCoderの問題文中の文字列に""をつけてくれます。要素の中身が数値のみのときは""をつけません。
// @author       burioden
// @match        https://atcoder.jp/contests/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atcoder.jp
// @grant        none
// @updateURL    https://github.com/burioden/AtCoder-quotation-adder/raw/main/script.user.js
// @downloadURL  https://github.com/burioden/AtCoder-quotation-adder/raw/main/script.user.js
// @supportURL   https://github.com/burioden/AtCoder-quotation-adder/
// ==/UserScript==

(function() {
    'use strict';

    // 問題内の<code>要素を取得
    const codes = document.querySelectorAll('#task-statement .part code');

    // 文字列かつ数値ではないか判定
    function isStrAndNotNum(val) {
        const flg = typeof val === 'string' && val.trim() !== '' && isNaN(val);
        return flg;
    }

    // 文字列のみダブルクォーテーションで囲む
    codes.forEach(function(elm) {
        const text = elm.textContent;

        if (isStrAndNotNum(text)) {
            elm.textContent = '"' + text + '"';
        }
    });

})();