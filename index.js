
let isWhite = true;


if (isWhite){
    goWhite()
} else {
    goDark()
}


document.getElementById("segmentCellLight").addEventListener("click", () => {

    goWhite()
});

document.getElementById("segmentCellDark").addEventListener("click", ()=>{

    goDark()
})



function goWhite() {
    isWhite = true;



    document.body.style.background = "#FBFBFC"
    document.body.style.boxShadow = "0px 12px 20px -8px rgba(79, 81, 89, 0.16), 0px 6px 12px -4px rgba(79, 81, 89, 0.12), 0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset, 0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset";



    let segmentCellLinks =  document.querySelector(".segmentCell")
    let segmentCellRechts = document.querySelector(".segmentCellRechts")


    segmentCellLinks.classList.add("segmentWhiteModeSelected");
    segmentCellRechts.classList.remove("segmentDarkModeSelected")

    segmentCellLinks.classList.add('noHoverAnimation')
    segmentCellRechts.classList.remove('noHoverAnimation')


    let navbar = document.querySelector(".navBar");
    navbar.style.background = "rgba(255, 255, 255, 0.90)"
    navbar.style.borderBottom = "1px solid #E9E9EC";


    var sidebarElements = document.querySelectorAll(".sidebar-01-backdrop");

    sidebarElements.forEach(function(element) {
        element.addEventListener('mouseenter', function() {
            this.classList.add("whiteMode");
        });

        element.addEventListener('mouseleave', function() {
            this.classList.remove("whiteMode");
        });
    });

    document.getElementById("Backdrop").style.backgroundImage = "url('ImagesHome/pattern.png')"
    document.getElementById("container").style.background = "linear-gradient(180deg, #F5F5F5 0%, rgba(253, 253, 253, 0.00) 100%)"


    // top labels
    kleurInWit()


    let segment = document.querySelector(".segment")
    segment.style.background = "rgba(9, 9, 11, 0.02)";
    segment.style.boxShadow = "0px 1px 1px 0px rgba(79, 81, 89, 0.06) inset, 0px 0px 1px 0.5px rgba(79, 81, 89, 0.03) inset"

    let notificationIcon = document.getElementById("NotificationIcon")
    notificationIcon.style.fill = "#707480"
    notificationIcon.removeAttribute("fill-opacity")


    let lightIcon = document.getElementById("lightIcon")
    lightIcon.style.fill = "#707480"
    lightIcon.removeAttribute("fill-opacity")

    let darkicon = document.getElementById("darkIcon")
    darkicon.style.fill = "#707480"
    darkicon.removeAttribute("fill-opacity")



    navBottom(true)

    document.querySelector(".bodyRechts").style.borderLeft = "1px solid #E9E9EC"

    document.getElementById('mainLogo').src = 'ImagesHome/nedusLight.png';

    // border top
    document.querySelector(".logo-div").style.borderBottom = "1px solid rgba(188, 189, 194, 0.18)";

    // border center
    document.querySelector(".container-01").style.borderBottom = "none"
    // border bottom
    document.querySelector(".module").style.borderTop ="1px solid rgba(188, 189, 194, 0.18)"

    var keys = document.querySelectorAll(".keys");
    keys.forEach(function(key) {
        key.style.background = "";
        key.style.boxShadow = "";
    });

    var separators = document.querySelectorAll(".nabarSeprator");

    separators.forEach(function(sep) {
        sep.style.fill = "black";
        sep.style.fillOpacity = "";
    });


}

function goDark() {
    isWhite = false

    document.body.style.background = "rgba(23, 23, 23, 0.93)"
    document.body.style.background = "0px 12px 20px -8px rgba(0, 0, 0, 0.16), 0px 6px 12px -4px rgba(0, 0, 0, 0.12), 0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset, 0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;"


    let segmentCellLinks =  document.querySelector(".segmentCell")
    let segmentCellRechts = document.querySelector(".segmentCellRechts")

    segmentCellRechts.classList.add("segmentDarkModeSelected")
    segmentCellLinks.classList.remove("segmentWhiteModeSelected")

    segmentCellLinks.classList.remove('noHoverAnimation')
    segmentCellRechts.classList.add('noHoverAnimation')

    let navbar = document.querySelector(".navBar");
    navbar.style.background = ""
    navbar.style.borderBottom = "";



    document.getElementById("Backdrop").style.backgroundImage = ""
    document.getElementById("container").style.background = "rgba(45, 212, 187, 0.07)"

    kleurInBlack()

    let segment = document.querySelector(".segment")
    segment.style.background = "";
    segment.style.boxShadow = ""


    navBottom()


    document.querySelector(".bodyRechts").style.borderLeft = ""
    document.getElementById('mainLogo').src = 'ImagesHome/nedus.png';

    document.querySelector(".logo-div").style.borderBottom = "1px solid rgba(184, 184, 184, 0.11)";
    document.querySelector(".container-01").style.borderBottom = ""
    document.querySelector(".module").style.borderTop ="1px solid rgba(184, 184, 184, 0.11)"



    var keys = document.querySelectorAll(".keys");
    keys.forEach(function(key) {
        key.style.background = "linear-gradient(180deg, #222 0%, rgba(34, 34, 34, 0.98) 100%)";
        key.style.boxShadow = "0px 4px 4px -4px rgba(0, 0, 0, 0.32), 0px 2px 5px -2px rgba(0, 0, 0, 0.03), 0px 2px 14px -2px rgba(0, 0, 0, 0.12), 0px 0px 0px 0.5px #000, 0px 0px 0px 1px rgba(184, 184, 184, 0.22) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset, 0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset";
    });


    var separators = document.querySelectorAll(".nabarSeprator");

    separators.forEach(function(sep) {
        sep.style.fill = "";

    });
}



