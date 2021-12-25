let objDarke = {
  nameMem: "darke",
  myMsgs: {
    1: "aaaaaaaaaa",
    3: "aaaaaaaaaa",
    5: "aaaaaaaaaa"
  },
  hMsgs: {
    2: "zzzzzzzzzzzz",
    4: "zzzzzzzzzzzz",
    6: "zzzzzzzzzzzz"
  }
};

let remoteJob = {
  ...objDarke.myMsgs,
  ...objDarke.hMsgs
};
console.log( remoteJob );

for ( const x in remoteJob ) {

  if ( objDarke.myMsgs[ x ] !== "undefined" ) {
    // add class me to the element
  } else {
    // add class he to the element

  }
  console.log( x + "--" + remoteJob[ x ] );
}






/*

function printMsgs ( data ) {
  for ( const x in data ) {
    let cls = "me";
    // if ( storageData[ x ] !== undefined ) {
    //   cls = "me";
    // } else {
    //   cls = "friend";
    // }
    let Paragraph = `<p class="${ cls }">${ data[ x ] }</p>`;
    messages.innerHTML += Paragraph;
    console.log( "XXXXXXXXXXXXX" );
  }
}
*/

/*

            <p class="friend">so, how's your new phone?</p>
            <p class="friend">you finally have a smartphone :D</p>
            <p class="me">drake?</p>
            <p class="me">Why aren't you answering?</p>
            <p class="friend">howdoyoudospace</p>
            <p class="friend">so, how's your new phone?</p>
            <p class="friend">you finally have a smartphone :D</p>
            <p class="me">drake?</p>
            <p class="me">Why aren't you answering?</p>
            <p class="me">Why aren't you answering?</p>
            <p class="friend">howdoyoudospace</p>
            <p class="friend">so, how's your new phone?</p>
            <p class="friend">you finally have a gggggggggggggggggggg gggggggggggg ggggggg smartphone :D</p>
            <p class="me">drake?</p>
            <p class="me">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ducimus aut dolor. Nemo
              eaque minus dolorum? Consequuntur repudiandae, autem aspernatur ducimus iste explicabo doloribus similique
              saepe reiciendis delectus quis. Neque.</p>
            <p class="me">Why aren't you answering?</p>
            <p class="friend">howdoyoudospace</p>
            <p class="friend">so, how's your new phone?</p>
            <p class="friend">you finally have a smartphone :D</p>
            <p class="me">drake?</p>
            <p class="me">Why aren't you answering?</p>
            <p class="friend">howdoyoudospace</p>
*/
