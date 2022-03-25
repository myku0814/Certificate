## Remove all child

[Remove all child有兩種方法，一種是直接清空，如下。另一種是用while去去掉first or last child](https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript)

```javascript
HTMLElement.innerHTML = '';
```

### input listener

- 建議都用input event，change event有些情況不會觸發。
- input/text只需知道值從`this.value`拿就好，這邊的`this`是觸發事件的`<input>`，因此也可以認id之類的。
- input/file則要檢查`this.file`，原則上只會有一個，也就是`this.file[0]`。如果是照片的話，可以用`URL.createObjectURL(<blob file>)`來創造url給`<img>`的`src`。且在`onload`時可以用`URL.revokeObjectURL(<blobURL>)`來release掉memory。
- input/date則得到類字串，似乎沒什麼問題。可以在html加上`max`之類的來限制日期。

[listen to form submit event](https://stackoverflow.com/questions/7410063/how-can-i-listen-to-the-form-submit-event-in-javascript)
- form遞交要聽submit event，切記是監聽form才對，不是監聽按鈕，此外記得`evt.preventDefault()`防止重新導向等泡沫傳遞。

```javascript
HTMLEle.addEventListener('input', function(evt) {
        if(
            this.id === 'passwd' ||
            this.id === 'name'   ||
            this.id === 'a'      ||
            this.id === 'b'      ||
            this.id === 'c'      ||
            this.id === 'd'      ||
            this.id === 'e'      ||
            this.id === 'f'      ||
            this.id === 'g'      ||
            this.id === 'h'      ||
            this.id === 'i'      ||
            this.id === 'j'      ||
            this.id === 'k'      ||
            this.id === 'l'      ||
            this.id === 'm'      ||
            this.id === 'n'      ||
            this.id === 'o'      ||
            this.id === 'p'    
        ) {
            self[this.id] = this.value;
        } else console.log(`Cannot figure out input/text of ${this.id}.`);
    });
```

```javascript
HTMLEle.addEventListener('input', function(evt) {
    if (this.files && this.files[0]) {
        if(
            this.id === 'selfie'      ||
            this.id === 'heartRate'   ||
            this.id === 'breatheRate'
        ) {
            self.refreshCertificate() // avoid intent print
            self[this.id] = URL.createObjectURL(this.files[0]);
            const pic = document.querySelector(`#${this.id} + img`);
            const blobURL = self[this.id]; // set src to blob url
            pic.src = blobURL;
            // pic.onload = () => URL.revokeObjectURL(blobURL); // no longer needed, free memory
        } else console.log(`Cannot figure out input/file of ${this.id}.`);
    }
});
```

## print相關

[print相關](https://medium.com/unalai/%E5%8E%9F%E4%BE%86%E5%89%8D%E7%AB%AF%E7%B6%B2%E9%A0%81%E5%88%97%E5%8D%B0-%E4%B8%8D%E6%98%AF%E5%8F%AA%E8%A6%81-window-print-%E5%B0%B1%E5%A5%BD%E4%BA%86-7af44cacf43e)

- 設定紙張與頁面。
```css
@page {
  size: A4 portrait;
  margin-top: 3cm;
}
```

- 自己控制顏色。
```css
@media print {
  * {
    -webkit-print-color-adjust: exact !important;
  }
}
```

- 預防列印時被中間切斷。
```css
.noBreak {
    break-inside: avoid;
}
```

- 影印時不見。
```css
@media print { 
    display: none; 
}
```
