function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuario = new Map();

usuario.set('Luiz', 'Admin');
usuario.set('Stephany', 'Admin');
usuario.set('Jorge', 'Usuer');
usuario.set('Célio', 'Admin');

console.log(getAdmins(usuario));