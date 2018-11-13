try {
    let http=new XMLHttpRequest();//Instancia 
    http.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200) {//
            console.log(JSON.parse(http.response));
            document.getElementById("hola").innerHTML = http.responseText;
         }
    }
    http.open('GET','https://reqres.in/api/users?page=2',true);
    http.send();
} catch (error) {
    
}