function TotalProducts(arr){
	var total = null;
	arr.map(el => total += Number(el.quantity))
	return total
}

export default TotalProducts
