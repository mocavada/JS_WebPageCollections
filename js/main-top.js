
console.log("JS External Connection Success");
var count = 0;

function addRow() {
    console.log("Click");

    var itemData = document.getElementById('getItem').value;
    var quantityData = document.getElementById('getQty').value;
    count++;

    if (itemData=="" || itemData==null ) {
       alert("Please Enter Item");
       return;
    } 
    
    if (quantityData=="" || quantityData==null ) {
        alert("Please Enter Quantity");
        return;
    }
       
        var list = document.getElementById("tableBody");

        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var di = document.createTextNode(itemData);
        var dq = document.createTextNode(quantityData);
        var dx = document.createTextNode('Delete');
            
        td1.appendChild(di);
        td2.appendChild(dq);
        td3.appendChild(dx);

        var tds = list.appendChild(tr);

        tds.appendChild(td1);
        tds.appendChild(td2);
        tds.appendChild(td3);

        // Clear Inputs
        document.getElementById('getItem').value = '';
        document.getElementById('getQty').value = '';

        
    console.log(itemData);
    console.log(quantityData);
    console.log(count);


  }
  

//   function removeRow(input) {
//     document.getElementById('content').removeChild(input.parentNode);
//   }


