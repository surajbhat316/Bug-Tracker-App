{
    // XHR request part for filter by author functionality
    let searchByAuthorForm = document.querySelector('#searchAuthor');
    searchByAuthorForm.addEventListener('submit', function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url : '/bug/'+searchByAuthorForm.dataset.id+'/searchByAuthor',
            data: $(searchByAuthorForm).serialize(),
            success: function(data){
                appendDataToHTML(data.data);
            },
            error : function(error){
                console.log(error);
            }
        });
    });


    // XHR request part for filter by Title functionality
    let searchByTitleForm = document.querySelector('#searchTitle');
    searchByTitleForm.addEventListener('submit', function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/bug/'+searchByTitleForm.dataset.id+'/searchByTitle',
            data: $(searchByTitleForm).serialize(),
            success: function(data){
                appendDataToHTML(data.data);
            },
            error: function(error){
                console.log("Error", error);
            }
        });
    });


    // XHR request part for filter by Description functionality
    let searchByDescriptionForm = document.querySelector('#searchDescription');
    searchByDescriptionForm.addEventListener('submit', function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/bug/'+searchByDescriptionForm.dataset.id+'/searchByDescription',
            data: $(searchByDescriptionForm).serialize(),
            success: function(data){
                appendDataToHTML(data.data);
            },
            error: function(error){
                console.log("Error", error);
            }
        });
    });

    // XHR request part for filter by Labels functionality
    let searchByLabelForm = document.querySelector('#searchLabel');
    searchByLabelForm.addEventListener('submit', function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/bug/'+searchByLabelForm.dataset.id+'/searchByLabels',
            data: $(searchByLabelForm).serialize(),
            success: function(data){
                appendDataToHTML(data.data);
            },
            error: function(error){
                console.log("Error", error);
            }
        });
    });    
    

    function appendDataToHTML(data){
        let dataContainer = document.getElementById('issue-container');
        dataContainer.innerHTML = '';   
        let htmlContent = '';
        if(data.bugs.length == 0){
            htmlContent = `<p style="text-align: center">No Bugs Found</p>`;
        }else{
            
            for(let bug of data.bugs){
                htmlContent+=`<div class="bug">
                                <h5>${bug.title}</h5>
                                <div class="info">
                                <div style="width: 70%;">
                                    <p>
                                        ${bug.description}
                                    </p>
                                </div>
                                    <div style="width: 30%; display: flex; align-items: flex-end; flex-direction: column;">
                                        <p><b>Label</b> : ${bug.labels}</p>
                                        <p><b>Author</b> : ${bug.author}</p>
                                    </div>
                                </div>
                            </div>`;
            }

        }
        dataContainer.innerHTML = htmlContent;
    }
}




