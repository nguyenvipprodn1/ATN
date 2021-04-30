var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable(){
    dataTable = $('#tblData').DataTable({
        "ajax":{
            "url": "/Authenticated/Shops/getallshops"
        },
        "columns":[
            {"data": "id", "width": "30%"},
            {"data": "location", "width": "30%"},
            {
                "data": "id",
                "render": function (data){
                    return `<div class="text-center">
                                <a href="/Authenticated/Shops/Upsert/${data}" class="btn btn-success text-white" style="cursor: pointer">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <a class="btn btn-danger text-white" href="/Authenticated/Shops/Delete/${data}"style="cursor: pointer">
                                    <i class="fas fa-trash-alt"></i>
                                </a>
                            </div>
                    `;
                },"width":"40%"
            }
        ],
        "language":{
            "emptyTable": "No data Found"
        },
        "width":"100%"
    });
}