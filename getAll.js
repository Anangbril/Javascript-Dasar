function getAll() {
    table = $('#mainBisnisTable').DataTable({
        ajax: {
            url: '/mainbisnis/get-all',
            dataSrc: ''
        },
        columns: [
            {
                orderable: false,
                data: null
            },
            {
                data: 'name'
            },
            {
                orderable: false,
                render: function (data, type, row) {
                    return /*html*/ `<button 
                                onclick='getById(${row.id})'
                                class='btn btn-sm btn-warning' 
                                data-bs-toggle='modal' 
                                data-bs-target='#addMainBisnisModal'> Edit</button>
                            <button class='btn btn-sm btn-danger'>Delete</button>`;
                }
            }
        ],
        "pageLength": 20,
        "lengthMenu": [20]
    });

    table.on('order.dt search.dt', function () {
        table.column(0, { search: 'applied', order: 'applied' }).nodes().each(function (cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
}