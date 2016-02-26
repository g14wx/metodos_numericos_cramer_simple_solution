//JS de Krammer
function limpar(a){ 
    var i;
    if(a == 1){    
    for(i = 0;i<=11;i++){
    document.forms[0].elements[i].value = null;}
    for(b = 12;b<=18;b++){
        document.forms[0].elements[b].value = 0;
    }}
    if(a == 2){    
    for(i = 0;i<=5;i++){
    document.forms[1].elements[i].value = null;}
    for(b = 6;b<=10;b++){
        document.forms[1].elements[b].value = 0;
    }}
    if(a == 3){    
    for(i = 0;i<=19;i++){
    document.forms[2].elements[i].value = null;}
    for(b = 19;b<=28;b++){
        document.forms[2].elements[b].value = 0;
    }}
}
function calcular() {
    var a1,a2,a3,b1,b2,b3,g1,g2,g3,r1,r2,r3,da,db,dg,d;    
    a1 = document.forms[0].elements[0].value;
    b1 = document.forms[0].elements[1].value;
    g1 = document.forms[0].elements[2].value;
    a2 = document.forms[0].elements[4].value;
    b2 = document.forms[0].elements[5].value;
    g2 = document.forms[0].elements[6].value;
    a3 = document.forms[0].elements[8].value;
    b3 = document.forms[0].elements[9].value;
    g3 = document.forms[0].elements[10].value;
    r1 = document.forms[0].elements[3].value;
    r2 = document.forms[0].elements[7].value;
    r3 = document.forms[0].elements[11].value;
    
    d = ((a1*b2*g3)+(b1*g2*a3)+(g1*a2*b3)-(a3*b2*g1)-(b3*g2*a1)-(g3*a2*b1));
    da = ((r1*b2*g3)+(b1*g2*r3)+(g1*r2*b3)-(r3*b2*g1)-(b3*g2*r1)-(g3*r2*b1));
    db = ((a1*r2*g3)+(r1*g2*a3)+(g1*a2*r3)-(a3*r2*g1)-(r3*g2*a1)-(g3*a2*r1));
    dg = ((a1*b2*r3)+(b1*r2*a3)+(r1*a2*b3)-(a3*b2*r1)-(b3*r2*a1)-(r3*a2*b1));
    
    ra = da/d;
    document.forms[0].elements[12].value = ra;
    rb = ((a1*r2*g3)+(r1*g2*a3)+(g1*a2*r3)-(a3*r2*g1)-(r3*g2*a1)-(g3*a2*r1))/((a1*b2*g3)+(b1*g2*a3)+(g1*a2*b3)-(a3*b2*g1)-(b3*g2*a1)-(g3*a2*b1));
    document.forms[0].elements[13].value = rb;
    rg = ((a1*b2*r3)+(b1*r2*a3)+(r1*a2*b3)-(a3*b2*r1)-(b3*r2*a1)-(r3*a2*b1))/((a1*b2*g3)+(b1*g2*a3)+(g1*a2*b3)-(a3*b2*g1)-(b3*g2*a1)-(g3*a2*b1));
    document.forms[0].elements[14].value = rg;
    document.forms[0].elements[15].value = d;
    document.forms[0].elements[16].value = da;
    document.forms[0].elements[17].value = db;
    document.forms[0].elements[18].value = dg;
}
function calcular2() {
    var a1,a2,b1,b2,g1,g2,r1,r2,ra,rb,d,da,db;
    a1 = document.forms[1].elements[0].value;
    b1 = document.forms[1].elements[1].value;
    a2 = document.forms[1].elements[3].value;
    b2 = document.forms[1].elements[4].value;
    r1 = document.forms[1].elements[2].value;
    r2 = document.forms[1].elements[5].value;
    
    d = ((a1*b2)-(a2*b1));
    da = ((r1*b2)-(r2*b1));
    db = ((a1*r2)-(a2*r1));
    
    ra = da/d; 
    document.forms[1].elements[6].value = ra;
    rb = db/d;
    document.forms[1].elements[7].value = rb;
    document.forms[1].elements[8].value = d;
    document.forms[1].elements[9].value = da;
    document.forms[1].elements[10].value = db;
}

