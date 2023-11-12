let Graph1=document.getElementById('Graph1');
 
let trace1 ={};
trace1.mode ="lines+markers";
trace1.type ="scatter";
trace1.name ="109年各月桃園市外籍移工總人數";
trace1.marker={
    size:10
};
trace1.x =[];
trace1.y =[];
trace1.text =[];

let trace2={};
trace2.mode ="lines+markers";
trace2.type ="scatter";
trace2.name ="110年各月桃園市外籍移工總人數";
trace2.marker={
    size:10
};
trace2.x =[];
trace2.y =[];
trace2.text =[];

let trace3 ={};
trace3.mode ="lines+markers";
trace3.type ="scatter";
trace3.name ="111年各月桃園市外籍移工總人數";
trace3.marker={
    size:10
};
trace3.x =[];
trace3.y =[];
trace3.text =[];


for(let i=0;i<set1.length;i++){
    trace1.x[i] =set1[i]['month'];
    trace1.y[i] =set1[i]['count'];
}

for(let i=0;i<set2.length;i++){
    trace2.x[i] =set2[i]['month'];
    trace2.y[i] =set2[i]['count'];
}

for(let i=0;i<set3.length;i++){
    trace3.x[i] =set3[i]['month'];
    trace3.y[i] =set3[i]['count'];
}

let data1 =[];
data1.push(trace1);
data1.push(trace2);
data1.push(trace3);

let layout1 ={
    margin:{
        t:50
    },
    xaxis:{
        range:[-0.9,12.9]
    },
    yaxis:{
        range:[110000,130000]
    },
    title:"桃園市109至111年各月外籍移工總人數折線圖"
};

Plotly.newPlot(Graph1, data1, layout1);