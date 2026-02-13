Date.prototype.today = function(en=false) {
    return  {
        today: `${this.getFullYear()} ${en? '/': '年'} ${(this.getMonth()+1 < 10)? '0' : ''}${this.getMonth()+1} ${en? '/': '月'} ${(this.getDate() < 10)? '0' : ''}${this.getDate()} ${en? '': '日'}`,
        yy: this.getFullYear(),
        mm: (this.getMonth()+1 < 10)? `0${this.getMonth()+1}` : `${this.getMonth()+1}`,
        dd: (this.getDate() < 10)? `0${this.getDate()}` : `${this.getDate()}`
    };
        
};