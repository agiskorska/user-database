fetch('http://localhost:3000')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        displayTable(data)
    })

const displayTable = (data) => {
    const wrapper = document.getElementById('user-table');
    for (let i = 0; i <= 50; i++) {
        const row = document.createElement('tr');
        for(let atr in data[i]){
            if (atr != 'id') {
                const td = document.createElement('td')
                node = document.createTextNode(data[i][`${atr}`])
                td.appendChild(node);
                row.appendChild(td);
            }
            data[i][`${atr}`]
        }
        wrapper.appendChild(row)
    }
}

