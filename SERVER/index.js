var express  = require('express');
var app = express();

app.use(express.static('public/'));
app.set('view engine', 'ejs');
app.set('views','./views');


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var server = require('http').Server(app);
server.listen(process.env.PORT || 3000);

app.get('/',function(req,res){
    res.send('hello');
});

app.post('/xuly',function(req,res){
    var username = parseInt(req.body.username);
    var password = parseInt(req.body.password);
    var tong = username+password;
    res.json(tong)
});

function SinhVien(hoten, hinh){
    this.HOTEN = hoten;
    this.HINH = hinh;
}

function sach(tensach, giasach){
    this.TENSACH = tensach;
    this.GIASACH = giasach;
}


mang = [
    new SinhVien('TEO','https://cdn.worldvectorlogo.com/logos/angular-icon.svg'),
    new SinhVien('TI','https://cdn.worldvectorlogo.com/logos/angular-icon.svg')
];
mangsach = [];

app.post('/addsach',function(req,res){
    var tensach = req.body.tensach;
    var giasach = req.body.giasach;

 mangsach.push(new sach(tensach,giasach));
   res.json({
        kq:1,
        danhsach: mangsach,
        msg: 'add sucess' + tensach
    })
});

app.post('/sach',function(req,res){
  res.json({
        kq:1,
        danhsach: mangsach
    })
});


app.post('/sv',function(req,res){
    res.json({
        kq:1,
        danhsach: mang
    });
});