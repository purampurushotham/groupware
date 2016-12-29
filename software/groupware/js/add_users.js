/**
 * Created by purushotham on 27-12-2016.
 */
var validator;
var add_Users = function(){
       // alert("hai");
        //$('input[name="Name"]')
        alert("in add user");
        validator=$("#form1").validate({
            focusCleanup:true,
            rules: {
                UserName:{
                    required:true,
                    minlength:5,
                },
                Password: {
                    required: true,
                    minlength: 5,
                },
                Confirm_Password: {
                    required: true,
                    minlenght: 5,
                    equalTo: "Password",
                },
                Email: {
                    required: true,
                    email: true
                },
                ProjectName: {
                    required: true,
                    minlength: 5,

                },
                TeamName: {
                    required: true,
                    minlength: 5,

                },
                FileName: {
                    required: true,
                    minlength: 5,

                },
                RoleName: {
                    required: true,
                    minlength: 5,

                }
            },
            messages: {
                UserName:{
                    required:"enter a username",
                    minlength:"name should be of minimum 5 chars",
                },
                Email: {
                    required: "enter a email address",
                    email: "enter a valid email id",
                },
                TeamName: {
                    required: "please enter a team name",
                    minlength: "team name should be minimum 5 chars long",
                },
                ProjectName: {
                    required: "please enter a Project name",
                    minlength: "Project name should be minimum 5 chars long",
                },
                FileName: {
                    required: "please enter a File name",
                    minlength: "File name should be minimum 5 chars long",
                },
                RoleName: {
                    required: "please enter a Role name",
                    minlength: "Role name should be minimum 5 chars long",
                },
                Password: {
                    required: "please enter password",
                    minlength: "password must be more than 5 characters",
                },
                Confirm_Password:{
                    required: "please enter password",
                    minlength: "password must be more than 5 characters",
                    equalTo: "enter same password as above",
                }

            }

            });
};
//update user
var update_user=function() {
        alert("inedi user");
    validator= $("#form2").validate({
            focusCleanup:true,
            rules: {
                UserName: {
                    required: true,
                    minlength: 5,
                },
                Password: {
                    required: true,
                    minlength: 5,
                },
                Confirm_Password: {
                    required: true,
                    minlenght: 5,
                    equalTo: "Password",
                },
                Email: {
                    required: true,
                    email: true
                },
                ProjectName: {
                    required: true,
                    minlength: 5,

                },
                TeamName: {
                    required: true,
                    minlength: 5,

                },
                FileName: {
                    required: true,
                    minlength: 5,

                },
                RoleName: {
                    required: true,
                    minlength: 5,

                }
            },
            messages: {
                UserName: {
                    required: "enter a username",
                    minlength: "name should be of minimum 5 chars",
                },
                Email: {
                    required: "enter a email address",
                    email: "enter a valid email id",
                },
                TeamName: {
                    required: "please enter a team name",
                    minlength: "team name should be minimum 5 chars long",
                },
                ProjectName: {
                    required: "please enter a Project name",
                    minlength: "Project name should be minimum 5 chars long",
                },
                FileName: {
                    required: "please enter a File name",
                    minlength: "File name should be minimum 5 chars long",
                },
                RoleName: {
                    required: "please enter a Role name",
                    minlength: "Role name should be minimum 5 chars long",
                },
                Password: {
                    required: "please enter password",
                    minlength: "password must be more than 5 characters",
                },
                Confirm_Password: {
                    required: "please enter password",
                    minlength: "password must be more than 5 characters",
                    equalTo: "enter same password as above",
                }

            }

        });
    };
var delete_user=function() {

        alert("in delete user");
    validator=$("#form3").validate({
        focusCleanup:true,
         rules: {
             UserName: {
                 required: true,
                 minlength: 5,
             },
             Password: {
                 required: true,
                 minlength: 5,
             },
             Confirm_Password: {
                 required: true,
                 minlenght: 5,
                 equalTo: "Password",
             },
             Email: {
                 required: true,
                 email: true,
             }
         },
         messages: {
             UserName: {
                 required: "enter a username",
                 minlength: "name should be of minimum 5 chars",
             },
             Email: {
                 required: "enter a email address",
                 email: "enter a valid email id",
             }

         }

     });
 };
// function for add_projects

var add_projects = function(){
    // alert("hai");
    $('input[name="Name"]')
    $("#form").validate({
        rules: {
            Duration:{
                required:true,
                minlength:5,
            },
            Assign: {
                required: true,
                minlength: 5,
            },
            ProjectName: {
                required: true,
                minlength: 5,

            }
        },
        messages: {
            Duration:{
                required:"enter duration of  project",
                minlength:"Duration in months only",
            },
            ProjectName: {
                required: "please enter a Project name",
                minlength: "Project name should be minimum 5 chars long",
            },
            Assign: {
                required: "please assig to a team/user",
                minlength: "Username/teamname should be max 5 chars",
            }

        }

    });

};
//function on files
var add_files = function(){
    // alert("hai");
    //$('input[name="Name"]')
    $("#form").validate({
        rules: {
            FileName:{
                required:true,
                minlength:5,
            },
            Assign: {
                required: true,
                minlength: 5,
            }
        },
        messages: {
            FileName: {
                required: "please enter a File name with .extention",
                minlength: "File name should be minimum 5 chars long",
            }
        }

    });

};
var add_toggle=function () {

    $('a').click(function(){
        //var e=document.getElementById("#adduser");
       var myelement = $(this).attr("href")
        //event.preventDefault();
      $(myelement).slideToggle('slow');
        if(myelement=="adduser"){
           alert("in add user");
            add_Users();
        }
        if(myelement == "edituser"){
            alert("in update user");
            update_user();
        }
        if(myelement == "deleteuser"){
            alert("in delete user");
            delete_user();
        }
        $(".users:visible").not(myelement).hide();
    });
}





