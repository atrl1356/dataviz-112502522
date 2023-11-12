let Graph3=document.getElementById('Graph3');
let trace_10 ={};
trace_10.type ="pie";
trace_10.title="109年度"
trace_10.labels =[];
trace_10.values =[];
trace_10.hole=0.4;
trace_10.domain ={
    row:0,
    column:0
};

for(let x=0; x<population_109.length; x++){
    trace_10.labels[x] =population_109[x]['name'];
    trace_10.values[x] =population_109[x]['count'];
}

let trace_11 ={};
trace_11.type ="pie";
trace_11.title="110年度";
trace_11.labels =[];
trace_11.values =[];
trace_11.hole=0.4;
trace_11.domain ={
    row:0,
    column:1
};

for(let x=0; x<population_110.length; x++){
    trace_11.labels[x] =population_110[x]['name'];
    trace_11.values[x] =population_110[x]['count'];
}

let trace_12 ={};
trace_12.type ="pie";
trace_12.title="111年度";
trace_12.labels =[];
trace_12.values =[];
trace_12.hole=0.4;
trace_12.domain ={
    row:0,
    column:2
};

for(let x=0; x<population_111.length; x++){
    trace_12.labels[x] =population_111[x]['name'];
    trace_12.values[x] =population_111[x]['count'];
}

let data3 =[];
data3.push(trace_10);
data3.push(trace_11);
data3.push(trace_12);

let layout3 ={
    margin:{
        t:50
    },
    grid:{
        rows:1,
        columns:3
    },
    title:"桃園市109至111年各國在台外籍移工圓餅圖"
};

Plotly.newPlot(Graph3, data3, layout3);