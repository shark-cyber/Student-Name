student_array=[];
    function submit(){
        var name_01= document.getElementById("name_1").value;
        var name_02= document.getElementById("name_2").value;
        var name_03= document.getElementById("name_3").value;
        var name_04= document.getElementById("name_4").value;
        student_array.push(name_01);
        student_array.push(name_02);
        student_array.push(name_03);
        student_array.push(name_04);
        console.log(student_array);
        document.getElementById("Display_name").innerHTML = student_array;
        document.getElementById("submit_button").style.display= "none";
        document.getElementById("sort_button").style.display="inline-block";
    }
    function sorting(){
        student_array.sort();
        console.log(student_array);
        document.getElementById("Display_name").innerHTML=student_array;
    }