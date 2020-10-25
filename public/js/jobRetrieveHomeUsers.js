$(function(){
    
    var DEBUG = true;
    var token = window.localStorage.getItem("token");
    var url = "api/job?u=" + token;
    console.log(url);
    
    
    //get all job aviable in the data base
    $.get("api/job/list",(data)=>{
        console.log("data:" + data);
        
        //for(var i=0; i< data.length; i++){
    //        console.log(data[i].job_name);
      //  }
        
        var counter = 0;
        var html = "";
        for (var j=0; j<data.length; j++){
            
            if (DEBUG){
                console.log("job name: " + data[j].job_name);
                console.log("schedule hours: " + data[j].scheduled_hours);
                console.log("payment: " + data[j].pay);
                console.log("certification: " + data[j].certifications);
                console.log("starting date: " + data[j].start_date);
                console.log("endidng date: " + data[j].end_date);
                console.log("description: " + data[j].description);
                console.log("location: " + data[j].location);
            }
            
            // every 4 entries we have to create a new row or close the row
            
            if((counter%4 == 1) || (counter ==0)){
                html += "<div class='row'>\n";
            }
            
            counter = counter + 1;
            
            // create the card for the job
            html += "<div class='col'>\n <div class='card' style='width: 15rem;'>\n <div class='card-body'>\n <h5 class='card-title'>" + data[j].job_name + "</h5>\n <p class='card-text'>" + data[j].description + "</p>\n </div>\n <ul class='list-group list-group-flush'>\n <li class='list-group-item'>Duration: " + data[j].start_date + "-" + data[j].end_date + "</li>\n <li class='list-group-item'>Schedule: " + data[j].scheduled_hours + "</li>\n <li class='list-group-item'>Location: " + data[j].location + "</li>\n <li class='list-group-item'>Salary: " + data[j].pay + "$/h</li>\n <li class='list-group-item'>Certifications needed: " + data[j].certifications_needed + "</li>\n </ul>\n </div>\n </div>\n </div>\n ";
            
            console.log(counter);
            if((counter != 0) && (counter%4 == 0) || (counter+1 >= data.length)){
                html += "</div>\n ";
            }
        }
        
        $("#jobCards").html(html);
        
    })
})