class FakeAPIFakePromise {
    constructor(){
        /* Since you are already here, note that
         * if Webpack had stage-2 set,
         * this could be written much more comfortably
         * using za pomocą property initializers :)
         */
        this.data = [
            {
                day: '01-01-2016',
                balance: 0,
                change: 0
            },
            {
                day: '01-02-2016',
                balance: -2000,
                change: -2000
            },
            {
                day: '01-03-2016',
                balance: 6000,
                change: 8000
            },
            {
                day: '01-04-2016',
                balance: 3500,
                change: -2500
            },
            {
                day: '01-05-2016',
                balance: 25000,
                change: 21500
            },
            {
                day: '01-06-2016',
                balance: 38000,
                change: 16500
            },
            {
                day: '01-07-2016',
                balance: 17550,
                change: -20450
            },
            {
                day: '01-08-2016',
                balance: 16500,
                change: -1050
            },
            {
                day: '01-09-2016',
                balance: 16500,
                change: 0
            },
            {
                day: '01-10-2016',
                balance: 28000,
                change: 11500
            },
            {
                day: '01-11-2016',
                balance: 32000,
                change: 4000
            },
            {
                day: '01-12-2016',
                balance: 27500,
                change: -4500
            }
        ];

        this.then = ( clb ) => {
            setTimeout( () => {
                if (clb && typeof clb === 'function')
                    clb( this.data );
                else
                    console.error('Callback ( parametr do metody then() ) musi być poprawną funkcją, żeby otrzymać dane!')
            }, /* If you are interested what ~~ is, check: http://stackoverflow.com/questions/22277172/how-does-work-as-math-floor */~~(Math.random() * 2000 + 3000) /*3 - 5s.*/);
        };
    }
}

class FakeAPI {
    constructor() {
        this.load = () => {
            return new FakeAPIFakePromise();
        };
    }
}

const fakeAPI = new FakeAPI();

module.exports = fakeAPI;
