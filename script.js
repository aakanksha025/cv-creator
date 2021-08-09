var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src)
    }
  };

function objective(){
    document.getElementById('objective').style.display = "block";
    document.getElementById('personal').style.display = "none";
    document.getElementById('education').style.display = "none";
    document.getElementById('certificate').style.display = "none";
    document.getElementById('skills').style.display = "none";
    document.getElementById('languages').style.display = "none";
    document.getElementById('job').style.display = "none";
}

function personal(){
    document.getElementById('objective').style.display = "none";
    document.getElementById('personal').style.display = "block";
    document.getElementById('education').style.display = "none";
    document.getElementById('certificate').style.display = "none";
    document.getElementById('skills').style.display = "none";
    document.getElementById('languages').style.display = "none";
    document.getElementById('job').style.display = "none";
}

function education(){
    document.getElementById('objective').style.display = "none";
    document.getElementById('personal').style.display = "none";
    document.getElementById('education').style.display = "block";
    document.getElementById('certificate').style.display = "none";
    document.getElementById('skills').style.display = "none";
    document.getElementById('languages').style.display = "none";
    document.getElementById('job').style.display = "none";
}

function certificate(){
    document.getElementById('objective').style.display = "none";
    document.getElementById('personal').style.display = "none";
    document.getElementById('education').style.display = "none";
    document.getElementById('certificate').style.display = "block";
    document.getElementById('skills').style.display = "none";
    document.getElementById('languages').style.display = "none";
    document.getElementById('job').style.display = "none";
}

function skills(){
    document.getElementById('objective').style.display = "none";
    document.getElementById('personal').style.display = "none";
    document.getElementById('education').style.display = "none";
    document.getElementById('certificate').style.display = "none";
    document.getElementById('skills').style.display = "block";
    document.getElementById('languages').style.display = "none";
    document.getElementById('job').style.display = "none";
}

function language(){
    document.getElementById('objective').style.display = "none";
    document.getElementById('personal').style.display = "none";
    document.getElementById('education').style.display = "none";
    document.getElementById('certificate').style.display = "none";
    document.getElementById('skills').style.display = "none";
    document.getElementById('languages').style.display = "block";
    document.getElementById('job').style.display = "none";
}

function job(){
    document.getElementById('objective').style.display = "none";
    document.getElementById('personal').style.display = "none";
    document.getElementById('education').style.display = "none";
    document.getElementById('certificate').style.display = "none";
    document.getElementById('skills').style.display = "none";
    document.getElementById('languages').style.display = "none";
    document.getElementById('job').style.display = "block";
}

function DisplayFname(){
    var fname = document.getElementById("fname").value;
    document.getElementById('dfname').textContent = fname;
}

function DisplayLname(){
    var lname = document.getElementById("lname").value;
    document.getElementById('dlname').textContent = lname;
}

function DisplayObjective(){
    var objective = document.getElementById("obj").value;
    document.getElementById('dobjective').textContent = objective;
}

function DisplayDesignation(){
    var designation = document.getElementById("designation").value;
    document.getElementById('ddesignation').textContent = designation;
}

function DisplayContact(){
    var number = document.getElementById("contact").value;
    document.getElementById('dcontact').textContent = number;
}

function DisplayAddress(){
    var place = document.getElementById("address").value;
    document.getElementById('daddress').textContent = place;
}

function Displaymail(){
    var mail = document.getElementById("email").value;
    document.getElementById('demail').textContent = mail;
}

/*ADD EDUCATION FIELD */

function addeducationField1(){
    var v = document.getElementById("edubtn1");
    v.style.display = "none";
    var dfield = '<br><br><input type="text" id="ecoursename2" placeholder="Course Name" onkeyup="DisplayEduCName2()"><br><input type="text" id="einstitutename2" placeholder="Institute Name" onkeyup="DisplayEduIName2()"><br><div class="date" style="display: flex;"><input type="month" id="esdate2" placeholder="Start Date:&nbsp;" onclick="setTimeout(DisplayEduStartdate2, 10000)"><br><input type="month" id="eedate2" placeholder="End Date:&nbsp;" onclick="setTimeout(DisplayEduEnddate2, 10000)"><br></div><textarea rows="4" cols="89" id="eduex2" placeholder=" Add other information..." onkeyup="DisplayEduExtra2()"></textarea><br><button id="edubtn2" onclick="addeducationField2()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("educfield1").innerHTML = dfield; 
}

