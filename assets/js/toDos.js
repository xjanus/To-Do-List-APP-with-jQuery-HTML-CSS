/************************************
  Strike out when DONE or UnDo it.
 ************************************/

//Check off specific toDos by clicking
//When an li is clicked inside of a ul, run this code.
//click listener could not work for dynamic lists, where we add li at any time.
//so we select element that are always present when page loads so th
//at it can account for elements that are not present during the page load.

$("ul").on("click", "li", function(){

    $(this).toggleClass("completed");

//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     }
//     else{
//     $(this).css({
//         color: "grey",
//         textDecoration: "line-through"
//     });
// };
});

/************************
Click on X to Delete ToDo
*************************/

//event object can be written as e, evt, event
//when span is clicked it also triggers li click listener.
//$(this).remove(); --> would only remove span element "X".
//To remove that li alongwith delete X, we need to add parent method.
//We put remove method inside the callBack function, so that, it removes
//after the fadeOut transition is over.

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove(); //$(this) is $(this).parent() in this context
    });
    event.stopPropagation();    //doesn't trigger parent listeners

});

/************************
Creation of New ToDos
*************************/

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing mew todo text from input
        var TODOText = $(this).val();      //this is input. value is the input text
        $(this).val("");            //this is a setter. It will clear the text box.
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + TODOText + " </li>");
    }
});

/******************************************
Toggle the input box with PLUS Font
******************************************/
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});