/**
 * Created by purushotham on 27-12-2016.
 */
$(document).ready(function() {
    //$("button").click(function () {
    //alert("hai11111");
    test();
    });


    function test(){
     //   alert("ha122");

        $.getJSON("users.json", function (obj) {

            var itms = [];
            $.each(obj, function (key, value) {
                itms.push("<tr>");
                itms.push("<td name=''" + key + "''>" + value.name + "</td>");
                itms.push("<td email=''" + key + "''>" + value.email + "</td>");
                itms.push("<td teamname=''" + key + "''>" + value.teamname + "</td>");
                itms.push("<td projectname=''" + key + "''>" + value.projectname + "</td>");
                itms.push("<td filename=''" + key + "''>" + value.filename + "</td>");
                itms.push("<td Role=''" + key + "''>" + value.Role + "</td>");
                itms.push("</tr>");
            });
            $("<tbody/>", {"class": "mydata", html: itms.join()}).appendTo("table");
        });
    }