function addeducationField2(){
    var v = document.getElementById("edubtn2");
    v.style.display = "none";
    var dfield = '<br><br><input type="text" id="ecoursename3" placeholder="Course Name" onkeyup="DisplayEduCName3()"><br><input type="text" id="einstitutename3" placeholder="Institute Name" onkeyup="DisplayEduIName3()"><br><div class="date" style="display: flex;"><input type="month" id="esdate3" placeholder="Start Date:&nbsp;" onclick="setTimeout(DisplayEduStartdate3, 10000)"><br><input type="month" id="eedate3" placeholder="End Date:&nbsp;" onclick="setTimeout(DisplayEduEnddate3, 10000)"><br></div><textarea rows="4" cols="89" id="eduex3" placeholder=" Add other information..." onkeyup="DisplayEduExtra3()"></textarea><br><button id="edubtn3" onclick="addeducationField3()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("educfield2").innerHTML = dfield; 
}

function addeducationField3(){
    var v = document.getElementById("edubtn3");
    v.style.display = "none";
    var dfield = '<br><br><input type="text" id="ecoursename4" placeholder="Course Name" onkeyup="DisplayEduCName4()"><br><input type="text" id="einstitutename4" placeholder="Institute Name" onkeyup="DisplayEduIName4()"><br><div class="date" style="display: flex;"><input type="month" id="esdate4" placeholder="Start Date:&nbsp;" onclick="setTimeout(DisplayEduStartdate4, 10000)"><br><input type="month" id="eedate4" placeholder="End Date:&nbsp;" onclick="setTimeout(DisplayEduEnddate4, 10000)"><br></div><textarea rows="4" cols="89" id="eduex4" placeholder=" Add other information..." onkeyup="DisplayEduExtra4()"></textarea><br><button id="edubtn4" onclick="addeducationField4()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("educfield3").innerHTML = dfield; 
}

function addeducationField4(){
    var v = document.getElementById("edubtn4");
    v.style.display = "none";
    var dfield = '<br><br><input type="text" id="ecoursename5" placeholder="Course Name" onkeyup="DisplayEduCName5()"><br><input type="text" id="einstitutename5" placeholder="Institute Name" onkeyup="DisplayEduIName5()"><br><div class="date" style="display: flex;"><input type="month" id="esdate5" placeholder="Start Date:&nbsp;" onclick="setTimeout(DisplayEduStartdate5, 10000)"><br><input type="month" id="eedate5" placeholder="End Date:&nbsp;" onclick="setTimeout(DisplayEduEnddate5, 10000)"><br></div><textarea rows="4" cols="89" id="eduex5" placeholder=" Add other information..." onkeyup="DisplayEduExtra5()"></textarea>';
    document.getElementById("educfield4").innerHTML = dfield; 
}
/*display education1 */
function DisplayEduCName1(){
    var cname = document.getElementById("ecoursename1").value;
    document.getElementById('dcoursename').textContent = cname;
}

function DisplayEduIName1(){
    var cname = document.getElementById("einstitutename1").value;
    document.getElementById('dinstitutename').textContent = cname;
}

function DisplayEduStartdate1(){
    var x = document.getElementById('esdate1').value;
    document.getElementById('dstartdate').innerHTML= x;
}

function DisplayEduEnddate1(){
    var x = document.getElementById('eedate1').value;
    document.getElementById('deenddate').innerHTML= '&nbsp;to '+x;
}

function DisplayEduExtra1(){
    var objective = document.getElementById("eduex1").value;
    document.getElementById('deextra').textContent = objective;
}
/*display education 2 */
function DisplayEduCName2(){
    var cname = document.getElementById("ecoursename2").value;
    document.getElementById('dcoursename2').textContent = cname;
}

function DisplayEduIName2(){
    var cname = document.getElementById("einstitutename2").value;
    document.getElementById('dinstitutename2').textContent = cname;
}

function DisplayEduStartdate2(){
    var x = document.getElementById('esdate2').value;
    document.getElementById('dstartdate2').innerHTML= x;
}

function DisplayEduEnddate2(){
    var x = document.getElementById('eedate2').value;
    document.getElementById('deenddate2').innerHTML= '&nbsp;to '+x;
}

function DisplayEduExtra2(){
    var objective = document.getElementById("eduex2").value;
    document.getElementById('deextra2').textContent = objective;
}
/*display education 3 */
function DisplayEduCName3(){
    var cname = document.getElementById("ecoursename3").value;
    document.getElementById('dcoursename3').textContent = cname;
}

function DisplayEduIName3(){
    var cname = document.getElementById("einstitutename3").value;
    document.getElementById('dinstitutename3').textContent = cname;
}

