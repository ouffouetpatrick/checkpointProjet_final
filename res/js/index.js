/**
 * SCROLLTOP
 * scrollFunction permet de revenir en haut de la page
 */

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    var button_haut = document.querySelector("#haut");
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button_haut.style.display = "block";
} else {
    button_haut.style.display = "none";
    }
}

function retourHaut() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

/**
 *  =========== SKILLS =========
 */


/**
 * FRONTEND SKILLS
 */
var frontend = document.querySelector('#skills_frontend');
var frontendSkills = document.querySelector('#skills_frontend__list');
var icon_angleFront = document.querySelector('#frontAngle');

frontend.addEventListener('click', afficheListSkillsFront);
frontend.addEventListener('dblclick', cacheListSkillsFront);

function afficheListSkillsFront(){
    frontendSkills.style.display = "block";
    backendSkills.style.display = "none";
    designerSkills.style.display = "none";
    icon_angleFront.style.transform = "rotate(-180deg)";
    icon_angleFront.style.transition = "all 0.4s ease-in-out";
    cacheListBack();
    cacheListDesign();
}

function cacheListSkillsFront(){
    frontendSkills.style.display = "none";
    icon_angleFront.style.transform = "rotate(1deg)";
}

/**
 * BACKEND SKILLS
 */
var backend = document.querySelector('#skills_backend');
var backendSkills = document.querySelector('#skills_backend__list');
var icon_angleBack = document.querySelector('#backAngle');
backend.addEventListener('click', afficheListBack);
backend.addEventListener('dblclick', cacheListBack);

function afficheListBack(){
    backendSkills.style.display = "block";
    frontendSkills.style.display = "none";
    designerSkills.style.display = "none";
    icon_angleBack.style.transform = "rotate(-180deg)";
    icon_angleBack.style.transition = "all 0.4s ease-in-out";
    cacheListSkillsFront();
    cacheListDesign();
}

function cacheListBack(){
    backendSkills.style.display = "none";
    icon_angleBack.style.transform = "rotate(1deg)";
}


/**
 * DESIGNER SKILLS
 */
var designer = document.querySelector('#skills_designer');
var designerSkills = document.querySelector('#skills_designer__list');
var icon_angleDesign = document.querySelector('#designAngle');
designer.addEventListener('click', afficheListDesign);
designer.addEventListener('dblclick', cacheListDesign);

function afficheListDesign(){
    designerSkills.style.display = "block";
    frontendSkills.style.display = "none";
    backendSkills.style.display = "none"; 
    icon_angleDesign.style.transform = "rotate(-180deg)";
    icon_angleDesign.style.transition = "all 0.4s ease-in-out";
    cacheListSkillsFront();
    cacheListBack();
}

function cacheListDesign(){
    designerSkills.style.display = "none";
    icon_angleDesign.style.transform = "rotate(1deg)";
}


/**
 * ============= QUALIFICATIONS =========
 * 
 */

var work = document.querySelector('#button_work');
var education = document.querySelector('#button_education');
var qualification_two = document.querySelector('#qualif_partTwo');
var qualification_one = document.querySelector('#qualif_partOne');

work.addEventListener('click', afficheQualifWork);
education.addEventListener('click', afficheQualifEdu);


function afficheQualifWork(){
    qualification_two.style.display = "block";
    qualification_one.style.display = "none";
    work.style.color = "#6e57e0";
    education.style.color = "#625C7E";
}

function afficheQualifEdu(){
    qualification_one.style.display = "block";
    qualification_two.style.display = "none";
    education.style.color = "#6e57e0";
    work.style.color = "#625C7E";
}