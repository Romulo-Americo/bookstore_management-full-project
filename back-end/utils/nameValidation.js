

function nameValidation(name){
    if(/\d/.test(name)){
        return ('Cannot contain numbers')
    }else{
        return ('Name validated')
    }
}

module.exports = nameValidation;