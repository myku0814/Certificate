/**
 * @param  {string}          tagName   tag name
 * @param  {string|string[]} classList class list
 * @param  {string}          innerHtml innerHTML
 * @param  {JsonObject}      attrs     attr-*
 * @return {HTMLElement}
 */
const simpleCreateHTML = (tagName, classList, innerHTML, attrs) => {
    const check = x => x!==void(0) && x!==null;

    if(!check(tagName)) throw Error('No tag name...');

    const node = document.createElement(tagName);

    if(check(classList)) node.classList.add(...classList);
    
    if(check(innerHTML)) node.innerHTML = innerHTML;
    
    if(check(attrs)) Object.keys(attrs).forEach(attr => node.setAttribute(attr, attrs[attr]));
    
    return node;
};

class Controller {
    constructor() {
        this.passwd = '';

        this.today = null;

        this.name = '';
        
        this.bday = '';

        this.selfie = null;
        this.heartRate = null;
        this.breatheRate = null;

        this.a = '';
        this.b = '';
        this.c = '';
        this.d = '';
        this.e = '';
        this.f = '';
        this.g = '';
        this.h = '';
        this.i = '';
        this.j = '';
        this.k = '';
        this.l = '';
        this.m = '';
        this.n = '';
        this.o = '';
        this.p = '';
    }
    init(mainNode, secondNode) {
        const self = this;
        mainNode.classList.add('main');
        secondNode.classList.add('second');

        this.refreshCertificate();

        this.createListener();

         
    }
    createListener() {
        const self = this;

        document.querySelectorAll('input[type="text"]').forEach(HTMLEle => {
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
        });

        document.querySelectorAll('input[type="file"]').forEach(HTMLEle => {
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
        });

        document.querySelectorAll('input[type="date"]').forEach(HTMLEle => {
            HTMLEle.addEventListener('input', function(evt) {
                switch(this.id) {
                    case 'bday': {
                        self.bday = this.value.replace(/-/g, '/');
                        break;
                    }
                    
                default:
                    console.log(`Cannot figure out input/date of ${this.id}.`);
                }
                    
                
            });
        });

        document.getElementById('genCert').addEventListener('submit', function(evt) {
            /* refresh */
            self.refreshCertificate();
            evt.preventDefault();


            self.today = new Date().today();
            
            /* page 1 */
            const certificate1 = document.getElementById('certificate1');
            certificate1.appendChild(simpleCreateHTML('div', ['certificate__name--1'], self.name));


            const today = simpleCreateHTML('div', ['certificate__date']);
            today.appendChild(simpleCreateHTML('div', ['certificate__date--yy'], self.today.yy));
            today.appendChild(simpleCreateHTML('div', ['certificate__date--mm'], self.today.mm));
            today.appendChild(simpleCreateHTML('div', ['certificate__date--dd'], self.today.dd));
            certificate1.appendChild(today);

            /* page 2 */
            const certificate2 = document.getElementById('certificate2');
            certificate2.appendChild(simpleCreateHTML('div', ['certificate__name--2'], self.name));
            certificate2.appendChild(simpleCreateHTML('div', ['certificate__date--bday'], self.bday));
            certificate2.appendChild(simpleCreateHTML('div', ['certificate__date--today'], `${self.today.yy}/${self.today.mm}/${self.today.dd}`));

            const selfie = simpleCreateHTML('img', ['certificate__selfie']);
            selfie.src = self.selfie;
            certificate2.appendChild(selfie);

            const heartRate = simpleCreateHTML('img', ['certificate__heartRate']);
            heartRate.src = self.heartRate;
            certificate2.appendChild(heartRate);

            const breatheRate = simpleCreateHTML('img', ['certificate__breatheRate']);
            breatheRate.src = self.breatheRate;
            certificate2.appendChild(breatheRate);

            const table = simpleCreateHTML('table', ['certificate__table']);

            const tr_ab = simpleCreateHTML('tr', ['certificate__table--r']);
            const tr_cd = simpleCreateHTML('tr', ['certificate__table--r']);
            const tr_ef = simpleCreateHTML('tr', ['certificate__table--r']);
            const tr_gh = simpleCreateHTML('tr', ['certificate__table--r']);
            const tr_ij = simpleCreateHTML('tr', ['certificate__table--r']);
            const tr_kl = simpleCreateHTML('tr', ['certificate__table--r']);
            const tr_mn = simpleCreateHTML('tr', ['certificate__table--r']);
            const tr_op = simpleCreateHTML('tr', ['certificate__table--r']);

            const td_a = simpleCreateHTML('td', ['certificate__table--d'], self.a);
            const td_b = simpleCreateHTML('td', ['certificate__table--d'], self.b);
            const td_c = simpleCreateHTML('td', ['certificate__table--d'], self.c);
            const td_d = simpleCreateHTML('td', ['certificate__table--d'], self.d);
            const td_e = simpleCreateHTML('td', ['certificate__table--d'], self.e);
            const td_f = simpleCreateHTML('td', ['certificate__table--d'], self.f);
            const td_g = simpleCreateHTML('td', ['certificate__table--d'], self.g);
            const td_h = simpleCreateHTML('td', ['certificate__table--d'], self.h);
            const td_i = simpleCreateHTML('td', ['certificate__table--d'], self.i);
            const td_j = simpleCreateHTML('td', ['certificate__table--d'], self.j);
            const td_k = simpleCreateHTML('td', ['certificate__table--d'], self.k);
            const td_l = simpleCreateHTML('td', ['certificate__table--d'], self.l);
            const td_m = simpleCreateHTML('td', ['certificate__table--d'], self.m);
            const td_n = simpleCreateHTML('td', ['certificate__table--d'], self.n);
            const td_o = simpleCreateHTML('td', ['certificate__table--d'], self.o);
            const td_p = simpleCreateHTML('td', ['certificate__table--d'], self.p);

            tr_ab.appendChild(td_a);
            tr_ab.appendChild(td_b);
            tr_cd.appendChild(td_c);
            tr_cd.appendChild(td_d);
            tr_ef.appendChild(td_e);
            tr_ef.appendChild(td_f);
            tr_gh.appendChild(td_g);
            tr_gh.appendChild(td_h);
            tr_ij.appendChild(td_i);
            tr_ij.appendChild(td_j);
            tr_kl.appendChild(td_k);
            tr_kl.appendChild(td_l);
            tr_mn.appendChild(td_m);
            tr_mn.appendChild(td_n);
            tr_op.appendChild(td_o);
            tr_op.appendChild(td_p);

            table.appendChild(tr_ab);
            table.appendChild(tr_cd);
            table.appendChild(tr_ef);
            table.appendChild(tr_gh);
            table.appendChild(tr_ij);
            table.appendChild(tr_kl);
            table.appendChild(tr_mn);
            table.appendChild(tr_op);

            certificate2.appendChild(table);



            if(self.passwd === 'yutech') {
                window.print();
            } else {
                self.refreshCertificate();
                alert('密碼錯誤!!!');
            }
            
        });
    }


    createCertificate(pages) {
        return pages.map(page => {
            const certificate = simpleCreateHTML('section', ['certificate']);
            certificate.id = `certificate${page}`;
    
            const certificateImageBg = simpleCreateHTML('img', ['certificate__image--bg']);
            certificateImageBg.src=`./img/pg${page}.jpg`;
            certificateImageBg.alt=`Certificate${page}`;
    
            certificate.appendChild(certificateImageBg);
            return certificate; // aware of return certificate.appendChild(certificateImageBg); will error
        });
        

       
    }
    refreshCertificate() {
        const secondNode = document.getElementById('second');
        secondNode.innerHTML = '';

        this.createCertificate([1, 2]).forEach(page => secondNode.appendChild(page));

    }
}


const controller = new Controller();
controller.init(
    document.getElementById('main'), 
    document.getElementById('second'), 
);























Date.prototype.today = function() {
    return {
        yy: this.getFullYear(),
        mm: (this.getMonth()+1 < 10)? `0${this.getMonth()+1}` : `${this.getMonth()+1}`,
        dd: (this.getDate() < 10)? `0${this.getDate()}` : `${this.getDate()}`
    };
};

