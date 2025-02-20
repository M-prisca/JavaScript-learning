const sumByCategory=(arr)=>{
    const result ={};
    for (const{category,value} of arr){
        result[category]=(result[category] || 0) + value;
    }
    return result;
};
const data=[
    {category: 'A', value: 10},
    {category: 'B', value: 20},
    {category: 'A', value: 30},
    {category: 'C', value: 40},
    {category: 'B', value: 25}
];
const aggregated = sumByCategory(data);
console.log(aggregated);