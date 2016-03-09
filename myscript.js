function changeDisplay()
{
        var mark = document.getElementById('demo').innerHTML;
        if (mark === "JavaScript can change HTML content.")
                {
                document.getElementById('demo').innerHTML = "Hello JavaScript!";
                }
        else
        {
        document.getElementById('demo').innerHTML = "JavaScript can change HTML content."
        }
}

