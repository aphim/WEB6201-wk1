/* custom scripts go here */

(function()
{
    // initialization function
    function Start()
    {
        console.log("App Started...");

        //always use let instead of var    
        for (let index =0; index < 5; index++)
        {
            console.log(index);
        } 

    }
    // event listener
    window.addEventListener("load", Start);
}

)();


