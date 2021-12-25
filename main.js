
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
let objectStorage = {}, dateCreate;
let formChat = document.getElementById( "form-chat" );
let msgChat = document.getElementById( "msg-chat" );
let btnChat = document.getElementById( "btn-chat" );
let id;
const weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

/* --------------------------------------- */

window.onload = function () {
  sendTo.textContent = active[ 0 ].children[ 1 ].children[ 0 ].textContent;
};


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

/* ----creat- member---------------- */
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
  id = Date.now();

  liOut.setAttribute( "set-data", id );

  dateCreate = formatAMPM( new Date );

  let newMember = `
    <img
      src="imgs/one.jpeg"
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

  firstMsg( objectStorage, id );

  nameAdded.value = "Type a Name";
  msg.value = "Type your Message...";
} );

// remove active from all

function removeActive () {
  let lisA = document.querySelectorAll( ".member" );
  lisA.forEach( function ( ele ) { ele.classList.remove( "active" ); } );
}

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


// add active
let str;
window.addEventListener( "click", function ( e ) {
  if ( e.target.classList.contains( "member" ) ) {
    if ( e.target.hasAttribute( "set-data" ) ) {

      str = e.target.getAttribute( "set-data" );

      printMsgsFromObj( str );
    }

    let lisA = document.querySelectorAll( ".member" );

    lisA.forEach( function ( li ) {

      li.addEventListener( "click", function () {
        removeActive();
        // lisA.forEach( function ( ele ) { ele.classList.remove( "active" ); } );
        this.classList.add( "active" );

        let h3Name = this.children[ 1 ].children[ 0 ].textContent;
        sendTo.textContent = h3Name;

      } );
    } );
  }
} );

// messages
function printMsgsFromObj ( key ) {
  let time = +key;
  timeCreated = new Date( time );
  let d = new Date( time ).getDay();
  let day = weekday[ d ];
  let len = Object.getOwnPropertyNames( objectStorage[ key ] ).length;

  messages.innerHTML = `<span class="date">${ day },${ formatAMPM( timeCreated ) }</span>`;

  for ( let i = 1; i <= len; i++ ) {

    let cls = "me";
    let Paragraph = `
    <p class="${ cls }">${ objectStorage[ key ][ i ] }</p>
    `;

    messages.innerHTML += Paragraph;
  }

}

// format date
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


// storageData from creat member to object
let myNumb;

function storageData ( id ) {
  myNumb = 0;
  let nestedObj = Object.defineProperty( {}, ++myNumb, { value: msg.value } );
  Object.defineProperty( objectStorage, id, { value: nestedObj } );
}

// first msg

function firstMsg ( data, id ) {

  const d = new Date();
  let day = weekday[ d.getDay() ];

  let cls = "me";
  let Paragraph = `
  <span class="date">${ day },${ dateCreate }</span>
  <p class="${ cls }">${ data[ id ][ myNumb ] }</p>
  `;
  messages.innerHTML = Paragraph;
}

// print msg in chat

formChat.addEventListener( "submit", function ( e ) {
  if ( msgChat.value.trim() == "" ) {
    return e.preventDefault();;
  }
  e.preventDefault();
  cls = "me";
  let Paragraph = `
  <p class="${ cls }">${ msgChat.value }</p>
  `;

  let active = document.getElementsByClassName( "active" );
  let thisId = active[ 0 ].getAttribute( "set-data" );

  let numb = Object.getOwnPropertyNames( objectStorage[ thisId ] ).length;
  Object.defineProperty( objectStorage[ thisId ], ++numb, { value: msgChat.value } );

  messages.innerHTML += Paragraph;
  msgChat.value = "";
} );
