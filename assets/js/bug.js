{

    let availableLabels = document.getElementById('available-labels');
    let checkbox = document.getElementById("newLabelCheckbox");
    let newLabelContainer = document.getElementById('newLabelContainer');

    checkbox.addEventListener('click', function(e){
        console.log(e.target.checked);
        if(e.target.checked){
            availableLabels.disabled = true;
            newLabelContainer.disabled = false;
        }else{
            availableLabels.disabled = false;
            newLabelContainer.disabled = true;
        }
    })
}