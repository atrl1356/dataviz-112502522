let Graph2=document.getElementById('Graph2');

let trace4 ={};
trace4.type ="bar";
trace4.name ="109產業移工";
trace4.x=[];
trace4.y=[];
trace4.x[0]="印尼";
trace4.y[0]=Indonesia_109[0]['count'];
trace4.x[1]="菲律賓";
trace4.y[1]=Philippines_109[0]['count'];
trace4.x[2]="泰國";
trace4.y[2]=Thailand_109[0]['count'];
trace4.x[3]="越南";
trace4.y[3]=Vietnam_109[0]['count'];
trace4.barmode='stack'
trace4.xaxis='x1'

let trace5 ={};
trace5.type ="bar";
trace5.name ="109社福移工";
trace5.x=[];
trace5.y=[];
trace5.x[0]="印尼";
trace5.y[0]=Indonesia_109[1]['count'];
trace5.x[1]="菲律賓";
trace5.y[1]=Philippines_109[1]['count'];
trace5.x[2]="泰國";
trace5.y[2]=Thailand_109[1]['count'];
trace5.x[3]="越南";
trace5.y[3]=Vietnam_109[1]['count'];
trace5.xaxis='x1'

let trace6 ={};
trace6.type ="bar";
trace6.name ="110產業移工";
trace6.x=[];
trace6.y=[];
trace6.x[0]="印尼";
trace6.y[0]=Indonesia_110[0]['count'];
trace6.x[1]="菲律賓";
trace6.y[1]=Philippines_110[0]['count'];
trace6.x[2]="泰國";
trace6.y[2]=Thailand_110[0]['count'];
trace6.x[3]="越南";
trace6.y[3]=Vietnam_110[0]['count'];
trace6.barmode='stack'
trace6.xaxis='x2'

let trace7 ={};
trace7.type ="bar";
trace7.name ="110社福移工";
trace7.x=[];
trace7.y=[];
trace7.x[0]="印尼";
trace7.y[0]=Indonesia_110[1]['count'];
trace7.x[1]="菲律賓";
trace7.y[1]=Philippines_110[1]['count'];
trace7.x[2]="泰國";
trace7.y[2]=Thailand_110[1]['count'];
trace7.x[3]="越南";
trace7.y[3]=Vietnam_110[1]['count'];
trace7.xaxis='x2'

let trace8 ={};
trace8.type ="bar";
trace8.name ="111產業移工";
trace8.x=[];
trace8.y=[];
trace8.x[0]="印尼";
trace8.y[0]=Indonesia_111[0]['count'];
trace8.x[1]="菲律賓";
trace8.y[1]=Philippines_111[0]['count'];
trace8.x[2]="泰國";
trace8.y[2]=Thailand_111[0]['count'];
trace8.x[3]="越南";
trace8.y[3]=Vietnam_111[0]['count'];
trace8.barmode='stack'
trace8.xaxis='x3'

let trace9 ={};
trace9.type ="bar";
trace9.name ="111社福移工";
trace9.x=[];
trace9.y=[];
trace9.x[0]="印尼";
trace9.y[0]=Indonesia_111[1]['count'];
trace9.x[1]="菲律賓";
trace9.y[1]=Philippines_111[1]['count'];
trace9.x[2]="泰國";
trace9.y[2]=Thailand_111[1]['count'];
trace9.x[3]="越南";
trace9.y[3]=Vietnam_111[1]['count'];
trace9.xaxis='x3'

let data2 =[];
data2.push(trace4);
data2.push(trace5);
data2.push(trace6);
data2.push(trace7);
data2.push(trace8);
data2.push(trace9);

let layout2 ={
    margin:{
        t:50
    },
    barmode:'stack',
    xaxis: {
        domain: [0, 0.33],
        anchor: 'x1', 
        title: '109年年底'
    },
    xaxis2: {
        domain: [0.33, 0.66],
        anchor: 'x2', 
        title: '110年年底'
    },
    xaxis3: {
        domain: [0.67, 1.0],
        anchor: 'x3',
        title: '111年年底'
    },
    title:"桃園市109至111年各年年底外籍移工總人數長條圖"
};

Plotly.newPlot(Graph2, data2, layout2);