function DisplayEduStartdate3(){
    var x = document.getElementById('esdate3').value;
    document.getElementById('dstartdate3').innerHTML= x;
}

function DisplayEduEnddate3(){
    var x = document.getElementById('eedate3').value;
    document.getElementById('deenddate3').innerHTML= '&nbsp;to '+x;
}

function DisplayEduExtra3(){
    var objective = document.getElementById("eduex3").value;
    document.getElementById('deextra3').textContent = objective;
}
/*display education 4 */
function DisplayEduCName4(){
    var cname = document.getElementById("ecoursename4").value;
    document.getElementById('dcoursename4').textContent = cname;
}

function DisplayEduIName4(){
    var cname = document.getElementById("einstitutename4").value;
    document.getElementById('dinstitutename4').textContent = cname;
}

function DisplayEduStartdate4(){
    var x = document.getElementById('esdate4').value;
    document.getElementById('dstartdate4').innerHTML= x;
}

function DisplayEduEnddate4(){
    var x = document.getElementById('eedate4').value;
    document.getElementById('deenddate4').innerHTML= '&nbsp;to '+x;
}

function DisplayEduExtra4(){
    var objective = document.getElementById("eduex4").value;
    document.getElementById('deextra4').textContent = objective;
}
/*display education 5 */
function DisplayEduCName5(){
    var cname = document.getElementById("ecoursename5").value;
    document.getElementById('dcoursename5').textContent = cname;
}

function DisplayEduIName5(){
    var cname = document.getElementById("einstitutename5").value;
    document.getElementById('dinstitutename5').textContent = cname;
}

function DisplayEduStartdate5(){
    var x = document.getElementById('esdate5').value;
    document.getElementById('dstartdate5').innerHTML= x;
}

function DisplayEduEnddate5(){
    var x = document.getElementById('eedate5').value;
    document.getElementById('deenddate5').innerHTML= '&nbsp;to '+x;
}

function DisplayEduExtra5(){
    var objective = document.getElementById("eduex5").value;
    document.getElementById('deextra5').textContent = objective;
}

/* ADD CERTIFICATION FIELD*/
function addcertificateField1(){
    var v = document.getElementById("cerbtn1");
    v.style.display = "none";
    var field = '<br><br><input type="text" id="cercname2" placeholder="Course Name" onkeyup="DisplayCCName2()"><br><input type="text" id="ceriname2" placeholder="Institute Name" onkeyup="DisplayCIName2()"><br><div class="date" style="display: flex;"><input type="month" id="cersdate2" placeholder="Start Date:&nbsp;" onclick="setTimeout(DisplayCSDate2, 10000)"><br><input type="month" id="ceredate2" placeholder="End Date:&nbsp;" onclick="setTimeout(DisplayCEDate2, 10000)"><br></div><textarea rows="4" cols="89" id="cerextra2" placeholder=" Add other information..." onkeyup="DisplayCExtra2()"></textarea><br><button id="cerbtn2" onclick="addcertificateField2()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("cerfield1").innerHTML = field; 
}

function addcertificateField2(){
    var v = document.getElementById("cerbtn2");
    v.style.display = "none";
    var field = '<br><br><input type="text" id="cercname3" placeholder="Course Name" onkeyup="DisplayCCName3()"><br><input type="text" id="ceriname3" placeholder="Institute Name" onkeyup="DisplayCIName3()"><br><div class="date" style="display: flex;"><input type="month" id="cersdate3" placeholder="Start Date:&nbsp;" onclick="setTimeout(DisplayCSDate3, 10000)"><br><input type="month" id="ceredate3" placeholder="End Date:&nbsp;" onclick="setTimeout(DisplayCEDate3, 10000)"><br></div><textarea rows="4" cols="89" id="cerextra3" placeholder=" Add other information..." onkeyup="DisplayCExtra3()"></textarea><br><button id="cerbtn3" onclick="addcertificateField3()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("cerfield2").innerHTML = field; 
}

function addcertificateField3(){
    var v = document.getElementById("cerbtn3");
    v.style.display = "none";
    var field = '<br><br><input type="text" id="cercname4" placeholder="Course Name" onkeyup="DisplayCCName4()"><br><input type="text" id="ceriname4" placeholder="Institute Name" onkeyup="DisplayCIName4()"><br><div class="date" style="display: flex;"><input type="month" id="cersdate4" placeholder="Start Date:&nbsp;" onclick="setTimeout(DisplayCSDate4, 10000)"><br><input type="month" id="ceredate4" placeholder="End Date:&nbsp;" onclick="setTimeout(DisplayCEDate4, 10000)"><br></div><textarea rows="4" cols="89" id="cerextra4" placeholder=" Add other information..." onkeyup="DisplayCExtra4()"></textarea><br><button id="cerbtn4" onclick="addcertificateField4()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("cerfield3").innerHTML = field; 
}

