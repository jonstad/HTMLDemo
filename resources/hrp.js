function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

var Skoler = [
["Skole1",1,2],
["Skole2",3,4],
["Skole3",5,6],
["Skole14",7,8]
]





var Grunnkretser = [
    "Eikeberg",
    "Killingmo",
    "Finstadbru",
    "Bokstad",
    "Aursmoen",
    "Harathon",
    "Auten",
    "Lierfoss",
    "Haneborg",
    "Mangen",
    "Tangen",
    "Kolstad",
    "Kinnestad",
    "Åserud",
    "Hornås",
    "Bjørkelangen Vest",
    "Bjørkelangen Øst",
    "Eidslia",
    "Ihlebekk",
    "Fosser",
    "Sandem",
    "Hjellebøl",
    "Løken Øst",
    "Løken Vest",
    "Mo",
    "Hafstein",
    "Bjørnebråten",
    "Mørk",
    "Østby",
    "Bergsjø",
    "Kolberg",
    "Lund",
    "Steinersby",
    "Kragtorp",
    "Bråte",
    "Hemnes",
    "Gangnes",
    "Trosterud",
    "Sandum",
    "Tårnby",
    "Trandum"
];


var kategorier = [
  ['SKOLE OG OPPVEKST','Lorem ipsum dolor sit amet,','SkoleOgOppvekst.html'],
  ['HELSE OG OMSORG','Lorem ipsum dolor sit amet,','HelseOgOmsorg.html'],
  ['SAMFERDSEL','Lorem ipsum dolor sit amet,','Samferdsel.html'],
  ['IDRETT, KIRKE OG KULTUR','Lorem ipsum dolor sit amet,','IdrettKirkeOgKultur.html'],
  ['ADMINISTRASJON','Lorem ipsum dolor sit amet,','Administrasjon.html'],
  ['EIENDOM OG KOMMUNALTEKNIKK','Lorem ipsum dolor sit amet,','EiendomOgKommunalteknikk.html'],
  ['Dashboard','Lorem ipsum dolor sit amet,','EiendomOgKommunalteknikk.html']
]



var skolesektor = [
  ['Grunnskole',"Gå til grunnskole", "SkoleHovedside.html"], 
  ['Barnehage',"Gå til barnehage ", "SkoleHovedside.html"], 
  ['Barnevern',"Gå til  barnevern", "SkoleHovedside.html"], 
  ['Videreående opplæring',"Gå til videreående ", "SkoleHovedside.html"]
];

var helseogomsorg = [
  ['Psykisk helse og rus',"Gå til ", "HelseHovedside.html"], 
  ['tannhelsetjenesten',"Gå til ", "HelseHovedside.html"], 
  ['Helse- og omsorgstjenester',"Gå til ", "HelseHovedside.html"], 
  ['Sosialtjenester opplæring',"Gå til ", "HelseHovedside.html"]
];

