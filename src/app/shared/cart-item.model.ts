class CartItem {

    constructor(
        public id: number,
        public img: object,
        public title: string,
        public description: string,
        public price: number,
        public amount: number        
    ) { }
   
}

export { CartItem }