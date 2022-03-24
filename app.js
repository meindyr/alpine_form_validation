function main() {
    return {
        user : {"value": null, "valid": 'default'},
        email: {"value": null, "valid": 'default'},
        pass: {"value": null, "valid": 'default'},
        pass_confirm: {"value": null, "valid": 'default'},

        validateOnFly( model ){
            (model == 'user') ? ( (this.user.value == null || this.user.value == '') ? this.user.valid = 'default' :  ((this.user.value.length >= 4 ) ? this.user.valid = true : this.user.valid = false)) : null;
            (model == 'email') ? ( (this.email.value == null || this.email.value == '') ? this.email.valid = 'default' : (( this.validateEmail(this.email.value)) ? this.email.valid = true : this.email.valid = false)) : null;
            (model == 'pass') ? ( (this.pass.value == null || this.pass.value == '') ? this.pass.valid = 'default' : (this.validatePassStrength(this.pass.value) ? this.pass.valid = true : this.pass.valid = false )) : null ;
            (model == 'pass_confirm') ? ( (this.pass_confirm.value == null || this.pass_confirm.value == '') ? this.pass_confirm.valid = 'default' : this.pass_confirm.valid = (this.pass_confirm.value == this.pass.value)): null;
        },
        validateEmail(email){
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
        },
        validatePassStrength(pass){
            return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(pass);
        }
    }
}