var sektor=[
  [1,'Grunnskole','Grunnskole.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [1,'Barnehage','SkoleOgOppvekst.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [1,'Barnevern','SkoleOgOppvekst.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [2,'Helse og omsorg','HelseOgOmsorg.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [2,'Sosialsektoren samlet','HelseOgOmsorg.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [3,'Samferdsel','Samferdsel.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [4,'Kirke','IdrettKirkeOgKultur.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [4,'Kultursektoren','IdrettKirkeOgKultur.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [5,'Politisk styring og kontrollvirksomhet','Administrasjon.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [5,'Administrasjon','Administrasjon.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [5,'Fellesutgifter','Administrasjon.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [6,'Eiendomsforvaltning','EiendomOgKommunalteknikk.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [6,'Kommunale boliger','EiendomOgKommunalteknikk.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [6,'Fysisk planlegging, kulturminner, natur og nærmiljø','EiendomOgKommunalteknikk.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [6,'Vann, avløp, renovasjon og avløp','EiendomOgKommunalteknikk.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [6,'Brann og ulykkesvern','EiendomOgKommunalteknikk.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'],
  [6,'Næringsforvaltning','EiendomOgKommunalteknikk.html','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.']
  
]
var analysetrinn = [
  ['Nåsituasjon',"Gå til nåsituasjon", "SkoleHovedside.html"], 
  ['Behovsanalyse',"Gå til behovsanalyse ", "SkoleHovedside.html"], 
  ['Kapasitetsvurdering',"Gå til  barnevern", "SkoleHovedside.html"], 
  ['Analyse opplæring',"Gå til videreående ", "SkoleHovedside.html"]
  ['Totaloversikt for skole',"Gå til  barnevern", "SkoleHovedside.html"], 
];



function addWizards(){
  // Create an unordered list
  var list = document.createElement('ul');
  list.setAttribute('id', 'allFacets')
  list.setAttribute('class','facet-list' )
  // Create a list item for each wizard
  // and append it to the list
    wizards.forEach(function (wizard) {
    var li = document.createElement('li');
    li.setAttribute('class','facet')
    li.textContent = wizard;
    list.appendChild(li);
  });
  var app = document.querySelector('#foo');
  app = document.getElementById("div1");
  app.appendChild(list);
}
function addButtons(){

    wizards.forEach(function (wizard){

        var lvl1 = document.createElement('div');
        lvl1.setAttribute("class","stack-large column large-4 medium-12 small-12");

        var lvl2 = document.createElement('div')
        lvl2.setAttribute("class","resource-link-block row--column resource-link-block__align-top");

        var lvl3 = document.createElement('div')
        lvl3.setAttribute("class","resource-link-block__text-container column resource-link-cta-block--light-blue");


        var lvl4 = document.createElement('h3')
        lvl4.setAttribute("class","resource-link-block__heading");
        var node = document.createTextNode(wizard[0]);
        lvl4.appendChild(node)
        var lvl5 = document.createElement('div')
        lvl5.setAttribute("class","resource-link-block__description stack-regular");
        var lvl6 = document.createElement('a')
        lvl6.href = "SkoleHovedside.html"
        node = document.createTextNode(wizard[1]);
        lvl6.appendChild(node);
        lvl5.appendChild(lvl6);
        lvl4.appendChild(lvl5);

        lvl3.appendChild(lvl4);
        lvl2.appendChild(lvl3);
        lvl1.appendChild(lvl2);
        app = document.getElementById("div1");
        app.appendChild(lvl1);


    });  
  }

function leggTilSkoler(divID){
  skoler.forEach(function (skole) {
    var node = document.createElement('h3');
    node.setAttribute("class","resource-link-block__heading");
    var textnode = document.createTextNode(skole[1]);
    node.appendChild(textnode);
  
    var node2 = document.createElement('a')
    // node2.href = skole[2];
    node2.style.fontSize="15px";
    var textnode2 = document.createTextNode("Gå til ");
    node2.appendChild(textnode2)
    
    node.appendChild(wrapInDiv("resource-link-block__description stack-regular",node2))
  
    node = wrapInDiv("resource-link-block__text-container column resource-link-cta-block--light-blue",node)
    node = wrapInDiv("resource-link-block row--column resource-link-block__align-top",node)
    node = wrapInDiv("stack-large column large-4",node)
  
    app = document.getElementById(divID);
    app.appendChild(node);
 
  
  });
}


function leggTilSektor(divID,sektorID){
  // Legger til detaljer om skole, barnehage etc.
  sektor.forEach(function (sek) {
    if(sek[0]== sektorID){
    var node = document.createElement('h3');
    node.setAttribute("class","resource-link-block__heading");
    var textnode = document.createTextNode(sek[1]);
    node.appendChild(textnode);
  
    var node2 = document.createElement('a')
    node2.href = sek[2];
    node2.style.fontSize="15px";
    var textnode2 = document.createTextNode("Gå til "+ sek[1].toLowerCase());
    node2.appendChild(textnode2)
    
    node.appendChild(wrapInDiv("resource-link-block__description stack-regular",node2))
  
    node = wrapInDiv("resource-link-block__text-container column resource-link-cta-block--light-blue",node)
    node = wrapInDiv("resource-link-block row--column resource-link-block__align-top",node)
    node = wrapInDiv("stack-large column large-4",node)
  
    app = document.getElementById(divID);
    app.appendChild(node);
    }
  });
}

function leggTilKategori(divID,kategoriID){
  var node = document.createElement('h3');
  node.setAttribute("class","resource-link-block__heading");
  var textnode = document.createTextNode(kategorier[kategoriID][0]);
  node.appendChild(textnode);

  var node2 = document.createElement('a')
  node2.href = kategorier[kategoriID][2];
  node2.style.fontSize="15px";
  var textnode2 = document.createTextNode("Gå til "+ kategorier[kategoriID][1].toLowerCase());
  node2.appendChild(textnode2)
  
  node.appendChild(wrapInDiv("resource-link-block__description stack-regular",node2))

  node = wrapInDiv("resource-link-block__text-container column resource-link-cta-block--light-blue",node)
  node = wrapInDiv("resource-link-block row--column resource-link-block__align-top",node)
  node = wrapInDiv("stack-large column large-4",node)

  app = document.getElementById(divID);
  app.appendChild(node);
}
function leggTilKategoriLang(divID,kategoriID){
  var node = document.createElement('h3');
  node.setAttribute("class","resource-link-block__heading");
  var textnode = document.createTextNode(kategorier[kategoriID][0]);
  node.appendChild(textnode);

  var node2 = document.createElement('a')
  node2.href = kategorier[kategoriID][2];
  node2.style.fontSize="15px";
  var textnode2 = document.createTextNode("Gå til "+ kategorier[kategoriID][1].toLowerCase());
  node2.appendChild(textnode2)
  
  node.appendChild(wrapInDiv("resource-link-block__description stack-regular",node2))

  node = wrapInDiv("resource-link-block__text-container column resource-link-cta-block--light-blue",node)
  node = wrapInDiv("resource-link-block row--column resource-link-block__align-top",node)
  node = wrapInDiv("stack-large column large-4",node)
  node = wrapInDiv("row3",node)
  app = document.getElementById(divID);
  app.appendChild(node);
}

function leggtiltilstandsknapp(text, id,href){
    var node = document.createElement('h4')
    node.setAttribute("class","resource-link-block__heading");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode)

    var node2 = document.createElement('a')
    node2.href = href;
    node2.style.fontSize="15px";
    var textnode2 = document.createTextNode("Gå til "+ text.toLowerCase());
    node2.appendChild(textnode2)
    
    node.appendChild(wrapInDiv("resource-link-block__description stack-regular",node2))

    node = wrapInDiv("resource-link-block__text-container column resource-link-cta-block--light-blue",node)
    node = wrapInDiv("resource-link-block row--column resource-link-block__align-top",node)
    node = wrapInDiv("stack-large column large-2",node)

    app = document.getElementById(id);
    app.appendChild(node);
}



    function wrapInDiv(class_description, element){
      var newelement = document.createElement('div');
      newelement.setAttribute("class",class_description);
      newelement.appendChild(element);
      return newelement;
    }

    function addSkoleOgOppvekst(){

      skolesektor.forEach(function (skole){

        var node = document.createElement('h3')
        node.setAttribute("class","resource-link-block__heading");
        var textnode = document.createTextNode(skole[0]);
        node.appendChild(textnode)

        var node2 = document.createElement('a')
        node2.href = skole[2];
        var textnode2 = document.createTextNode(skole[1]);
        node2.appendChild(textnode2)
        
        node.appendChild(wrapInDiv("resource-link-block__description stack-regular",node2))

        node = wrapInDiv("resource-link-block__text-container column resource-link-cta-block--light-blue",node)
        node = wrapInDiv("resource-link-block row--column resource-link-block__align-top",node)
        node = wrapInDiv("stack-large column large-4 medium-12 small-12",node)

        app = document.getElementById("div1");
        app.appendChild(node);

      });  
    }


    function leggTilSidebar(){



    }


      function leggTilSidebar(){


        // const newLocal = 
        //   +"<button class='contact-us-sidebar__open-btn'  aria-label='Åpne' aria-controls='contact-us-sidebar__info'>"
        //   + "<div class='xsmall-12 small-12 contact-us-sidebar__col'>"
        //   + "<div class='contact-us-sidebar__sidebar'><img src='.\\resources\\Blue_question_mark_icon.png' alt='Trenger du hjelp?' ></div>"
        //   + "</div></button>"
        //   + "<div class='contact-us-sidebar__info contact-us-sidebar__heading' aria-hidden='true' aria-expanded='false' id='contact-us-sidebar__info'>"
        //   + "<div class='row contact-us-sidebar__heading--spacing'><p class='contact-us-sidebar__heading--text'>Hjelp</p><button class='contact-us-sidebar__link contact-us-sidebar__close-btn'>"
        //   + "<img src='.\\resources\\x-white.svg' alt='close'></button></div></div>"
        //    + "<div class='contact-us-sidebar__info contact-us-sidebar__info-text'><button class='contact-us-sidebar__link contact-us-sidebar__close-btn'>"
        //   + "<a>Hjelpetekst for denne siden</a></button></div>"
        //   + "<div class='contact-us-sidebar__link--info'></div>"
        //   + "<div class='contact-us-sidebar__info contact-us-sidebar__info-text'> <h3>Hjelpetekst for denne siden</h3>     </div>"
        //   + "<div class='contact-us-sidebar__info contact-us-sidebar__info-text'> <p>Hjelpetekst for denne siden</p>   </div>";
          
          newLocal = +
          "<button type='button'>Click Me!</button>"
          
          // var foo ="<button class='contact-us-sidebar__open-btn'  aria-label='Åpne' aria-controls='contact-us-sidebar__info'><div class='xsmall-12 small-12 contact-us-sidebar__col'><div class='contact-us-sidebar__sidebar'><img src='.\\resources\\Blue_question_mark_icon.png' alt='Trenger du hjelp?' ></div></div></button><div class='contact-us-sidebar__info contact-us-sidebar__heading' aria-hidden='true' aria-expanded='false' id='contact-us-sidebar__info'><div class='row contact-us-sidebar__heading--spacing'><p class='contact-us-sidebar__heading--text'>Hjelp</p><button class='contact-us-sidebar__link contact-us-sidebar__close-btn'><img src='.\\resources\\x-white.svg' alt='close'></button></div></div><div class='contact-us-sidebar__info contact-us-sidebar__info-text'><button class='contact-us-sidebar__link contact-us-sidebar__close-btn'><a>Hjelpetekst for denne siden</a></button></div><div class='contact-us-sidebar__link--info'></div><div class='contact-us-sidebar__info contact-us-sidebar__info-text'> <h3>Hjelpetekst for denne siden</h3>     </div><div class='contact-us-sidebar__info contact-us-sidebar__info-text'> <p>Hjelpetekst for denne siden</p>   </div>";
          var foo ="<button class='contact-us-sidebar__open-btn'  aria-label='Åpne' aria-controls='contact-us-sidebar__info'><div class='xsmall-12 small-12 contact-us-sidebar__col'><div class='contact-us-sidebar__sidebar'><img src='.\\resources\\Blue_question_mark_icon.png' alt='Trenger du hjelp?' ></div></div></button>";

          foo += "<div class='contact-us-sidebar__info contact-us-sidebar__heading' aria-hidden='true' aria-expanded='false'' id='contact-us-sidebar__info'><div class='row contact-us-sidebar__heading--spacing'><p class='contact-us-sidebar__heading--text'>Hjelp</p> </div> </div> ";
          
          
          document.getElementById('test').innerHTML= foo;
    }


