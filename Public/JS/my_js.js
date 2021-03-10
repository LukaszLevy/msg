

$.get( "http://localhost:5000/db", function( data ) {
    add_contact_block(data)
});


function add_contact_block(d){
    $.each(d, function (indexInArray, valueOfElement) { 
    let obj = 
        `
            <tr>
                <td scope="row"><div class="name-bag">${this.imie}</div></td>
                <td scope="row"><div class="name-bag">${this.nazwisko}</div></td>
                <td><div class="name-bag msg-bag">${this.telefon}</div></td>
            </tr>  
        `
    $('tbody').append(obj);
    });
    
}


$('#send').on('click', function(){
    let a  = $("input[name=imie]").val();
    let b  = $("input[name=nazwisko]").val();
    let c  = $("input[name=tel]").val();
    console.log(a, b, c);
    // $.post( "http://localhost:5000/db", { imie: a, nazwisko: b, telefon: c } );
    $.post( "http://localhost:5000/db", { imie: a, nazwisko: b, telefon: c } );
    
})