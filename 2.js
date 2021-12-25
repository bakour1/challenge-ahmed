
let form = document.querySelector( "form.create-member" );
let nameAdded = document.getElementById( "name-added" );
let msg = document.getElementsByTagName( "textarea" )[ 0 ];
let btnAdd = document.getElementById( "creat-member" );
let output = document.getElementById( "myUL" );
let lis = document.querySelectorAll( ".member" );
let active = document.getElementsByClassName( "active" );
let sendTo = document.getElementById( "send-to" );
let openCreate = document.getElementById( "open-create" );
let messages = document.getElementsByClassName( "messages" )[ 0 ];
let objectStorage;
/* --------------------------------------- */
window.onload = function () {
  sendTo.textContent = active[ 0 ].children[ 1 ].children[ 0 ].textContent;
};
// --------------

// open-create
openCreate.addEventListener( "click", funcAddName );

function funcAddName () {

  let addName = document.querySelector( ".add-name" );

  if ( addName.style.display === "block" ) {

    addName.style.display = "none";
    lis.forEach( e => e.style.display = "" );
    openCreate.innerHTML = `<i class="far fa-edit"></i>`;

  } else {
    addName.style.display = "block";
    lis.forEach( e => e.style.display = "none" );
    openCreate.innerHTML = `<i class="fas fa-times"></i>`;
  }
}

/* ----creat----------------- */

form.addEventListener( "submit", function ( e ) {
  if ( nameAdded.value.trim() == "" || nameAdded.value.trim() == "Type a Name" ) {
    return;
  }
  if ( msg.value == "Type your Message..." ) {
    msg.value = "";
  }
  e.preventDefault();
  removeActive();

  let liOut = document.createElement( "li" );
  liOut.classList.add( "member", "active" );

  let id = Date.now();

  let dateCreate = formatAMPM( new Date );

  let newMember = `
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpq-D_mNYfW531QWhAc1fVqW2XWdO9fCzO6Q&usqp=CAU"
      alt="">
    <div class="content">
      <h3 class="name-member">${ nameAdded.value }</h3>
      <p>${ msg.value }</p>
      <span class="date">${ dateCreate }</span>
    </div>
  `;
  output.prepend( liOut );
  liOut.innerHTML = newMember;

  funcAddName();

  storageData( id );

  printMsgs( objectStorage, id );
  nameAdded.value = "Type a Name";
  msg.value = "Type your Message...";
} );
/* ================= */


/* ================= */


function removeActive () {
  let lisA = document.querySelectorAll( ".member" );
  lisA.forEach( function ( ele ) { ele.classList.remove( "active" ); } );
}




/* ============================== */
// Search input
let input, filter, ul, li, nameMember, i, txtValue;
input = document.getElementById( 'inputSearch' );
input.onfocus = function () {
  openCreate.style.display = "none";
};
input.onblur = function () {
  openCreate.style.display = "";
};

input.addEventListener( "keyup", function myFunction () {
  filter = input.value.toUpperCase();

  ul = document.getElementById( "myUL" );

  li = ul.getElementsByTagName( 'li' );

  for ( i = 0; i < li.length; i++ ) {

    nameMember = li[ i ].getElementsByClassName( "name-member" )[ 0 ];

    txtValue = nameMember.textContent || nameMember.innerText;

    if ( txtValue.toUpperCase().indexOf( filter ) > -1 ) {
      li[ i ].style.display = "";
    } else {
      li[ i ].style.display = "none";
    }
  }
} );


/* =============================================================== */

window.addEventListener( "click", function ( e ) {
  if ( e.target.classList.contains( "member" ) ) {

    let lisA = document.querySelectorAll( ".member" );

    lisA.forEach( function ( li ) {

      li.addEventListener( "click", function () {

        lisA.forEach( function ( ele ) { ele.classList.remove( "active" ); } );
        this.classList.add( "active" );

        let h3Name = this.children[ 1 ].children[ 0 ].textContent;
        sendTo.textContent = h3Name;
      } );
    } );
  }
} );


function formatAMPM ( date ) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

/* =========================================== */





let objThomas = {
  thom: {
    nameMem: "thomas",
    myMsgs: {
      1: "aaaaaaaaaa",
      3: "aaaaaaaaaa",
      5: "aaaaaaaaaa",
      6: "aaaaaaaaaa",
      7: "aaaaaaaaaa",
      8: "aaaaaaaaaa",
    },
    hMsgs: {
      2: "zzzzzzzzzzzz",
      4: "zzzzzzzzzzzz",
      6: "zzzzzzzzzzzz",
      9: "zzzzzzzzzzzz",
      10: "zzzzzzzzzzzz",
      11: "zzzzzzzzzzzz",
      12: "zzzzzzzzzzzz",
      13: "zzzzzzzzzzzz",
      14: "zzzzzzzzzzzz",
    }
  },
};

let remoteJob = {
  ...objThomas.thom.myMsgs,
  ...objThomas.thom.hMsgs
};
/* ====================================== */
/* ---------------------------- */
objectStorage = {

};

let numb = 0;

function storageData ( id ) {
  numb += 1;
  let nestedObj = Object.defineProperty( {}, numb, { value: msg.value } );
  Object.defineProperty( objectStorage, id, { value: nestedObj } );

  console.log( objectStorage );
  console.log( objectStorage[ id ] );
}

/* ------------ */

/* ====================================== */

// printMsgs( remoteJob );

// function printMsgs ( data ) {
//   for ( const x in data ) {
//     let cls;
//     if ( objThomas.thom.myMsgs[ x ] !== undefined ) {
//       cls = "me";
//     } else {
//       cls = "friend";
//     }
//     let Paragraph = `<p class="${ cls }">${ data[ x ] }</p>`;
//     messages.innerHTML += Paragraph;
//   }
// }
function printMsgs ( data, id ) {
  let cls = "me";
  let Paragraph = `<p class="${ cls }">${ data[ id ][ numb ] }</p>`;
  messages.innerHTML += Paragraph;

}
// ==========================


/* ---------------------------- */


/* ------------ */



/* ---------------------------- */
let objDrake = {
  nameMem: "thomas",
  myMsgs: {
    1: "aaaaaaaaaa",
    3: "aaaaaaaaaa",
    5: "aaaaaaaaaa",
    6: "aaaaaaaaaa",
    7: "aaaaaaaaaa",
    8: "aaaaaaaaaa",
  },
  hMsgs: {
    2: "zzzzzzzzzzzz",
    4: "zzzzzzzzzzzz",
    6: "zzzzzzzzzzzz",
    9: "zzzzzzzzzzzz",
    10: "zzzzzzzzzzzz",
    11: "zzzzzzzzzzzz",
    12: "zzzzzzzzzzzz",
    13: "zzzzzzzzzzzz",
    14: "zzzzzzzzzzzz",
  }
};

let remoteJob1 = {
  ...objDrake.myMsgs,
  ...objDrake.hMsgs
};