function addcertificateField4(){
    var v = document.getElementById("cerbtn4");
    v.style.display = "none";
    var field = '<br><br><input type="text" id="cercname5" placeholder="Course Name" onkeyup="DisplayCCName5()"><br><input type="text" id="ceriname5" placeholder="Institute Name" onkeyup="DisplayCIName5()"><br><div class="date" style="display: flex;"><input type="month" id="cersdate5" placeholder="Start Date:&nbsp;" onclick="setTimeout(DisplayCSDate5, 10000)"><br><input type="month" id="ceredate5" placeholder="End Date:&nbsp;" onclick="setTimeout(DisplayCEDate5, 10000)"><br></div><textarea rows="4" cols="89" id="cerextra5" placeholder=" Add other information..." onkeyup="DisplayCExtra5()"></textarea>';
    document.getElementById("cerfield4").innerHTML = field; 
}

/*display certificate 1 */
function DisplayCCName1(){
    var cname = document.getElementById("cercname1").value;
    document.getElementById('dcercname1').textContent = cname;
}

function DisplayCIName1(){
    var cname = document.getElementById("ceriname1").value;
    document.getElementById('dceriname1').textContent = cname;
}

function DisplayCSDate1(){
    var x = document.getElementById('cersdate1').value;
    document.getElementById('dcersdate1').innerHTML= x;
}

function DisplayCEDate1(){
    var x = document.getElementById('ceredate1').value;
    document.getElementById('dceredate1').innerHTML= '&nbsp;to '+x;
}

function DisplayCExtra1(){
    var objective = document.getElementById("cerextra1").value;
    document.getElementById('dcerextra1').textContent = objective;
}

/*display certificate 2 */
function DisplayCCName2(){
    var cname = document.getElementById("cercname2").value;
    document.getElementById('dcercname2').textContent = cname;
}

function DisplayCIName2(){
    var cname = document.getElementById("ceriname2").value;
    document.getElementById('dceriname2').textContent = cname;
}

function DisplayCSDate2(){
    var x = document.getElementById('cersdate2').value;
    document.getElementById('dcersdate2').innerHTML= x;
}

function DisplayCEDate2(){
    var x = document.getElementById('ceredate2').value;
    document.getElementById('dceredate2').innerHTML= '&nbsp;to '+x;
}

function DisplayCExtra2(){
    var objective = document.getElementById("cerextra2").value;
    document.getElementById('dcerextra2').textContent = objective;
}

/*display certificate 3 */
function DisplayCCName3(){
    var cname = document.getElementById("cercname3").value;
    document.getElementById('dcercname3').textContent = cname;
}

function DisplayCIName3(){
    var cname = document.getElementById("ceriname3").value;
    document.getElementById('dceriname3').textContent = cname;
}

function DisplayCSDate3(){
    var x = document.getElementById('cersdate3').value;
    document.getElementById('dcersdate3').innerHTML= x;
}

function DisplayCEDate3(){
    var x = document.getElementById('ceredate3').value;
    document.getElementById('dceredate3').innerHTML= '&nbsp;to '+x;
}

function DisplayCExtra3(){
    var objective = document.getElementById("cerextra3").value;
    document.getElementById('dcerextra3').textContent = objective;
}

/*display certificate 4 */
function DisplayCCName4(){
    var cname = document.getElementById("cercname4").value;
    document.getElementById('dcercname4').textContent = cname;
}

function DisplayCIName4(){
    var cname = document.getElementById("ceriname4").value;
    document.getElementById('dceriname4').textContent = cname;
}

function DisplayCSDate4(){
    var x = document.getElementById('cersdate4').value;
    document.getElementById('dcersdate4').innerHTML= x;
}

function DisplayCEDate4(){
    var x = document.getElementById('ceredate4').value;
    document.getElementById('dceredate4').innerHTML= '&nbsp;to '+x;
}

function DisplayCExtra4(){
    var objective = document.getElementById("cerextra4").value;
    document.getElementById('dcerextra4').textContent = objective;
}

/*display certificate 5 */
function DisplayCCName5(){
    var cname = document.getElementById("cercname5").value;
    document.getElementById('dcercname5').textContent = cname;
}

