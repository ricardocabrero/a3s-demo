
class IsExist {

	constructor(arr, name){
		this.arr = arr;
		this.name = name;
		this.newArr = [];
		this.newItem = {};
		this.newName = this.newName || null;
		this.newNum = this.newNum || null;
		this.index = this.index || null;
		this._init();
		return this.newArr;
	}

	_compareArr(){
		this.arr.forEach((el,i) => {
			if(el.name === this.name){
				this.newName = el.name;
				this.newNum = el.quantity;
                this.index = i;	
                this._createNewArr();			
            }
 		})
	}

	_createNewArr(){
		this.newItem.name = this.newName;
		this.newItem.quantity = (Number(this.newNum)+ 1).toString();
		this.arr[this.index] = this.newItem;
		this.newArr = this.arr;
	}

	_init(){
		this._compareArr();
	}

}

export default IsExist



