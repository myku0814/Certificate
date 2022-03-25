Date.prototype.today = function() {
    return  {
        today: `${this.getFullYear()} 年 ${(this.getMonth()+1 < 10)? '0' : ''}${this.getMonth()+1} 月 ${(this.getDate() < 10)? '0' : ''}${this.getDate()} 日`,
        yy: this.getFullYear(),
        mm: (this.getMonth()+1 < 10)? `0${this.getMonth()+1}` : `${this.getMonth()+1}`,
        dd: (this.getDate() < 10)? `0${this.getDate()}` : `${this.getDate()}`
    };
        
};