function DisplayCIName5(){
    var cname = document.getElementById("ceriname5").value;
    document.getElementById('dceriname5').textContent = cname;
}

function DisplayCSDate5(){
    var x = document.getElementById('cersdate5').value;
    document.getElementById('dcersdate5').innerHTML= x;
}

function DisplayCEDate5(){
    var x = document.getElementById('ceredate5').value;
    document.getElementById('dceredate5').innerHTML= '&nbsp;to '+x;
}

function DisplayCExtra5(){
    var objective = document.getElementById("cerextra5").value;
    document.getElementById('dcerextra5').textContent = objective;
}
/* ADD SKILL FIELD */
function addskillfield(){
    var v = document.getElementById("skillbtn");
    v.style.display = "none";
    var field = '<input type="text" id="skilll" onkeyup="DisplaySkill2()"></input><br><button id="skillbtn1" onclick="addskillfield1()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("skill").innerHTML = field; 
}

function addskillfield1(){
    var v = document.getElementById("skillbtn1");
    v.style.display = "none";
    var field = '<input type="text" id="skilll1" onkeyup="DisplaySkill3()"></input><br><button id="skillbtn2" onclick="addskillfield2()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("skill1").innerHTML = field; 
}

function addskillfield2(){
    var v = document.getElementById("skillbtn2");
    v.style.display = "none";
    var field = '<input type="text" id="skilll2" onkeyup="DisplaySkill4()"></input><br><button id="skillbtn3" onclick="addskillfield3()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("skill2").innerHTML = field;
}

function addskillfield3(){
    var v = document.getElementById("skillbtn3");
    v.style.display = "none";
    var field = '<input type="text" id="skilll3" onkeyup="DisplaySkill5()"></input><br><button id="skillbtn4" onclick="addskillfield4()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("skill3").innerHTML = field;
}

function addskillfield4(){
    var v = document.getElementById("skillbtn4");
    v.style.display = "none";
    var field = '<input type="text" id="skilll4" onkeyup="DisplaySkill6()"></input><br><button id="skillbtn5" onclick="addskillfield5()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("skill4").innerHTML = field;
}

function addskillfield5(){
    var v = document.getElementById("skillbtn5");
    v.style.display = "none";
    var field = '<input type="text" id="skilll5" onkeyup="DisplaySkill7()"></input><br><button id="skillbtn6" onclick="addskillfield6()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("skill5").innerHTML = field;
}

function addskillfield6(){
    var v = document.getElementById("skillbtn6");
    v.style.display = "none";
    var field = '<input type="text" id="skilll6" onkeyup="DisplaySkill8()"></input><br><button id="skillbtn7" onclick="addskillfield7()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("skill6").innerHTML = field;
}

function addskillfield7(){
    var v = document.getElementById("skillbtn7");
    v.style.display = "none";
    var field = '<input type="text" id="skilll7" onkeyup="DisplaySkill9()"></input><br><button id="skillbtn8" onclick="addskillfield8()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("skill7").innerHTML = field;
}

function addskillfield8(){
    var v = document.getElementById("skillbtn8");
    v.style.display = "none";
    var field = '<input type="text" id="skilll8" onkeyup="DisplaySkill10()"></input><br><button id="skillbtn9" onclick="addskillfield9()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("skill8").innerHTML = field;
}

function addskillfield9(){
    var v = document.getElementById("skillbtn9");
    v.style.display = "none";
    var field = '<input type="text" id="skilll9" onkeyup="DisplaySkill11()"></input><br><button id="skillbtn10" onclick="addskillfield10()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("skill9").innerHTML = field;
}

function addskillfield10(){
    var v = document.getElementById("skillbtn10");
    v.style.display = "none";
    var field = '<input type="text" id="skilll10" onkeyup="DisplaySkill12()"></input><br>';
    document.getElementById("skill10").innerHTML = field;
}

/*DISPLAY SKILL */

function DisplaySkill(){
    var cname = document.getElementById("skil").value;
    document.getElementById('dskill1').textContent = cname;
}

function DisplaySkill2(){
    var cname = document.getElementById("skilll").value;
    document.getElementById('dskill2').textContent = cname;
}

function DisplaySkill3(){
    var cname = document.getElementById("skilll1").value;
    document.getElementById('dskill3').textContent = cname;
}

function DisplaySkill4(){
    var cname = document.getElementById("skilll2").value;
    document.getElementById('dskill4').textContent = cname;
}

function DisplaySkill5(){
    var cname = document.getElementById("skilll3").value;
    document.getElementById('dskill5').textContent = cname;
}

