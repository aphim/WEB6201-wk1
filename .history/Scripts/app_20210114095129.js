/* custom scripts go here */

(function()
{
    // initialization function
    function Start()
    {
        console.log("App Started...");

        //always use let instead of var to avoid hoisting    
        //for (let index =0; index < 5; index++)
        //{
        //    console.log(index);
        //} 

        $("#clickMeButton").on("click", function(){
            console.log("Click Me Button was clicked!");
        });
    }
    // event listener
    window.addEventListener("load", Start);
}

)();


