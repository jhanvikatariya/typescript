
// Rest Parameters
function addNums(...nums:number[]){
    var i;
    var Addition:number=0;

    for(i=0; i<nums.length; i++){
        Addition=Addition + nums[i];
    }
    console.log("Sum of the numbers", Addition)
    }
    addNums(1, 2, 3, 4, 5)