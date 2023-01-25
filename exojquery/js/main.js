$(document).ready(function(){

    let studentsData = [[],[],[]]

    $("table").hide();
    $("#error").hide();

    function dataHasErrors(){

        let firstName = $("#firstName");
        let lastName = $("#lastName");
        let mean = $("#mean");

        if(!firstName.val() || !lastName.val() || !mean.val() || mean.val() < 0 || mean.val() > 20){
           
            return true
        }

        return false;
    }

    function fillArrayData(){
        let fnValue = $("#firstName").val();
        let lnValue = $("#lastName").val();
        let meanValue = $("#mean").val();

        studentsData[0].push(fnValue);
        studentsData[1].push(lnValue);
        studentsData[2].push(parseInt(meanValue));
    }

    function removeAStudentFromArray(index){
    
            studentsData[0].splice(index, 1);
            studentsData[1].splice(index, 1);
            studentsData[2].splice(index, 1);
    }

    function clearData(){
        $("#firstName").val("");
        $("#lastName").val("");
        $("#mean").val("");
    }

    function calculateMean(meanArray){

        if(meanArray.length > 1){
            return Math.round(meanArray.reduce(function(prev, cur){
                return prev + cur;
             }) / meanArray.length * 100) / 100;
        }
        else{
            return "";
        }
    }

    function showMean(){
       
        $("#classroomMean").text(calculateMean(studentsData[2]));

    }

    function showStudentsData(studentsData){

        let fnArray = studentsData[0];
        let lnArray = studentsData[1];
        let meanArray = studentsData[2];

        if(fnArray.length == lnArray.length && lnArray.length == meanArray.length){

            $("#arrayBody").html("");
            
            for(let i = 0; i < fnArray.length; i++){

                $("#arrayBody").append("<tr id='trNbr" + i +"'><td>" + fnArray[i] + "</td><td>" + lnArray[i] + "</td><td>" + meanArray[i] + "</td><td><a id='removeLink" + i + "'  href='#'>X</a></td></tr>");

                $("#removeLink" + i).click(function(event){

                    event.preventDefault();

                    $("#trNbr" + i).remove();

                    removeAStudentFromArray(i);

                    showStudentsData(studentsData);
                    showMean()

                })

            }
        }else{
            alert("une erreur est survenue veuillez recharger la page");
        }

    }
     
    $("#save").click(function(){

        if(dataHasErrors()){

            $("#error").show().fadeOut(5000);
            return 0;

        } 
           
        fillArrayData();   
        clearData();      
        showStudentsData(studentsData);
        showMean();

        $("table").show();      
        
    })

});