function DisplaySkill6(){
    var cname = document.getElementById("skilll4").value;
    document.getElementById('dskill6').textContent = cname;
}

function DisplaySkill7(){
    var cname = document.getElementById("skilll5").value;
    document.getElementById('dskill7').textContent = cname;
}

function DisplaySkill8(){
    var cname = document.getElementById("skilll6").value;
    document.getElementById('dskill8').textContent = cname;
}

function DisplaySkill9(){
    var cname = document.getElementById("skilll7").value;
    document.getElementById('dskill9').textContent = cname;
}

function DisplaySkill10(){
    var cname = document.getElementById("skilll8").value;
    document.getElementById('dskill10').textContent = cname;
}

function DisplaySkill11(){
    var cname = document.getElementById("skilll9").value;
    document.getElementById('dskill11').textContent = cname;
}

function DisplaySkill12(){
    var cname = document.getElementById("skilll10").value;
    document.getElementById('dskill12').textContent = cname;
}

/* ADD LANGUAGE FIELD */

function addlangfield1(){
    var v = document.getElementById("langbtn1");
    v.style.display = "none";
    var field = '<input type="text" id="ilanguage2" onkeyup="DisplayLanguage2()"></input><br><button id="langbtn2" onclick="addlangfield2()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("language2").innerHTML = field; 
}

function addlangfield2(){
    var v = document.getElementById("langbtn2");
    v.style.display = "none";
    var field = '<input type="text" id="ilanguage3" onkeyup="DisplayLanguage3()"></input><br><button id="langbtn3" onclick="addlangfield3()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("language3").innerHTML = field; 
}


function addlangfield3(){
    var v = document.getElementById("langbtn3");
    v.style.display = "none";
    var field = '<input type="text" id="ilanguage4" onkeyup="DisplayLanguage4()"></input><br><button id="langbtn4" onclick="addlangfield4()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("language4").innerHTML = field; 
}

function addlangfield4(){
    var v = document.getElementById("langbtn4");
    v.style.display = "none";
    var field = '<input type="text" id="ilanguage5" onkeyup="DisplayLanguage5()"></input><br><button id="langbtn5" onclick="addlangfield5()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("language5").innerHTML = field; 
}

function addlangfield5(){
    var v = document.getElementById("langbtn5");
    v.style.display = "none";
    var field = '<input type="text" id="ilanguage6" onkeyup="DisplayLanguage6()"></input><br><button id="langbtn6" onclick="addlangfield6()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("language6").innerHTML = field; 
}

function addlangfield6(){
    var v = document.getElementById("langbtn6");
    v.style.display = "none";
    var field = '<input type="text" id="ilanguage7" onkeyup="DisplayLanguage7()"></input><br><button id="langbtn7" onclick="addlangfield7()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("language7").innerHTML = field; 
}

function addlangfield7(){
    var v = document.getElementById("langbtn7");
    v.style.display = "none";
    var field = '<input type="text" id="ilanguage8" onkeyup="DisplayLanguage8()"></input><br><button id="langbtn8" onclick="addlangfield8()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("language8").innerHTML = field; 
}

function addlangfield8(){
    var v = document.getElementById("langbtn8");
    v.style.display = "none";
    var field = '<input type="text" id="ilanguage9" onkeyup="DisplayLanguage9()"></input><br><button id="langbtn9" onclick="addlangfield9()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("language9").innerHTML = field; 
}

function addlangfield9(){
    var v = document.getElementById("langbtn9");
    v.style.display = "none";
    var field = '<input type="text" id="ilanguage10" onkeyup="DisplayLanguage10()"></input><br><button id="langbtn10" onclick="addlangfield10()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("language10").innerHTML = field; 
}

function addlangfield10(){
    var v = document.getElementById("langbtn10");
    v.style.display = "none";
    var field = '<input type="text" id="ilanguage11" onkeyup="DisplayLanguage11()"></input><br><button id="langbtn11" onclick="addlangfield11()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("language11").innerHTML = field; 
}

function addlangfield11(){
    var v = document.getElementById("langbtn11");
    v.style.display = "none";
    var field = '<input type="text" id="ilanguage12" onkeyup="DisplayLanguage12()"></input><br>';
    document.getElementById("language12").innerHTML = field; 
}

/* DISPLAY LANGUAGE INPUT */
function DisplayLanguage1(){
    var cname = document.getElementById("language1").value;
    document.getElementById('dlanguage1').textContent = cname;
}

function DisplayLanguage2(){
    var cname = document.getElementById("ilanguage2").value;
    document.getElementById('dlanguage2').textContent = cname;
}

