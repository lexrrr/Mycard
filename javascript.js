var c = document.getElementById("c");
var ctx = c.getContext("2d");

window.onresize = function () { window.location.reload(); }



c.height = window.innerHeight;
c.width = window.innerWidth;

var mass = "牡マキグナルファ系路克瑞大阪市立学鎰命科ャマ能力ϒ人は妻スティ要望通り玉宏¥サ丹谷Ѫ灯影伝鶐 ي ڴ ک م ن و ۇ ه ل  ر ز س ش غ ق ی گ ب پ. ت ث ج چ د ܓ";
mass = mass.split("");

var font_size = 15;

var columns = c.width/font_size;
var drops = [];

for(var x = 0; x < columns; x++)

drops[x]=100;

function draw()
{
    ctx.fillStyle = "rgba( 0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0";
    ctx.font = font_size + "px arial";

    for(var i = 0; i < drops.length; i++)
    {
        var text = mass[Math.floor(Math.random()*mass.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        if(drops[i]*font_size > c.height && Math.random() > 0.975)
        drops[i]=0;
        drops[i]++;
    }
}
setInterval(draw, 50);