function calcular4() {
    var a1,a2,a3,a4,b1,b2,b3,b4,g1,g2,g3,g4,y1,y2,y3,y4,r1,r2,r3,r4,ra,rb,rg,ry,d,da,db,dg,dy;
    a1 = document.forms[2].elements[0].value;  
    b1 = document.forms[2].elements[1].value;
    g1 = document.forms[2].elements[2].value;
    y1 = document.forms[2].elements[3].value;
    r1 = document.forms[2].elements[4].value;
    a2 = document.forms[2].elements[5].value;
    b2 = document.forms[2].elements[6].value;
    g2 = document.forms[2].elements[7].value;
    y2 = document.forms[2].elements[8].value;
    r2 = document.forms[2].elements[9].value;
    a3 = document.forms[2].elements[10].value;
    b3 = document.forms[2].elements[11].value;
    g3 = document.forms[2].elements[12].value;
    y3 = document.forms[2].elements[13].value;
    r3 = document.forms[2].elements[14].value;
    a4 = document.forms[2].elements[15].value;
    b4 = document.forms[2].elements[16].value;
    g4 = document.forms[2].elements[17].value;
    y4 = document.forms[2].elements[18].value;
    r4 = document.forms[2].elements[19].value;
    
    d = (a1*((b2*g3*y4)+(g2*y3*b4)+(y2*b3*g4)-(b4*g3*y2)-(g4*y3*b2)-(y4*b3*g2))-b1*((a2*g3*y4)+(g2*y3*a4)+(y2*a3*g4)-(a4*g3*y2)-(g4*y3*a2)-(y4*a3*g2))+g1*((a2*b3*y4)+(b2*y3*a4)+(y2*a3*b4)-(a4*b3*y2)-(b4*y3*a2)-(y4*a3*b2))-y1*((a2*b3*g4)+(b2*g3*a4)+(g2*a3*b4)-(a4*b3*g2)-(b4*g3*a2)-(g4*a3*b2)));
    da = (r1*((b2*g3*y4)+(g2*y3*b4)+(y2*b3*g4)-(b4*g3*y2)-(g4*y3*b2)-(y4*b3*g2))-b1*((r2*g3*y4)+(g2*y3*r4)+(y2*r3*g4)-(r4*g3*y2)-(g4*y3*r2)-(y4*r3*g2))+g1*((r2*b3*y4)+(b2*y3*r4)+(y2*r3*b4)-(r4*b3*y2)-(b4*y3*r2)-(y4*r3*b2))-y1*((r2*b3*g4)+(b2*g3*r4)+(g2*r3*b4)-(r4*b3*g2)-(b4*g3*r2)-(g4*r3*b2)));
    db = (a1*((r2*g3*y4)+(g2*y3*r4)+(y2*r3*g4)-(r4*g3*y2)-(g4*y3*r2)-(y4*r3*g2))-r1*((a2*g3*y4)+(g2*y3*a4)+(y2*a3*g4)-(a4*g3*y2)-(g4*y3*a2)-(y4*a3*g2))+g1*((a2*r3*y4)+(r2*y3*a4)+(y2*a3*r4)-(a4*r3*y2)-(r4*y3*a2)-(y4*a3*r2))-y1*((a2*r3*g4)+(r2*g3*a4)+(g2*a3*r4)-(a4*r3*g2)-(r4*g3*a2)-(g4*a3*r2)));
    dg = (a1*((b2*r3*y4)+(r2*y3*b4)+(y2*b3*r4)-(b4*r3*y2)-(r4*y3*b2)-(y4*b3*r2))-b1*((a2*r3*y4)+(r2*y3*a4)+(y2*a3*r4)-(a4*r3*y2)-(r4*y3*a2)-(y4*a3*r2))+r1*((a2*b3*y4)+(b2*y3*a4)+(y2*a3*b4)-(a4*b3*y2)-(b4*y3*a2)-(y4*a3*b2))-y1*((a2*b3*r4)+(b2*r3*a4)+(r2*a3*b4)-(a4*b3*r2)-(b4*r3*a2)-(r4*a3*b2)));
    dy = (a1*((b2*g3*r4)+(g2*r3*b4)+(r2*b3*g4)-(b4*g3*r2)-(g4*r3*b2)-(r4*b3*g2))-b1*((a2*g3*r4)+(g2*r3*a4)+(r2*a3*g4)-(a4*g3*r2)-(g4*r3*a2)-(r4*a3*g2))+g1*((a2*b3*r4)+(b2*r3*a4)+(r2*a3*b4)-(a4*b3*r2)-(b4*r3*a2)-(r4*a3*b2))-r1*((a2*b3*g4)+(b2*g3*a4)+(g2*a3*b4)-(a4*b3*g2)-(b4*g3*a2)-(g4*a3*b2)));
    ra = da/d;
    document.forms[2].elements[20].value = ra;
    rb = db/d;
    document.forms[2].elements[21].value = rb;
    rg = dg/d;
    document.forms[2].elements[22].value = rg;
    ry = dy/d;
    document.forms[2].elements[23].value = ry;
    document.forms[2].elements[24].value = d;
    document.forms[2].elements[25].value = da;
    document.forms[2].elements[26].value = db;
    document.forms[2].elements[27].value = dg;
    document.forms[2].elements[28].value = dy;
    
}