function DisplayLanguage3(){
    var cname = document.getElementById("ilanguage3").value;
    document.getElementById('dlanguage3').textContent = cname;
}

function DisplayLanguage4(){
    var cname = document.getElementById("ilanguage4").value;
    document.getElementById('dlanguage4').textContent = cname;
}

function DisplayLanguage5(){
    var cname = document.getElementById("ilanguage5").value;
    document.getElementById('dlanguage5').textContent = cname;
}

function DisplayLanguage6(){
    var cname = document.getElementById("ilanguage6").value;
    document.getElementById('dlanguage6').textContent = cname;
}

function DisplayLanguage7(){
    var cname = document.getElementById("ilanguage7").value;
    document.getElementById('dlanguage7').textContent = cname;
}

function DisplayLanguage8(){
    var cname = document.getElementById("ilanguage8").value;
    document.getElementById('dlanguage8').textContent = cname;
}

function DisplayLanguage9(){
    var cname = document.getElementById("ilanguage9").value;
    document.getElementById('dlanguage9').textContent = cname;
}

function DisplayLanguage10(){
    var cname = document.getElementById("ilanguage10").value;
    document.getElementById('dlanguage10').textContent = cname;
}

function DisplayLanguage11(){
    var cname = document.getElementById("ilanguage11").value;
    document.getElementById('dlanguage11').textContent = cname;
}

function DisplayLanguage12(){
    var cname = document.getElementById("ilanguage12").value;
    document.getElementById('dlanguage12').textContent = cname;
}

/* ADD WORK-EXPERIENCE FIELD */

function addweField1(){
    var v = document.getElementById("webtn1");
    v.style.display = "none";
    var field = '<br><br><input type="text" id="wecname2" placeholder="Course Name" onkeyup="DisplayweCName2()"><br><input type="text" id="weiname2" placeholder="Institute Name" onkeyup="DisplayweIName2()"><br><div class="date" style="display: flex;"><input type="month" id="wesdate2" placeholder="Start Date:&nbsp;" onclick="setTimeout(DisplayweSDate2, 10000)"><br><input type="month" id="weedate2" placeholder="End Date:&nbsp;" onclick="setTimeout(DisplayweEDate2, 10000)"><br></div><textarea rows="4" cols="89" id="weextra2" placeholder=" Add other information..." onkeyup="DisplayweExtra2()"></textarea><br><button id="webtn2" onclick="addweField2()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("wefield1").innerHTML = field;
}

function addweField2(){
    var v = document.getElementById("webtn2");
    v.style.display = "none";
    var field = '<br><br><input type="text" id="wecname3" placeholder="Course Name" onkeyup="DisplayweCName3()"><br><input type="text" id="weiname3" placeholder="Institute Name" onkeyup="DisplayweIName3()"><br><div class="date" style="display: flex;"><input type="month" id="wesdate3" placeholder="Start Date:&nbsp;" onclick="setTimeout(DisplayweSDate3, 10000)"><br><input type="month" id="weedate3" placeholder="End Date:&nbsp;" onclick="setTimeout(DisplayweEDate3, 10000)"><br></div><textarea rows="4" cols="89" id="weextra3" placeholder=" Add other information..." onkeyup="DisplayweExtra3()"></textarea><br><button id="webtn3" onclick="addweField3()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("wefield2").innerHTML = field;
}

function addweField3(){
    var v = document.getElementById("webtn3");
    v.style.display = "none";
    var field = '<br><br><input type="text" id="wecname4" placeholder="Course Name" onkeyup="DisplayweCName4()"><br><input type="text" id="weiname4" placeholder="Institute Name" onkeyup="DisplayweIName4()"><br><div class="date" style="display: flex;"><input type="month" id="wesdate4" placeholder="Start Date:&nbsp;" onclick="setTimeout(DisplayweSDate4, 10000)"><br><input type="month" id="weedate4" placeholder="End Date:&nbsp;" onclick="setTimeout(DisplayweEDate4, 10000)"><br></div><textarea rows="4" cols="89" id="weextra4" placeholder=" Add other information..." onkeyup="DisplayweExtra4()"></textarea><br><button id="webtn4" onclick="addweField4()"><i class="fa fa-plus"></i>  Add entry</button>';
    document.getElementById("wefield3").innerHTML = field;
}

