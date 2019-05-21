$(function(){
    var employee = {},
        popup = null,
        popupOptions = {
            width: 340,
            height: 250,
            contentTemplate: function() {
                return $("<div />").append(
                    $("<p>Full Name: <span>" + employee.FirstName + 
                        "</span> <span>" + employee.LastName + "</span></p>"),
                    $("<p>Postion: <span>" + employee.Position + "</span></p>"),
                    $("<p>Description: <span>" + employee.Notes + "</span></p>"),
                    
                );
            },
            showTitle: true,
            title: "Information",
            visible: false,
            dragEnabled: false,
            closeOnOutsideClick: true
    };
    
    var showInfo = function(data) {
        employee = data;
        if(popup) { 
            $(".popup").remove();
        }
        var $popupContainer = $("<div />")
                                .addClass("popup")
                                .appendTo($("#popup"));
        popup = $popupContainer.dxPopup(popupOptions).dxPopup("instance");
        popup.show();
    };
    
    $.each(employees, function(i, employee) {
        $("<li />").append(
            $("<img />").attr("src", employee.Picture),
            $("<br />"),
            $("<span />").html("<i>" + employee.FirstName + "</i>"),
            $("<span />").html(" <i>" + employee.LastName  + "</i>"),
            $("<br />"),
            $("<span />").html(" Position In th team"),
            $("<br />"),
            $("<div />")
                .addClass("button-info")
                .dxButton({
                    text: "Info", 
                    onClick: function() {
                        showInfo(employee);
                    }
                })
        ).appendTo($(".employees"));
    });
});

 var employees = [ {
    "FirstName": "Ming",
    "LastName": "CHEN",
    "Prefix": "Ms",
    "Position": "Shipping Manager",
    "Picture": "https://www.pinclipart.com/picdir/middle/24-243121_doraemon-clipart-collage-doraemon-png-transparent-png.png",
    "Notes": " intro"
}, {
    "FirstName": "Rui",
    "LastName": "SHANG",
    "Prefix": "Mr.",
    "Position": "HR Assistant",
    "Picture": "https://www.pinclipart.com/picdir/middle/24-243121_doraemon-clipart-collage-doraemon-png-transparent-png.png",
    "Notes": "!",
}, {
    "FirstName": "Ran",
    "LastName": "JU",
    "Prefix": "Ms.",
    "Position": "Controller",
    "Picture": "https://www.pinclipart.com/picdir/middle/24-243121_doraemon-clipart-collage-doraemon-png-transparent-png.png",
    "Notes": " intro "
},{
    "FirstName": "ZiAng",
    "LastName": "LU",
    "Prefix": "Ms.",
    "Position": "Ombudsman",
    "Picture": "https://www.pinclipart.com/picdir/middle/24-243121_doraemon-clipart-collage-doraemon-png-transparent-png.png",

    "Notes": "!"
},{
    "FirstName": "ShengYi",
    "LastName": "XU",
    "Prefix": "Ms.",
    "Position": "Ombudsman",
    "Picture": "https://www.pinclipart.com/picdir/middle/24-243121_doraemon-clipart-collage-doraemon-png-transparent-png.png",
    "Notes": "!!!"
}
];