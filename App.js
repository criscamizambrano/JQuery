var providerGoogle = new firebase.auth.GoogleAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();
//jquery sujeta la etiqueta root
$('#loginGoogle').click(function(){
    firebase.auth()
        .signInWithPopup(providerGoogle)
        .then(function(result){
            console.log(result.user);
            $('#loginGoogle').hide();
            $('#root').append(result.user.displayName);
            $('#root').append("<img src='"+result.user.photoURL+"'/>")
        });
});
$('#loginFacebook').click(function(){
    firebase.auth()
        .signInWithPopup(providerFacebook)
        .then(function(result){
            console.log(result.user);
            $('#loginFacebook').hide();
            $('#root').append(result.user.displayName);
            $('#root').append("<img src='"+result.user.photoURL+"' width=300, height=300/>")
        });
});
function guardarDatos(user){
    var usuario={
        uid:user.uid,
        nombre:user.displayName,
        email:user.email,
        foto:user.photoURL
    }
    
}