window.addEventListener('DOMContentLoaded', () => {
    const tableContent = [
        "Walmart",
        "State Grid",
        "Sinopec Group",
        "China National Petroleum",
        "Royal Dutch Shell",
        "Toyota Motor",
        "Volkswagen",
        "BP",
        "Exxon Mobil",
        "Berkshire Hathaway"
    ];

    const filterTableBtn = document.getElementById('filterTable');
    const table = document.getElementById('table');
    const queryElement = document.getElementById('query');

    const filterTable = (array, query) => {
        const lowerCaseQuery = query.toLowerCase();
        return array.filter(element => element.toLowerCase().includes(lowerCaseQuery))
    };

    const createTable = array => {
        const tableBody = document.createElement('tbody');

        if (table.hasChildNodes()) {
            table.removeChild(table.firstChild)
        }

        array.forEach(element => {
            const tableRow = document.createElement('tr');
            const tableData = document.createElement('td');

            tableRow.classList.add('table__row');
            tableData.classList.add('table__data');

            tableData.innerText = element;
            tableRow.appendChild(tableData);

            tableBody.appendChild(tableRow)
        });
        table.appendChild(tableBody);
        return table
    };

    const refreshTable = () => createTable(filterTable(tableContent, queryElement.value));

    createTable(tableContent);

    filterTableBtn.addEventListener('click', refreshTable);
    queryElement.addEventListener('keydown', e => {
        const key = e.which;
        if (key === 13) refreshTable()
    })
});
