
var admin1 ={
    username:'admin1',
    password:'12345',
    email:'admin1@admin.com',
    phone:'0987654321',
    imageFile:'anh/admin1.png'

}
function tuluanform() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser')); 
    var question = document.getElementById('question').value;
    var answer = document.getElementById('answer').value;
    var time = new Date().toLocaleString();
    var user = currentUser.username;
   
    var tuluan = {
        question: question,
        answer: answer,
        time: time,
        user: user 
    };
    if(question === "" || answer === "") {
        alert("Vui lòng điền đầy đủ thông tin!");
        return false;
    }

    var oldData = JSON.parse(localStorage.getItem('tuluan')) || [];
    oldData.push(tuluan);
    localStorage.setItem('tuluan', JSON.stringify(oldData));
    if(confirm('Thêm thành công bạn có muón tiếp tục ?')== true){
        window.location.reload();
    }
    else {
        window.location.href = 'themcauhoi.html';
    }
}


function resetForm() {
    var allData = JSON.parse(localStorage.getItem('tuluan')) || [];
    var table = document.getElementById('table');

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    for (var j = 0; j < allData.length; j++) {
        var data = allData[j];
        var row = table.insertRow(-1);
        row.insertCell(0).innerHTML = data.question;
        row.insertCell(1).innerHTML = data.answer;
        row.insertCell(2).innerHTML = data.time;
        row.insertCell(3).innerHTML = data.user;
        var selectButton = document.createElement('button');
        selectButton.innerHTML = 'Duyệt';
        selectButton.onclick = (function(j, row) {
            return function() {
                var selectedData = JSON.parse(localStorage.getItem('selectedData')) || [];
                        if (!Array.isArray(selectedData)) {
                            selectedData = [];
                        }
                        selectedData.push(data);
                        localStorage.setItem('selectedData', JSON.stringify(selectedData));
                        row.remove();
            };
        })(j, row)
        row.insertCell(4).appendChild(selectButton);
    }
}

function resetForm1da() {
    var allData = JSON.parse(localStorage.getItem('motdapan')) || [];
    var table = document.getElementById('table');

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    for (var j = 0; j < allData.length; j++) {
        var data = allData[j];
        var row = table.insertRow(-1);
        row.insertCell(0).innerHTML = data.question;
        for (var i = 0; i < 4; i++) {
            row.insertCell(i + 1).innerHTML = data.answer[i];
        }
        row.insertCell(5).innerHTML = data.trueAnswer;
        row.insertCell(6).innerHTML = data.time;
        row.insertCell(7).innerHTML = data.user;
        var selectButton = document.createElement('button');
        selectButton.innerHTML = 'Duyệt';
        selectButton.onclick = (function(j, row) {
            return function() {
                var selectedData = JSON.parse(localStorage.getItem('selectedData')) || [];
                        if (!Array.isArray(selectedData)) {
                            selectedData = [];
                        }
                        selectedData.push(data);
                        localStorage.setItem('selectedData', JSON.stringify(selectedData));
                        row.remove();
            };
        })(j, row)
        row.insertCell(8).appendChild(selectButton);
    }
}


function motdapanform(){
    var currentUser = JSON.parse(localStorage.getItem('currentUser')); 
    var question = document.getElementById('question').value;
   var answer = [
    document.getElementById('answer1').value,
    document.getElementById('answer2').value,
    document.getElementById('answer3').value,
    document.getElementById('answer4').value,
   ];
    var time = new Date().toLocaleString();
    var trueAnswer = document.querySelector('input[name="radio"]:checked').value;
    var user =currentUser.username;
    var motdapan = {
        question: question,
        answer: answer,
        trueAnswer: trueAnswer,
        user: user,
        time: time,
    }
    var allData = JSON.parse(localStorage.getItem('motdapan')) || [];
    allData.push(motdapan);
    localStorage.setItem('motdapan', JSON.stringify(allData));
    if(confirm('Thêm thành công bạn có muón tiếp tục ?')== true){
        window.location.reload();
    }
    else {
        window.location.href = 'themcauhoi.html';
    }
}

var users = {};

function register() {
    
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
//   var imageFile = document.getElementById('imgfile').files[0];

  if(username === "" || password === "" ||  phone === "" || email === "") {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  users[username] = {
    username:username,
    password: password,
    phone: phone,
    email: email,
}
localStorage.setItem('users', JSON.stringify(users));
alert("Đăng ký thành công!");
//   var reader = new FileReader();
//   reader.onloadend = function() {
//       var base64Image = reader.result;
      
//       };


// reader.readAsDataURL(imageFile);
}

function login() {
    var username = document.getElementById('lgusername').value;
    var password = document.getElementById('lgpassword').value;

    var storedUsers = JSON.parse(localStorage.getItem('users'));
    if(admin1.username == username&& admin1.password == password){
        alert("Xin chào " + username );
        window.location.href ='index.html'
        localStorage.setItem('currentUser', JSON.stringify(admin1));
        return;
    
    }else if(storedUsers[username] && storedUsers[username].password === password) {
      alert("Xin chào " + username );
      window.location.href ='index.html'
      localStorage.setItem('currentUser', JSON.stringify(storedUsers[username] ));
       return;
    } else {
      alert("Tài khoản không tồn tại");
    }
        
}   
function lichsu(){
    var allData = JSON.parse(localStorage.getItem('selectedData')) || [];
    var data = JSON.parse(localStorage.getItem('selectedData1da')) || [];
    for (var j = 0; j < allData.length; j++) {
var data = allData[j];
var row = table.insertRow(-1);
row.insertCell(0).innerHTML = data.question;
row.insertCell(1).innerHTML = data.answer;
row.insertCell(2).innerHTML = data.time;
row.insertCell(3).innerHTML = data.user;
    }
for (var j = 0; j <data.length; j++) {
var data = data[j];
var row = table.insertRow(-1);
row.insertCell(0).innerHTML = data.question;
row.insertCell(1).innerHTML = data.trueAnswer;
row.insertCell(2).innerHTML = data.time;
row.insertCell(3).innerHTML = data.user;
}
}