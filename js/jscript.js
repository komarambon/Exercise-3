$.ajax({
    url         : "js/swapi.json",
    type        : "GET",
    dataType    : "json",
    data        : {get_param : 'value'},
    success     : function(data){
        //menghitung jumlah data
        jmlData = data.length;
        
        //variabel untuk menampung tabel yang akan digenerasikan
        buatTabel = "";
        
        //perulangan untuk menayangkan data dalam tabel
        buatTabel += "<tbody>";
        for(a = 0; a < jmlData; a++){
            
            //mencetak baris baru
            buatTabel += "<tr>"
            
                        + "<td><b>" + data[a]["id"] + "</b></td>"
                        + "<td>" + data[a]["name"] + "</td>"
                        + "<td>" + data[a]["model"] + "</td>"
                        + "<td>" + data[a]["manufacturer"] + "</td>"
                        + "<td>" + data[a]["length"] + "</td>"
                        + "<td>" + data[a]["crew"] + "</td>"
                        + "<td>" + data[a]["passengers"] + "</td>"
                        + "<td>" + data[a]["cargo_capacity"] + "</td>"
                        + "<td>" + data[a]["consumables"] + "</td>"
                        + "<td>" + data[a]["vehicle_class"] + "</td>"

            //tutup baris baru
                + "<tr/>";
        }
        buatTabel += "</tbody>";

        //mencetak tabel
        document.getElementsByTagName("table")[0].innerHTML += buatTabel;
    }
});

function searchTable() {
    var input;
    var saring;
    var status; 
    var tbody; 
    var tr; 
    var td;
    var i; 
    var j;
    input = document.getElementById("input");
    saring = input.value.toUpperCase();
    tbody = document.getElementsByTagName("tbody")[0];;
    tr = tbody.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(saring) > -1) {
                status = true;
            }
        }
        if (status) {
            tr[i].style.display = "";
            status = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}