function sumFibs(num) {
	
	var count1 = 1;
	var count2 = 0;
	var temp = 0;
	var sum = 0;
	
	while (count1 <= num) {
		if (count1 % 2 !== 0) {
			sum += count1;
		}
		
		temp = count1;
		count1 += count2;
		count2 = temp;
	}
	
	return sum;
}

sumFibs(4);
