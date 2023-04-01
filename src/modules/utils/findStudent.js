export default (studentID, data, attr) => {
    /* console.log( data.data.users[ data.data.users.findIndex( student => student.id === studentID )]) */
    /* console.log(data,studentID) */
    if(attr === 'typeDocument'){
        return assignTypeDocument(data.data.users[ data.data.users.findIndex( student => student.id === studentID )][attr])
    }
    if(attr === 'gender'){
        return assignGender(data.data.users[ data.data.users.findIndex( student => student.id === studentID )][attr])
    }
    if(attr === 'state'){
        return assignStatus(data.data.users[ data.data.users.findIndex( student => student.id === studentID )][attr])
    }
    return data.data.users[ data.data.users.findIndex( student => student.id === studentID )][attr]
} 
 const assignTypeDocument = (type) => {
    switch (type) {
        case 1:
            return 'Citizen\'s Card'
        case 2:
            return 'Foreigner\'s Card'
        case 3:
            return 'Passport'
        case 4:
            return 'Identification Card'
        default:
            return 'file'
    }
}

const assignGender = (abreviation) => {
    switch(abreviation){
        case 'M':  
            return 'Male'
        case 'F':
            return 'Female'
        default:
            return 'Other'
    }        
}

const assignStatus = (status) => {
    switch(status){
        case true:
            return 'Active'
        case false:
            return 'Inactive'
        default:
            return 'Unknown'
    }
}