function addweField4(){
    var v = document.getElementById("webtn4");
    v.style.display = "none";
    var field = '<br><br><input type="text" id="wecname5" placeholder="Course Name" onkeyup="DisplayweCName5()"><br><input type="text" id="weiname5" placeholder="Institute Name" onkeyup="DisplayweIName5()"><br><div class="date" style="display: flex;"><input type="month" id="wesdate5" placeholder="Start Date:&nbsp;" onclick="setTimeout(DisplayweSDate5, 10000)"><br><input type="month" id="weedate5" placeholder="End Date:&nbsp;" onclick="setTimeout(DisplayweEDate5, 10000)"><br></div><textarea rows="4" cols="89" id="weextra5" placeholder=" Add other information..." onkeyup="DisplayweExtra5()"></textarea>';
    document.getElementById("wefield4").innerHTML = field;
}

/*Display work-edu 1 */
function DisplayweCName1(){
    var cname = document.getElementById("wecname1").value;
    document.getElementById('dwecname1').textContent = cname;
}

function DisplayweIName1(){
    var cname = document.getElementById("weiname1").value;
    document.getElementById('dweiname1').textContent = cname;
}

function DisplayweSDate1(){
    var x = document.getElementById('wesdate1').value;
    document.getElementById('dwesdate1').innerHTML= x;
}

function DisplayweEDate1(){
    var x = document.getElementById('weedate1').value;
    document.getElementById('dweedate1').innerHTML= '&nbsp;to '+x;
}

function DisplayweExtra1(){
    var objective = document.getElementById("weextra1").value;
    document.getElementById('dweextra1').textContent = objective;
}

/*Display work-edu 2 */
function DisplayweCName2(){
    var cname = document.getElementById("wecname2").value;
    document.getElementById('dwecname2').textContent = cname;
}

function DisplayweIName2(){
    var cname = document.getElementById("weiname2").value;
    document.getElementById('dweiname2').textContent = cname;
}

function DisplayweSDate2(){
    var x = document.getElementById('wesdate2').value;
    document.getElementById('dwesdate2').innerHTML= x;
}

function DisplayweEDate2(){
    var x = document.getElementById('weedate2').value;
    document.getElementById('dweedate2').innerHTML= '&nbsp;to '+x;
}

function DisplayweExtra2(){
    var objective = document.getElementById("weextra2").value;
    document.getElementById('dweextra2').textContent = objective;
}

/*Display work-edu 3 */
function DisplayweCName3(){
    var cname = document.getElementById("wecname3").value;
    document.getElementById('dwecname3').textContent = cname;
}

function DisplayweIName3(){
    var cname = document.getElementById("weiname3").value;
    document.getElementById('dweiname3').textContent = cname;
}

function DisplayweSDate3(){
    var x = document.getElementById('wesdate3').value;
    document.getElementById('dwesdate3').innerHTML= x;
}

function DisplayweEDate3(){
    var x = document.getElementById('weedate3').value;
    document.getElementById('dweedate3').innerHTML= '&nbsp;to '+x;
}

function DisplayweExtra3(){
    var objective = document.getElementById("weextra3").value;
    document.getElementById('dweextra3').textContent = objective;
}

/*Display work-edu 4 */
function DisplayweCName4(){
    var cname = document.getElementById("wecname4").value;
    document.getElementById('dwecname4').textContent = cname;
}

function DisplayweIName4(){
    var cname = document.getElementById("weiname4").value;
    document.getElementById('dweiname4').textContent = cname;
}

function DisplayweSDate4(){
    var x = document.getElementById('wesdate4').value;
    document.getElementById('dwesdate4').innerHTML= x;
}

function DisplayweEDate4(){
    var x = document.getElementById('weedate4').value;
    document.getElementById('dweedate4').innerHTML= '&nbsp;to '+x;
}

function DisplayweExtra4(){
    var objective = document.getElementById("weextra4").value;
    document.getElementById('dweextra4').textContent = objective;
}

/*Display work-edu 5 */
function DisplayweCName5(){
    var cname = document.getElementById("wecname5").value;
    document.getElementById('dwecname5').textContent = cname;
}

function DisplayweIName5(){
    var cname = document.getElementById("weiname5").value;
    document.getElementById('dweiname5').textContent = cname;
}

function DisplayweSDate5(){
    var x = document.getElementById('wesdate5').value;
    document.getElementById('dwesdate5').innerHTML= x;
}

function DisplayweEDate5(){
    var x = document.getElementById('weedate5').value;
    document.getElementById('dweedate5').innerHTML= '&nbsp;to '+x;
}

function DisplayweExtra5(){
    var objective = document.getElementById("weextra5").value;
    document.getElementById('dweextra5').textContent = objective;
}