function kleurInWit() {
    var elements = document.querySelectorAll('.backdrop-container p');
    elements.forEach(function(element) {
        element.style.color = '#4F5159';
    });

}


function kleurInBlack() {

    var elements = document.querySelectorAll('.backdrop-container p');
    elements.forEach(function(element) {
        element.style.color = '#B8B8B8';
    });
}

function navBottom(bool) {


    // Bottom support & settings
    var links = document.querySelectorAll('.items-backdrop a');
    links.forEach(function(link) {

        if (bool){
            link.style.color = '#4F5159';
        } else {
            link.style.color = '#B8B8B8';
        }

    });

    var paths = document.querySelectorAll('.items-backdrop path');
    paths.forEach(function(path) {

        if (bool){
            path.style.fill = '#707480';
        } else {
            path.style.fill = '#6E6E6E';
        }

    });

}

function resetSelectedElement(previousElement) {
    var previousPath = previousElement.querySelector('path');
    previousPath.setAttribute('fill', '#6E6E6E');

    previousElement.style.background = "";
    previousElement.style.borderRadius = "";
    previousElement.style.boxShadow = "";

    var prevBackdropParagraph = previousElement.querySelector('.backdrop-container p');
    var paragraphColor = getComputedStyle(prevBackdropParagraph).color;

    if (paragraphColor === 'rgb(24, 24, 27)') {
        prevBackdropParagraph.style.color = "#4F5159";
    } else {
        prevBackdropParagraph.style.color = "";
    }
}


function selectElement(element) {
    var path = element.querySelector('path');
    path.setAttribute('fill', '#F7BB00');

    element.style.borderRadius = "6px";

    var backdropParagraph = element.querySelector('.backdrop-container p');

    if (isWhite) {
        element.style.background = "rgba(188, 189, 194, 0.20)";
        element.style.boxShadow = "0px -1px 0px 0px rgba(188, 189, 194, 0.20) inset";
        kleurInWit();
        backdropParagraph.style.color = "#18181B";
    } else {
        backdropParagraph.style.color = "#E5E5E5";
        element.style.background = "rgba(184, 184, 184, 0.13)";
        element.style.boxShadow = "0px -1px 0px 0px rgba(184, 184, 184, 0.09) inset";
    }
}

var selectedElement = null;
var sidebarElements = document.querySelectorAll('.sidebar-01-backdrop');
var firstElement = document.querySelector('.sidebar-01-backdrop');


selectElement(firstElement);
selectedElement = firstElement;

sidebarElements.forEach(function(element) {
    element.addEventListener('click', function() {
        if (selectedElement && selectedElement !== element) {
            resetSelectedElement(selectedElement);
        }

        selectElement(element);
        selectedElement = element;
    });
});


const mixedAvatar = document.querySelector('.mixedAvatar');
const menuList = mixedAvatar.querySelector('.menuList');

mixedAvatar.addEventListener('mouseover', function() {
    menuList.style.display = 'flex';
});

menuList.addEventListener('mouseleave', function() {
    menuList.style.display = 'none';
});



// Menu Theme Click START

document.getElementById("menuItem-Theme").addEventListener("click", ()=>{

    document.querySelector(".menuContainer").style.display = "none";


    //document.querySelector(".menuListBackdrop").style.height = "175";
    document.querySelector(".menuContainer2").style.display = "flex";



})


document.getElementById("menuItem-Theme2").addEventListener("click", ()=>{
    document.querySelector(".menuContainer").style.display = "flex";
    document.querySelector(".menuListBackdrop").style.height = "";
    document.querySelector(".menuContainer2").style.display = "none";
})


document.getElementById("Theme-DarkMode").addEventListener("click", ()=>{
    goDark()
})

document.getElementById("Theme-LightMode").addEventListener("click", ()=>{
    goWhite()
})
// Menu Theme Click END




// NotificationIcon START


document.querySelector(".mixedNotification").addEventListener("click", (event) => {
    document.querySelector(".navBarNotifications").style.display = "flex";
    let notificationBtn = document.getElementById("notificationBtn")
    notificationBtn.style.background = "rgba(188, 189, 194, 0.25)";
    notificationBtn.style.borderRadius = "6px"

    const segmentCreated = document.getElementById('segmentCreated');

    segmentCreated.style.borderRadius = '6px';
    segmentCreated.style.background = '#FFF';
    segmentCreated.style.boxShadow = '0px 4px 4px -4px rgba(79, 81, 89, 0.32), 0px 2px 5px -2px rgba(79, 81, 89, 0.03), 0px 2px 14px -2px rgba(79, 81, 89, 0.12), 0px 0px 0px 1px rgba(188, 189, 194, 0.30), 0px 1px 1px 0px rgba(188, 189, 194, 0.20)';



    event.stopPropagation(); // Stop event bubbling
});


document.addEventListener("click", (event) => {
    const navBar = document.querySelector(".navBarNotifications");
    const isClickedOutsideNavBar = !navBar.contains(event.target);

    if (isClickedOutsideNavBar) {
        navBar.style.display = "none";
        notificationBtn.style.background = '';
        notificationBtn.style.borderRadius = ""
    }
});
// NotificationIcon END