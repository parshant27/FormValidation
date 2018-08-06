$(document).ready(function()
{

 $.validator.addMethod("special",function(value,char)
   {
     return this.optional(char)||/^[a-z0-9\_]+@+$/i.test(value)},""),
 $.validator.addMethod("lower",function(value,char)
   {
     return this.optional(char)||/[a-z]+/.test(value)},""),
 $.validator.addMethod("uper",function(value,char)
   {
     return this.optional(char)||/[A-Z]+/.test(value)},""),
 $.validator.addMethod("symbol",function(value,char)
  { return this.optional(char)||/[!,%,&,@,#,$,^,*,?,_,~]+/.test(value)},""),
 $("#first").validate(
   {
     rules:{
       email:{
        required:(!0)
       },
       password:{
         required:(!0),minlength:(8), lower:(!0),uper:(!0),symbol:(!0)         
       }
       },
       messages:{
       
         password:{
           required:"Enter password", minlength:"Length greater than 8", lower:"One Lower case alphabet", uper:"One Upper case alphabet",symbol:"Atleast one special symbol"
           }
         },
       
       
         highlight: function (char) {
           $(char).parent().addClass('error')
       },
       unhighlight: function (char) {
           $(char).parent().removeClass('error')
       }
       }
       )

          
});  